// A Netlify function that triggers a build (via a build hook) if new data is available
// Data source: new link-list items on Raindrop

const { schedule } = require("@netlify/functions");
const EleventyFetch = require("@11ty/eleventy-fetch");

function getRandomBoolean() {
    return Math.random() < 0.5;
}

const handler = async function () {
    const url = "https://api.netlify.com/build_hooks/64a48b7e9f31641feffedf19"

    const testCondition = getRandomBoolean();

    if (testCondition) {
        /* This returns a promise */
        return EleventyFetch(url, {
            duration: "0s", // Always fetch (post) new data
            fetchOptions: {
                statusCode: 200,
                body: `${testCondition}: Netlify build triggered successfully`,
                method: "POST",
            }
        });
    }
};

exports.handler = schedule("@hourly", handler);
