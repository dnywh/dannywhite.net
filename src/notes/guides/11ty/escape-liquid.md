---
title: Escape Liquid tags
date: 2020-12-24
modified: 2023-09-05
tags:
  - Eleventy
  - Jekyll
  - Liquid
  - Web
audience: Folks who want to talk about Liquid code using Liquid in Eleventy, Jekyll, or similar, without triggering said code.
---

Add {% raw %}`{% raw %}`{% endraw %} before a Liquid tag and {% raw %}`{% end raw %}`{% endraw %} after the code you want to show but not run. Remove the space between `end raw` so it looks like `endraw`. (I added that so it would render.)

This is useful for if you want to document and talk about Liquid tags inline {% raw %}`{{ like.this }}`{% endraw %} without actually having the your Liquid processor touch them.

Previously written for Jekyll. Applies just the same to Eleventy.

[Source](https://stackoverflow.com/a/13582517/2009441)
