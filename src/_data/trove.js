const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    // Filter down to the #trove tag
    let url = "https://api.raindrop.io/rest/v1/raindrops/0?sort=-created&search=%23trove";

    // This returns a promise
    // Image processing is done in troveImg shortcode using the `_id` value outputted here in the data json
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
