// Minify the HTML
// https://learneleventyfromscratch.com/lesson/31.html#adding-a-social-image-and-favicon
const htmlmin = require('html-minifier');

module.exports = (value, outputPath) => {
    if (outputPath && outputPath.indexOf('.html') > -1) {
        return htmlmin.minify(value, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true
        });
    }

    return value;
};
