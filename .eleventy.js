module.exports = function (config) {
    // Copy folders into output directory
    config.addPassthroughCopy("./src/css");
    config.addPassthroughCopy("./src/img");

    return {
        // Set which directories Eleventy reads from and writes to
        dir: {
            input: "src",
            output: "public",
        },
    };
};