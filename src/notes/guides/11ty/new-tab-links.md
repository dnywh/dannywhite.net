---
title: Automatic New Tab Links for Markdown in Eleventy
date: 2023-09-05
tags:
  - Eleventy
  - Markdown
  - Web
audience: People using Eleventy to make websites and looking to have links behave systematically. how to have links behave in a systematic way.
---

I wrote a while back about how to append `target="_blank"` [to links in Markdown](/notes/md-links-new-tab). That's fine for the odd link here and there, but what if you want to have this happen systematically? A realistic example is that you might want all external links (i.e. links to pages on other people's websites) to open in a new tab.

Good news: you can automate this. Here's how:

First, install the package:

```shell
npm install markdown-it-link-attributes
```

Then in your _eleventy.js_ file:

```js
const mila = require("markdown-it-link-attributes");

module.exports = function (eleventyConfig) {
  const milaOptions = {
    matcher(href) {
      return href.match(/^https?:\/\//);
    },
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  };
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mila, milaOptions));
};
```

The key is the `matcher` (sometimes written as `pattern`) which matches anything that uses an absolute link. I only use relative links for my own URLs, so matching all absolute links is an elegant solution for my use case.

[Here's the related Eleventy issue](https://github.com/11ty/eleventy/issues/563#issuecomment-1566454961) which includes some alternatives (above my comment).
