---
title: Save a sketch to image with p5.js
date: 2021-10-26
tags:
  - p5.js
  - JavaScript
  - Web
  - guide
subject: p5.js
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
