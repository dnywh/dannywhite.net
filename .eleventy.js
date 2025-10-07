// Import DateTime for custom timestamps
const { DateTime } = require("luxon");
// Import LightningCSS which minifies and improves CSS
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
// Import syntax (code) highlighting
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
// Import RSS functionality
const pluginRss = require("@11ty/eleventy-plugin-rss");
// Import automatic table of contents
const pluginTOC = require("eleventy-plugin-toc");
// Import image processing for Trove images
const Image = require("@11ty/eleventy-img");
// Import a JS minifier
const { minify } = require("terser");
// Import specific packages from markdown-it
// First, markdown-it itself (since we extend it for smart quotes etc)
const markdownIt = require("markdown-it");
// Automatic anchor IDs
const markdownItAnchor = require("markdown-it-anchor");
// Automatic footnotes
const markdownItFootnote = require("markdown-it-footnote");
// Find any external links in Markdown and make them open in new tabs
const mila = require("markdown-it-link-attributes");
// Handle Vimeo embeds
const embedVimeo = require("eleventy-plugin-vimeo-embed");
// Handle YouTube embeds
const embedYouTube = require("eleventy-plugin-youtube-embed");
// Import my HTML minifier transform
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
// Import any shortcodes that are defined elsewhere
const { extSrcset, extSrc } = require("./src/helpers/shortcodes");
// Import dotenv so I can use custom environment variables, such as the Raindrop API key
require("dotenv").config();
// Import site data
const site = require("./src/_data/site.json");

module.exports = function (eleventyConfig) {
  // Quieten console output
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setServerOptions({
    // Whether DOM diffing updates are applied where possible instead of page reloads
    // Turned off because it was causing issues when updating .md files
    // Nothing would render except for the 'Let's chat' footer link
    domDiff: false, // default is `true`
  });

  // Passthroughs
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
  // Allow redirects
  // https://daily-dev-tips.com/posts/adding-netlify-redirects-to-an-eleventy-site/
  eleventyConfig.addPassthroughCopy("./src/_redirects");

  // Plugins
  // Eleventy-flavoured Lightning CSS
  eleventyConfig.addPlugin(lightningCSS);
  // Code highlighting
  eleventyConfig.addPlugin(syntaxHighlight);
  // RSS (Atom) feed
  eleventyConfig.addPlugin(pluginRss);
  // Automatic table of contents
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3"],
  });
  // Vimeo embeds
  eleventyConfig.addPlugin(embedVimeo, {
    embedClass: "video",
  });
  // YouTube embeds
  eleventyConfig.addPlugin(embedYouTube, {
    // just an example, see default values below:
    embedClass: "video",
    lite: true,
    lazy: true, // Ignored when `lite` is true
  });

  // Filters
  // Date filter for ISO8601 format (for further manipulation in JavaScript)
  // https://www.aleksandrhovhannisyan.com/blog/useful-11ty-filters/#3-date-formatting
  const toISOString = (dateString) => new Date(dateString).toISOString();
  eleventyConfig.addFilter("toISOString", toISOString);
  // Date filter for month and year only
  eleventyConfig.addFilter("vagueDate", (dateObj) => {
    // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    // Actually just using same format as `generatedDate` for now...
    return new Intl.DateTimeFormat("en-GB", {
      month: "long",
      year: "numeric",
    }).format(dateObj);
  });

  // Date filter for last updated date
  // https://11ty.rocks/eleventyjs/dates/#postdate-filter
  // https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    // Actually just using same format as `generatedDate` for now...
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(
      dateObj
    );
  });

  // Slicer for lighterweight RSS feeds
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) =>
    arr.slice(0, limit)
  );

  // JS minifier
  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    }
  );

  // Global data
  // Unique generated date
  eleventyConfig.addGlobalData("ISOSiteGeneratedDate", () => {
    let now = new Date();
    return DateTime.fromJSDate(now).toFormat("X");
  });

  // Last build date
  eleventyConfig.addGlobalData("siteGeneratedDate", () => {
    let now = new Date();
    return DateTime.fromJSDate(now).toFormat("EEEE, MMMM d");
  });

  // Transforms
  // Only minify HTML if we are in production because it slows builds down
  if (process.env.ELEVENTY_RUN_MODE === "build") {
    eleventyConfig.addTransform("htmlmin", htmlMinTransform);
  }

  // Shortcodes
  // Year shortcode for copyright date(s): https://11ty.rocks/eleventyjs/dates/#year-shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  // Trove image shortcode
  // https://www.11ty.dev/docs/plugins/image/#nunjucks-liquid-javascript-(asynchronous-shortcodes)
  eleventyConfig.addShortcode(
    "troveImg",
    async function (src, alt, format = "webp", isRss = false) {
      let metadata = await Image(src, {
        formats: [format],
        // Enable animated GIFs
        sharpOptions: {
          animated: format === "gif" ? true : false,
        },

        // Calculated widths by multiplying physical max-width of img area (320px) by 2x and 3x
        widths: [320, 640, 960],
        outputDir: "./public/assets/images/trove",
        urlPath: "/assets/images/trove",
      });

      let imageAttributes = {
        // Alt must be defined in use otherwise it will throw an error
        alt,
        // Approximate sizes based on .trove CSS
        // https://web.dev/learn/design/responsive-images/#sizes
        sizes: "(min-width: 1024px) 25vw, 50vw",
        loading: "lazy",
        decoding: "async",
      };

      // If this is for RSS, make the URLs absolute
      if (isRss) {
        // metadata is an object with format keys (e.g. 'webp', 'gif')
        Object.keys(metadata).forEach((format) => {
          metadata[format].forEach((image) => {
            image.url = `${site.url}${image.url}`;
            image.srcset = image.srcset
              .split(", ")
              .map((src) => {
                const [url, width] = src.split(" ");
                return `${site.url}${url} ${width}`;
              })
              .join(", ");
          });
        });
      }

      // You bet we throw an error on a missing alt (alt="" works okay)
      return Image.generateHTML(metadata, imageAttributes);
    }
  );
  // General image shortcode, currently used for project imagery
  eleventyConfig.addShortcode("projectImg", async function (src, alt) {
    let metadata = await Image(src, {
      formats: ["webp"],
      // Calculated widths by inspecting possible physical container sizes and multiplying by 2x, 3x
      // TODO: Recalculate with future layout
      widths: [456, 945, 1362, 2835],
      outputDir: "./public/assets/images/projects",
      urlPath: "/assets/images/projects",
      // TODO: Optional: custom filename based on original file slug:
      // https://www.11ty.dev/docs/plugins/image/#custom-filenames
    });

    let imageAttributes = {
      alt,
      sizes: "(min-width: 1024px) 50vw, 100vw",
      loading: "lazy",
      decoding: "async",
    };
    // You bet we throw an error on a missing alt (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
  });
  // Cloudinary image shortcodes from helpers/shortcodes.js
  eleventyConfig.addShortcode("extSrc", extSrc);
  eleventyConfig.addShortcode("extSrcset", extSrcset);

  // Collections
  // Make a collection of raindrops sorted by date saved, not date created
  const trove = require("./src/_data/trove.js");
  eleventyConfig.addCollection("trove", async () => {
    const data = await trove();
    // Access the items within the child array
    const items = data.items;
    // Sort by date
    const sortedItems = items.sort((a, b) => {
      // Compare the `lastUpdate` property of each item
      const dateA = new Date(a.lastUpdate);
      const dateB = new Date(b.lastUpdate);
      return dateB - dateA; // Sort in descending order (latest first)
    });

    return sortedItems;
  });

  // Make a collection of note tags
  eleventyConfig.addCollection("notesByTag", (collectionApi) => {
    // Re-use notes collection from above
    const notes = collectionApi.getFilteredByTag("note");
    let ret = {};

    for (let note of notes) {
      if (note.data.tags) {
        for (let tag of note.data.tags) {
          // Exclude the 'note' tag itself from entering the collection
          if (tag !== "note") {
            ret[tag] ??= [];
            ret[tag].push(note);
          }
        }
      }
    }

    // Now sort, and reconstruct the object
    ret = Object.fromEntries(
      Object.entries(ret).sort((a, b) => b[1].length - a[1].length)
    );

    return ret;
  });

  // Markdown library amendments
  // Find any external links in Markdown and make them open in new tabs
  let markdownItOptions = {
    html: true, // Enable HTML tags in source
    breaks: false, // Convert '\n' in paragraphs into <br>
    linkify: false, // Autoconvert URL-like text to links
    typographer: true, // Enable some language-neutral replacement + quotes beautification
  };
  const milaOptions = {
    matcher(href) {
      return href.match(/^https?:\/\//);
    },
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  };

  let mdLib = markdownIt(markdownItOptions);
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(mila, milaOptions).use(markdownItAnchor).use(markdownItFootnote)
  );

  eleventyConfig.setLibrary("md", mdLib);

  // End
  return {
    // Set which directories Eleventy reads from and writes to
    dir: {
      input: "src",
      output: "public",
    },
  };
};
