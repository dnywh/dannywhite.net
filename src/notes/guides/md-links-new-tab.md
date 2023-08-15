---
title: Have Markdown links open in a new tab
date: 2020-12-26
tags:
  - Markdown
  - HTML
  - Web
  - guide
subject: Markdown
---

To have a HTML link open in a new tab, you would write something like:

```html
<a
  href="https://letterformarchive.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Letterform Archive
</a>
```

You can do this in Markdown (depending on which converter you use) _without_ needing to intersperse HTML. Here's how, using the same link as above:

```md
[Letterform Archive](https://letterformarchive.org){:target="\_blank" rel="noopener noreferrer"}
```

[Source](https://michaelabrahamsen.com/posts/open-markdown-links-in-a-new-tab/)

## Automate it

I think a better approach to the above is to set programmatic rules. For example: if I want all external links (i.e. links to other websites) to open in a new tab, I can tell my site generator to do that whilst building the site.

The advantage is that I don't need to add any special markup and I don't need to keep track. It just works. I've written how to do this [here](/new-tab-links).
