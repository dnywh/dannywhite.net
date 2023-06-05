---
title: Escape Liquid tags
date: 2020-12-24
tags:
  - Eleventy
  - Liquid
  - Web
  - guide
subject: Eleventy
---

Add `{``%` `raw` `%``}` before a Liquid tag and `{``%` `endraw` `%``}` after. (Remove the redundant backticks placed here just so it renders.)

Useful for if you want to document and talk about Liquid tags inline {% raw %}`{{ like.this }}`{% endraw %} without actually having the Eleventy engine process them.

Previously written for Jekyll. Applies just the same to Eleventy.

[Source](https://stackoverflow.com/a/13582517/2009441)
