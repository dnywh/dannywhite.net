---
title: Automatically Have External Links Open in New Tab
date: 2023-08-15
tags:
  - Eleventy
  - Markdown
  - Web
  - guide
subject: Eleventy
audience: People using Eleventy to make websites and wondering how to have links behave in a systematic way.
---

I wrote a while back about how to [append `target="_blank"` to links in Markdown](/md-links-new-tab). That's fine for the odd link here and there, but what if you want to have this happen systematically? A realistic example is that you might want all external links (i.e. links to pages on other people's websites) to open in a new tab.

Good news. You can automate this. Here's how:

First, install the package:

```bash
npm install markdown-it-link-attributes
```

Then in your _eleventy.js_ file:

```js
const mila = require("markdown-it-link-attributes");

module.exports = function(eleventyConfig) {
  const milaOptions = {
    return href.match(/^https?:\/\//);
    attrs: {
      target: "_blank",
      rel: "noopener"
    }
  };
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(mila, milaOptions));
};
```

[Here's my comment on an Eleventy issue](https://github.com/11ty/eleventy/issues/563#issuecomment-1566454961) in case anyone replies with a better method.
