// Import DateTime for custom timestamps
const { DateTime } = require("luxon");
// Import LightningCSS which minifies and improves CSS
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
// Import syntax (code) highlighting
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
// Import RSS functionality
const pluginRss = require("@11ty/eleventy-plugin-rss");
// Import automatic table of contents
const pluginTOC = require('eleventy-plugin-toc')
// Import a JS minifier
const { minify } = require("terser");
// Import specific packages from markdown-it
// First, markdown-it itself (since we extend it for smart quotes etc)
const markdownIt = require("markdown-it");
// Automatic anchor IDs
const markdownItAnchor = require('markdown-it-anchor')
// Automatic footnotes
const markdownItFootnote = require("markdown-it-footnote");
// Find any external links in Markdown and make them open in new tabs
const mila = require("markdown-it-link-attributes");
// Import my HTML minifier transform
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
// Import any shortcodes that are defined elsewhere
const { srcset, src } = require("./src/helpers/shortcodes");
// Import dotenv so I can use custom environment variables, such as the Raindrop trove
require('dotenv').config();

module.exports = function (eleventyConfig) {
    // Quieten console output
    eleventyConfig.setQuietMode(true);

    // Passthroughs
    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/site.webmanifest");

    // Plugins
    // Eleventy-flavoured Lightning CSS
    eleventyConfig.addPlugin(lightningCSS);
    // Code highlighting
    eleventyConfig.addPlugin(syntaxHighlight);
    // RSS (Atom) feed
    eleventyConfig.addPlugin(pluginRss);
    // Automatic table of contents
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3'],
    });

    // Filters
    // Date filter for ISO8601 format (for further manipulation in JavaScript)
    // https://www.aleksandrhovhannisyan.com/blog/useful-11ty-filters/#3-date-formatting
    const toISOString = (dateString) => new Date(dateString).toISOString();
    eleventyConfig.addFilter('toISOString', toISOString);
    // Date filter for month and year only
    eleventyConfig.addFilter("vagueDate", (dateObj) => {
        // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
        // Actually just using same format as `generatedDate` for now...
        return new Intl.DateTimeFormat(
            'en-GB', { month: "long", year: "numeric" }
        ).format(dateObj);
    });

    // Date filter for last updated date
    // https://11ty.rocks/eleventyjs/dates/#postdate-filter
    // https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
        // Actually just using same format as `generatedDate` for now...
        return new Intl.DateTimeFormat(
            'en-GB', { dateStyle: 'full' }
        ).format(dateObj);
    });

    // JS minifier
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
        code,
        callback
    ) {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            callback(null, code);
        }
    });

    // Global data
    // Unique generated date
    eleventyConfig.addGlobalData("ISOSiteGeneratedDate", () => {
        let now = new Date();
        return DateTime.fromJSDate(now).toFormat('X');
    });

    // Last build date 'X hours ago'
    // https://www.stefanjudis.com/snippets/how-to-display-the-build-date-in-eleventy/#edit%3A-eleventy-1.0-comes-with-%60addglobaldata%60
    // TODO: convert from date to relative time
    // https://writingjavascript.com/format-5-days-ago-localized-relative-date-strings-in-a-few-lines-with-native-javascript
    eleventyConfig.addGlobalData("siteGeneratedDate", () => {
        let now = new Date();
        return DateTime.fromJSDate(now).toFormat('EEEE, MMMM d');

    });



    // Transforms
    // Only minify HTML if we are in production because it slows builds down
    // if (process.env.ELEVENTY_RUN_MODE === "build") {
    eleventyConfig.addTransform('htmlmin', htmlMinTransform);
    // }

    // Shortcodes
    // Year shortcode for copyright date(s): https://11ty.rocks/eleventyjs/dates/#year-shortcode
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    // Image shortcodes from helpers/shortcodes.js
    eleventyConfig.addShortcode("src", src);
    eleventyConfig.addShortcode("srcset", srcset);

    // Collections
    // Make a collection of raindrops sorted by date saved, not date created
    const raindrops = require("./src/_data/trove.js")
    eleventyConfig.addCollection('raindrops', async () => {
        const data = await raindrops();
        // Access the items within the child array
        const items = data.items
        // Sort by date
        const sortedItems = items.sort((a, b) => {
            // Compare the `lastUpdate` property of each item
            const dateA = new Date(a.lastUpdate);
            const dateB = new Date(b.lastUpdate);
            return dateB - dateA; // Sort in descending order (latest first)
        });

        return sortedItems;
    });


    // Make a collection of note tags
    eleventyConfig.addCollection("notesByTag", (collectionApi) => {
        // Re-use notes collection from above
        const notes = collectionApi.getFilteredByTag("note")
        let ret = {};

        for (let note of notes) {
            if (note.data.tags) {
                for (let tag of note.data.tags) {
                    // Exclude the 'note' tag itself from entering the collection
                    if (tag !== "note") {
                        ret[tag] ??= [];
                        ret[tag].push(note);
                    }
                }
            }
        }

        // Now sort, and reconstruct the object
        ret = Object.fromEntries(Object.entries(ret).sort((a, b) => b[1].length - a[1].length));

        return ret;
    });

    // Markdown library amendments
    // Find any external links in Markdown and make them open in new tabs
    let markdownItOptions = {
        html: true, // Enable HTML tags in source
        breaks: false,  // Convert '\n' in paragraphs into <br>
        linkify: false, // Autoconvert URL-like text to links
        typographer: true, // Enable some language-neutral replacement + quotes beautification
    };
    const milaOptions = {
        matcher(href) {
            return href.match(/^https?:\/\//);
        },
        attrs: {
            target: "_blank",
            rel: "noopener"
        }
    };

    let mdLib = markdownIt(markdownItOptions);
    eleventyConfig.amendLibrary("md", mdLib => mdLib
        .use(mila, milaOptions)
        .use(markdownItAnchor)
        .use(markdownItFootnote)
    );

    eleventyConfig.setLibrary("md", mdLib);

    eleventyConfig.setServerOptions({
        // Show local network IP addresses for device testing (TODO: doesn't seem to work)
        // https://www.11ty.dev/docs/dev-server/
        showAllHosts: true,
    });

    // End
    // Set which directories Eleventy reads from and writes to
    return {
        dir: {
            input: "src",
            output: "public",
        },
    }
}