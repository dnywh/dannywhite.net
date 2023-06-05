---
title: Affect other elements based on target element
date: 2020-12-25
tags:
  - JavaScript
  - Intersection Observer
  - guide
subject: JavaScript
audience: People already comfortable writing JavaScript and who have experience using the Intersection Observer API.
---

Referencing the `index` of the intersected entry in the callback function does not work, or at least it didn't work for me over the several days I tried. What I mean by that is:

```js
let observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry, index) => {
      console.log(index)
      // Continue rest of code...
```

The trick is to instead set an `id` attribute to each observed element with a value that matches that of a `data` attribute (such as `data-ref` in my below example). For example, the below box with the letter 'B' (`id="b"`), when scrolled to, should show an image of a labrador (`data-ref="b"`).

<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="js,result" data-user="dw" data-slug-hash="NWRjwaP" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Intersection Observer Simple Example">
  <span>See the Pen <a href="https://codepen.io/dw/pen/NWRjwaP">
  Intersection Observer Simple Example</a> by Danny White (<a href="https://codepen.io/dw">@dw</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

[Source](https://codepen.io/mishunov/pen/VyJred)
