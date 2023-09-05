---
title: Custom media queries in CSS
date: 2023-08-22
tags:
  - LightningCSS
  - CSS
  - Web
  - Eleventy
audience: CSS developers looking to make reusable media queries and/or values within those media queries.
eleventyExcludeFromCollections: true
---

Using [LightningCSS](https://lightningcss.dev/transpilation.html#custom-media-queries) to use [custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-mq) before they are fully supported across browsers.

Before:

This (admittedly contrived) CSS

```css
footer {
  display: grid;
  @media (min-width: 1024px) {
    grid-template-columns: repeat (4, 1fr);
  }
}

header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2.5rem;
  }
}
```

Imagine doing that over multiple CSS files/modules. The `1024px` is brittle. And CSS doesn't support the following:

```css
@media (min-width: var(--width-md)) {
  /* Media query contents */
}
```

Enter custom media queries.

Define this somewhere global, ideally before global site variables:

```css
/* Define custom media queries first */
@custom-media --viewport-sm (min-width: 732px);
@custom-media --viewport-md (min-width: 1024px);
@custom-media --viewport-lg (min-width: 1280px);
@custom-media --viewport-xl (min-width: 1800px);

:root {
  /* Then define your usual global variables */
  --spacing: 1rem;
  /* The advantage of doing this in this order means you can use your custom media queries already, at a variable-level */
  @media (--viewport-md) {
    --spacing: 2.5rem;
  }
}
```

Then, in your CSS modules, I could re-write that above `header` example like so:

```css
header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  @media (--viewport-md) {
    flex-direction: row;
    /* gap doesn't need to be redefined as the :root handles the change of --spacing for us */
  }
}
```

Eleventy makes this easy with the [eleventy-plugin-lightningcss](https://github.com/5t3ph/eleventy-plugin-lightningcss) plugin.
