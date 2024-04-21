---
title: Automatic Smart Quotes in Eleventy Markdown Templates
description: Convert Markdown straight quotes into smart quotes (also known as curly quotes).
date: 2023-09-07
tags:
  - Eleventy
  - Markdown
  - Web
audience: "Web folks who already use Eleventy and care about typography. Warning: knowing the difference between straight and smart quotes may ruin subtitles, signage, and most text on the internet for you."
---

Compare the pair:

- &Prime;Common sense is in the eye of the beholder&Prime;
- "Common sense is in the eye of the beholder"

Notice how only one set of quotation marks are curly?

Unfortunately, the Double Prime (inch) mark `"` and Single Prime (foot) mark `'` are often used in place of their similar-looking but unrelated typographical cousins: `“` `”` and `‘` `’`.

Head over to [Practical Typography](https://practicaltypography.com/straight-and-curly-quotes.html) if you want to learn more about this quirk in computing.

---

Here's how to automatically catch these straight quotes in Eleventy Markdown files and convert them to smart quotes.

First, install [markdown-it](https://github.com/markdown-it/markdown-it):

```shell
npm install markdown-it
```

Yes, (part of) markdown-it already comes with Eleventy. But you need to install the full package to access all its [options](https://github.com/markdown-it/markdown-it#init-with-presets-and-options), one of which we will use.

Add the following to your .eleventy.js file:

```js
module.exports = function (eleventyConfig) {
  let options = {
    typographer: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(options));
};
```

The `typographer` option handles the straight to smart quote replacement. It also handles some [language-neutral replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js).

Note that we must use `eleventyConfig.setLibrary` and not the [newer](https://www.11ty.dev/docs/languages/markdown/#optional-amend-the-library-instance) `eleventyConfig.amendLibrary`. This may cause a headache if you have other amendments, such as `markdown-it-footnote` or `markdown-it-anchor`.

I have a bunch of these other amendments. Here's how I combined them all with the `typographer` option:

```js
let markdownItOptions = {
  html: true, // Enables HTML tags in source
  typographer: true, // What we did above
};
// Prepare markdown-it library with above options
let mdLib = markdownIt(markdownItOptions);

// Opens absolute (i.e. external) links in a new tab
const milaOptions = {
  matcher(href) {
    return href.match(/^https?:\/\//);
  },
  attrs: {
    target: "_blank",
    rel: "noopener",
  },
};
// Amend library to use above 'links in new tab' and some other amendments
eleventyConfig.amendLibrary("md", (mdLib) =>
  mdLib.use(mila, milaOptions).use(markdownItAnchor).use(markdownItFootnote)
);

eleventyConfig.setLibrary("md", mdLib);
```

See my [eleventy.js](https://github.com/dnywh/dannywhite.net/blob/ea8a622ede31d4cf66c7cdad5a9ec1b62a617f57/.eleventy.js#L224-L249) file for a full example.
