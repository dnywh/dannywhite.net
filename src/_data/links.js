const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    let url = "https://api.raindrop.io/rest/v1/raindrops/0?sort=-created&search=%23link-list";

    /* This returns a promise */
    return EleventyFetch(url, {
        duration: "1d",
        type: "json",
        fetchOptions: {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.RAINDROP_ACCESS_TOKEN,
            }
        }
    });
};
