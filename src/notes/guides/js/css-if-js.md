---
title: Only apply CSS if JavaScript is enabled
date: 2021-01-06
tags:
  - JavaScript
  - CSS
audience: People already comfortable writing JavaScript and CSS.
---

Too many websites break entirely if a visitor has JavaScript disabled. I think JavaScript should be opt-in; icing on the cake. [Additive](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement#).

Say you want JavaScript to decide when to turn a `div` from `opacity: 0` to `opacity: 1`. That `div` will never visible if the user does not have JavaScript enabled. `opacity: 0` should therefore only be set _if_ JavaScript is enabled.

Here's the cleanest way I think to do that:

```js
document.documentElement.className = "js";
```

That adds the class `js` to the root `html` element. Then, in your CSS:

```css
.js div {
  opacity: 0;
}
```

That `div` will only ever receive the `opacity: 0` if the root `html` tag has the class `js` applied to it.

See [this Sass tip](/notes/break-out) for how to reference a higher-up parent element within your nesting structure. That's how I apply these `.js` styles.

[Source](https://css-tricks.com/snippets/javascript/css-for-when-javascript-is-enabled/)
