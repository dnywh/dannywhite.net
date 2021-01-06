---
title: Sass
url: https://sass-lang.com/
contents:
    - Break out of the nesting structure
---

## Break out of the nesting structure

Say you're applying styles to a nested element like so:

```scss
.parent {
    .child {
        opacity: 0;
    }
}
```

What if you want that `.child`'s styling to only occur if a 'grandparent' of the `.parent` element has a certain class? [Setting styles only when JavasScript is enabled](/cheatsheets/javascript#only-apply-css-if-javascript-is-enabled) is a good use case: the root `html` tag sometimes has the `.js` class applied to it.

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
