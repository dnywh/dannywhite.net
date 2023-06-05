---
title: Break out of the nest with Sass
date: 2021-01-06
tags:
  - Sass
  - CSS
  - Web
  - guide
subject: Sass
---

Say you're applying styles to a nested element like so:

```scss
.parent {
  .child {
    opacity: 0;
  }
}
```

What if you want that `.child`'s styling to only occur if a 'grandparent' of the `.parent` element has a certain class? [Setting styles only when JavaScript is enabled](/notes/css-if-js) is a good use case: the root `html` tag sometimes has the `.js` class applied to it.

So how do I apply that `child` style only if that `html` tag—all the way up the tree—has that `.js` class? Sass makes this easy with the `@at-root` rule.

```scss
@at-root .js {
  .parent {
    .child {
      opacity: 0;
    }
  }
}
```

You can use the `@at-root` rule even when nested. It essentially 'breaks out' of your nesting structure.

```scss
.great-grandparent {
  .grandparent {
    @at-root .js {
      .parent {
        .child {
          opacity: 0;
        }
      }
    }
  }
}
```

[Source](https://css-tricks.com/the-sass-ampersand/#at-root-to-the-rescue)
