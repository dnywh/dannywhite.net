const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItAnchor = require("markdown-it-anchor");
const slugify = require("slugify");
// Shortcodes
const { srcset, src } = require("./src/helpers/shortcodes");
// Link list
const raindrop = require("./src/js/raindrop");
require('dotenv').config();

module.exports = function (config) {
    // Quieten console output
    config.setQuietMode(true);

    // Copy folders into output directory
    config.addWatchTarget("./src/sass/");
    config.addPassthroughCopy("./src/js/");
    config.addPassthroughCopy("./src/assets/");
    config.addPassthroughCopy("./src/site.webmanifest");
    // Allow redirects
    // https://daily-dev-tips.com/posts/adding-netlify-redirects-to-an-eleventy-site/
    config.addPassthroughCopy("src/_redirects");

    // Prepare footnotes and automatic heading anchors
    // https://www.alpower.com/tutorials/configuring-footnotes-with-eleventy/#fn1
    // https://11ty.rocks/eleventyjs/slugs-anchors/
    // https://rhianvanesch.com/posts/2021/02/09/adding-heading-anchor-links-to-an-eleventy-site/
    // TODO: this method causes some headings to hide on Safari Reader
    // Does this help?
    // https://www.sarasoueidan.com/blog/tips-for-reader-modes/
    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });
    const markdownItAnchorOptions = {
        level: [1, 2, 3],
        slugify: (str) =>
            slugify(str, {
                lower: true,
                strict: true,
                remove: /["]/g,
            }),
        tabIndex: false,
        permalink(slug, opts, state, idx) {
            state.tokens.splice(
                idx,
                0,
                Object.assign(new state.Token("div_open", "div", 1), {
                    // Add class "header-wrapper [h1 or h2 or h3]"
                    attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
                    block: true,
                })
            );

            state.tokens.splice(
                idx + 4,
                0,
                Object.assign(new state.Token("div_close", "div", -1), {
                    block: true,
                })
            );

            linkAfterHeader(slug, opts, state, idx + 1);
        },
    };
    //  Options for the `markdown-it` library
    const markdownItOptions = {
        html: true, // Enable HTML tags in source
        breaks: false,  // Convert '\n' in paragraphs into <br>
        linkify: false, // Autoconvert URL-like text to links
        typographer: true // Enable some language-neutral replacement + quotes beautification
    };
    // Set custom Markdown overrides
    let markdownLibrary = markdownIt(markdownItOptions).use(
        markdownItFootnote
    ).use(
        markdownItAnchor,
        markdownItAnchorOptions
    );
    // Tell Eleventy to swap to our custom Markdown config
    config.setLibrary("md", markdownLibrary);

    // Plugins
    // RSS (Atom) feed
    config.addPlugin(pluginRss);
    // Syntax highlighting for code in blog posts
    config.addPlugin(syntaxHighlight, {
        // TODO: allow inline code to be styled like pre code. E.g:
        // css> .some-class { background-color: red }
        // As shown in Gatsby tutorial here...
        // https://stephenweiss.dev/syntax-highlighting-prismjs-gatsby/#inline-code
        inlineCodeMarker: '>',
    });

    // Filters
    // Readable dates filter for blog posts
    // https://11ty.rocks/eleventyjs/dates/
    config.addFilter("postDate", (dateObj) => {
        // https://moment.github.io/luxon/#/formatting?id=toformat
        return DateTime.fromJSDate(dateObj).toFormat('MMMM yyyy');
    });

    // ISO format dates filter
    // It is used for <time> elements in places such as blog posts
    // https://learneleventyfromscratch.com/lesson/12.html#filters
    config.addFilter("w3PostDate", (dateObj) => {
        return dateObj.toISOString();
    });

    // Last build date 'X hours ago'
    // https://www.stefanjudis.com/snippets/how-to-display-the-build-date-in-eleventy/#edit%3A-eleventy-1.0-comes-with-%60addglobaldata%60
    // TODO: convert from date to relative time
    // https://writingjavascript.com/format-5-days-ago-localized-relative-date-strings-in-a-few-lines-with-native-javascript
    config.addGlobalData("siteGeneratedDate", () => {
        let now = new Date();
        return DateTime.fromJSDate(now).toFormat('EEEE, MMMM d');

    });

    config.addGlobalData("ISOSiteGeneratedDate", () => {
        let now = new Date();
        return DateTime.fromJSDate(now).toFormat('X');

    });

    // Year shortcode for copyright date(s)
    // https://11ty.rocks/eleventyjs/dates/#year-shortcode
    config.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Image shortcodes from helpers/shortcodes.js
    config.addShortcode("src", src);
    config.addShortcode("srcset", srcset);

    // Minify HTML and some other things
    config.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                // collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyJS: true,
                minifyURLs: true
            });
            return minified;
        }
        return content;
    });

    // Make a collection of guides
    // https://github.com/11ty/eleventy/issues/1284#issuecomment-1026679407
    config.addCollection("guidesBySubject", (collection) => {
        const guides = collection.getFilteredByTag("guide");
        const subjects = guides.map(guide => guide.data.subject)
        const uniqueSubjects = [...new Set(subjects)]
        const guidesBySubject = uniqueSubjects.reduce((prev, subject) => {
            const filteredGuides = guides.filter(guide => guide.data.subject === subject);

            return [
                ...prev,
                [subject, filteredGuides]
            ]
        }, []);

        return guidesBySubject;
    });


    return {
        // Set which directories Eleventy reads from and writes to
        dir: {
            input: "src",
            output: "public",
        },
    };
};