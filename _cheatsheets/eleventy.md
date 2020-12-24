---
title: Eleventy
docUrl: https://www.11ty.dev
contents:
    - Render all collection item page content on page
---

## Render all collection item page content on page

You can easily render [front matter](https://www.11ty.dev/docs/data-frontmatter/) or an [excerpt](https://www.11ty.dev/docs/data-frontmatter-customize/#example-parse-excerpts-from-content), but what if you want to render the whole 'below the fold' within each collection item's Markdown file? Use {% raw %}`{{ item.templateContent | safe }}`{% endraw %} (within a loop of collection `item`s).

This—combined with a max-character filter—might even be a more elegant way to show an excerpt in Eleventy.
