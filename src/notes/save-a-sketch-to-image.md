---
title: What did I do for our users today?
date: 2016-04-01
custTags:
  - p5.js
---

[`saveCanvas()`](https://p5js.org/reference/#/p5/saveCanvas) is purpose-built for this. Here are some ways to use it:

```js
saveCanvas("myCanvas", "jpg");
saveCanvas(c, "myCanvas.jpg");
saveCanvas("myCanvas.jpg");
saveCanvas();
```

I tend to nest it under a keyboard command function:

```js
// Saves the canvas if the 's' key is pressed
function keyPressed() {
  if (keyCode === 83) {
    saveCanvas();
  }
}
```

You can find the `keyCode` value for keys on [keycode.info](https://keycode.info).
