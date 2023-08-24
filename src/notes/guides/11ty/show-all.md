---
title: Render all collection item page content in Eleventy
date: 2020-12-24
tags:
  - Eleventy
  - Web
---

You can easily render [front matter](https://www.11ty.dev/docs/data-frontmatter/) or an [excerpt](https://www.11ty.dev/docs/data-frontmatter-customize/#example-parse-excerpts-from-content), but what if you want to render the whole 'below the fold' within each collection item's Markdown file? Use {% raw %}`{{ item.templateContent | safe }}`{% endraw %} (within a loop of collection `item`s).

This—combined with a max-character filter—might even be a more elegant way to show an excerpt in Eleventy.

[Source](https://www.reddit.com/r/eleventy/comments/gir3id/full_posts_in_the_homepage/fqmziay)
