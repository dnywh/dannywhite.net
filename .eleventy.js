const htmlmin = require("html-minifier");

module.exports = function (config) {
    // Copy folders into output directory
    config.addWatchTarget("./src/sass/");
    config.addPassthroughCopy("./src/img/");
    config.addPassthroughCopy("./src/js/");

    // Minify HTML and some other things
    config.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
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