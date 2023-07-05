// A Netlify function that triggers a build (via a build hook) if new data is available
// Data source: new link-list items on Raindrop

const { schedule } = require("@netlify/functions");
const EleventyFetch = require("@11ty/eleventy-fetch");

// Send build hook to Netlify
const handler = async function () {
    const buildHookURL = "https://api.netlify.com/build_hooks/64a48b7e9f31641feffedf19"

    // TODO: Make this condition only true if cache !== what's been pulled above in `raindrop`
    // Right now this is hardcoded to always rebuild (assuming there is always fresh data)
    const hasNewData = true;

    if (hasNewData) {
        // Return promise
        return EleventyFetch(buildHookURL, {
            // duration: "0s", // Always fetch (post) new data
            verbose: true,
            fetchOptions: {
                statusCode: 200,
                // body: `${testCondition}: Netlify build triggered successfully`,
                method: "POST",
            }
        });
    }
};

exports.handler = schedule("@daily", handler);
