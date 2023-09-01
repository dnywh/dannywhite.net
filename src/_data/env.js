// Bring the relevant environment variables in as data that I can access in .njk, .md files
// Useful for turning things on/off like analytics when running local
// https://css-tricks.com/give-your-eleventy-site-superpowers-with-environment-variables/
// https://www.11ty.dev/docs/environment-vars/#eleventy-supplied
module.exports = {
    eleventyRunMode: process.env.ELEVENTY_RUN_MODE
}