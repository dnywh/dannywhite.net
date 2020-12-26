---
title: Markdown
contents:
    - Have some Markdown links to open in a new tab
---

## Have some Markdown links to open in a new tab

To have a HTML link open in a new tab, you would write something like:

```html
<a href="https://letterformarchive.org" target="_blank" rel="noopener noreferrer">
    Letterform Archive
</a>
```

You can do this in Markdown (depending on which converter you use) _without_ needing to intersperse HTML. Here's how, using the same link as above:

```md
[Letterform Archive](https://letterformarchive.org){:target="_blank" rel="noopener noreferrer"}
```

[Source](https://michaelabrahamsen.com/posts/open-markdown-links-in-a-new-tab/)
