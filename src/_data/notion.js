const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    // Not using the Notion Client package because EleventyFetch doesn't support it
    // As explained here:
    // https://iamschulz.com/from-notion-to-eleventy-but-faster/#caching
    // Which links out to:
    // https://github.com/11ty/eleventy-fetch/issues/23
    let url = `https://api.notion.com/v1/databases/${process.env.NOTION_PAGE_ID}/query`;

    return EleventyFetch(url, {
        duration: "1d",
        type: "json",
        fetchOptions: {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.NOTION_KEY}`,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json",
            },
        },
    });
};
