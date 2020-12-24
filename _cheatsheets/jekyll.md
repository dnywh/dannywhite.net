---
title: Jekyll
docUrl: https://jekyllrb.com/
contents:
    - Escape Liquid tags
---

## Escape Liquid tags

Add `{``%` `raw` `%``}` before a Liquid tag and `{``%` `endraw` `%``}` after.

Useful for if you want to document and talk about Liquid tags inline {% raw %}`{{ like.this }}`{% endraw %} without actually having the Jekyll engine process them.

[Source](https://stackoverflow.com/a/13582517/2009441)