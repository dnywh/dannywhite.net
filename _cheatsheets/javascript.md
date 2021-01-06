---
title: JavaScript
contents:
    - Only apply CSS if JavaScript is enabled
fileUnder:
    - JavaScript
    - CSS
seeAlso:
-   foo
---

## Only apply CSS if JavaScript is enabled

Too many websites break entirely if a visitor has JavaScript disabled. I think JavaScript should be opt-in; icing on the cake.

Say you want JavaScript to decide when to turn a `div` from `opacity: 0` to `opacity: 1`. If the user does not have JavaScript enabled, that `div` will never be visible. That `opacity: 0` should therefore only be set _if_ JavaScript is enabled.

Here's the cleanest way I think to do that (within my opt-in approach described above):

```js
document.documentElement.className = "js"
```

That adds the class `js` to the root `html` element. Then, in your CSS:

```css
.js div {
    opacity: 0;
}
```

That `div` will only ever receive the `opacity: 0` if the root `html` tag has the class `js` applied to it.

See [this Sass tip](/cheatsheets/sass#break-out-of-the-nesting-structure) for how to reference a higher-up parent element within your nesting structure. That's how I apply these `.js` styles.

[Source](https://css-tricks.com/snippets/javascript/css-for-when-javascript-is-enabled/)
