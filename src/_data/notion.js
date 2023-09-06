const EleventyFetch = require("@11ty/eleventy-fetch");
const { Client } = require("@notionhq/client");

module.exports = async function () {
    // all the code here
    // Notion stuff


    const notion = new Client({
        auth: process.env.NOTION_KEY
    });

    const beforeDate = new Date;

    beforeDate.setDate(beforeDate.getDate() - (beforeDate.getDay() || 7));

    const data = await notion.databases.query({
        database_id: process.env.NOTION_PAGE_ID,
        filter: {
            property: "Reading?",
            "checkbox": {
                "equals": true
            }
        }
    });
    // console.log(data.results)
    data.results.forEach(e => {
        console.log(e.properties.Title.title[0].plain_text, e.properties.Author.select.name, e.properties.Cover.files[0].file.url)
    })
    return data;
};
