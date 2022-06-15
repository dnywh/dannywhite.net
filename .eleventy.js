const htmlmin = require("html-minifier");
const { DateTime } = require("luxon");

module.exports = function (config) {
    // Copy folders into output directory
    config.addWatchTarget("./src/sass/");
    config.addPassthroughCopy("./src/img/");
    config.addPassthroughCopy("./src/fonts/");
    config.addPassthroughCopy("./src/js/");

    // Readable dates filter for blog posts
    // https://11ty.rocks/eleventyjs/dates/
    config.addFilter("postDate", (dateObj) => {
        // https://moment.github.io/luxon/#/formatting?id=toformat
        return DateTime.fromJSDate(dateObj).toFormat('MMMM yyyy');
    });

    //  ISO format dates filter
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

    return {
        // Set which directories Eleventy reads from and writes to
        dir: {
            input: "src",
            output: "public",
        },
    };
};