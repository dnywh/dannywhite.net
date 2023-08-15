// Import LightningCSS which minifies and improves CSS
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
// Import RSS functionality
const pluginRss = require("@11ty/eleventy-plugin-rss");
// Import a JS minifier
const { minify } = require("terser");
// Import specific packages from markdown-it
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
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/js/");

    // Plugins
    // Eleventy-flavoured Lightning CSS
    eleventyConfig.addPlugin(lightningCSS);
    // RSS (Atom) feed
    eleventyConfig.addPlugin(pluginRss);

    // Filters
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

    // Transforms
    // Only minify HTML if we are in production because it slows builds down
    if (process.env.ELEVENTY_RUN_MODE === "build") {
        eleventyConfig.addTransform('htmlmin', htmlMinTransform);
    }

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

    // Amendments
    // Find any external links in Markdown and make them open in new tabs
    const milaOptions = {
        html: true,
        matcher(href) {
            return href.match(/^https?:\/\//);
        },
        attrs: {
            target: "_blank",
            rel: "noopener"
        }
    };
    eleventyConfig.amendLibrary("md", mdLib => mdLib.use(mila, milaOptions));

    // End
    // Set which directories Eleventy reads from and writes to
    return {
        dir: {
            input: "src",
            output: "public",
        },
    }
}