---
title: Create visible gaps between table rows in CSS
date: 2021-01-04
tags:
  - CSS
  - Web
  - guide
subject: CSS
---

Setting margin and/or padding won't work, as `td` is `inline`. Setting `td` to `display: block` ruins the table layout.

Here's the simplest way to create visual gaps between table rows:

```css
table {
  /* Add visual row gaps */
  border-collapse: separate;
  border-spacing: 0 1rem;
  /* Remove byproduct visual gap above and below table */
  margin-top: -1rem;
  margin-bottom: -1rem;
}
```

[Source](https://stackoverflow.com/a/12146432)
