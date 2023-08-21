---
title: Automatic smart/curly quotes in Eleventy
date: 2023-08-21
tags:
  - Eleventy
  - Markdown
  - Web
  - guide
subject: Eleventy
audience: "Web folks who already use Eleventy and care about typography. Warning: knowing the difference between dumb and smart quotes may ruin subtitles, signage, and most text on the internet for you."
---

Compare the pair:

- &Prime;Common sense is in the eye of the beholder&Prime;
- "Common sense is in the eye of the beholder"

Notice how the above quotation marks are curly? Unfortunately in computer history we have lumped the Double Prime (inch) mark `"` and other one `'` in with their similar-looking but unrelated typographical cousins.

Head over to [Practical Typography](https://practicaltypography.com/straight-and-curly-quotes.html) if you want to learn more. Let's cut to the chase on how this works in Eleventy.

## How

Add the following to your .eleventy.js file:

```js
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  let options = {
    typographer: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
};
```

## Details

There's more to it than just the above.

Install `markdown-it`. Yes, it already comes with Eleventy. But you need to install it to access all the [options](https://github.com/markdown-it/markdown-it#init-with-presets-and-options)

```shell
npm install markdown-it
```

It needs to be a normal dependency, not a dev dependency like some of your others.

As shown above, you now need to add it to your .eleventy.js file:

```js
module.exports = function (eleventyConfig) {
  let options = {
    typographer: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(options));
};
```

Note first of all that we must use `setLibrary` and not the [new-ish](https://www.11ty.dev/docs/languages/markdown/#optional-amend-the-library-instance) `amendLibrary`. This may cause a headache if you have other amendments, such as `markdown-it-footnote` or `markdown-it-anchor`. Here's how to combine all of the above into a hihgly-customised Markdown library:

```js
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
```

In the above code I am:

1. Setting my own version of the markdown-it library in order to set `typographer: true`
2. Amending that library to include any 'add-ons' like the automatic footnotes and heading anchor IDs
