const htmlmin = require("html-minifier");

module.exports = function (config) {
    // Copy folders into output directory
    config.addWatchTarget("./src/sass/");
    config.addPassthroughCopy("./src/img/");

    // Year shortcode for copyright date(s)
    // https://11ty.rocks/eleventyjs/dates/#year-shortcode
    config.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Last build date 'X hours ago'
    // https://www.stefanjudis.com/snippets/how-to-display-the-build-date-in-eleventy/#edit%3A-eleventy-1.0-comes-with-%60addglobaldata%60
    // TODO: convert from date to relative time
    // https://writingjavascript.com/format-5-days-ago-localized-relative-date-strings-in-a-few-lines-with-native-javascript
    config.addGlobalData("generated", () => {
        let now = new Date();
        return new Intl.DateTimeFormat(
            'en-US', { dateStyle: 'full' }
        ).format(now);

    });

    // Minify HTML and some other things
    config.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                // minifyJS: true,
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