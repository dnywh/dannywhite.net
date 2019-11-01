# [dannywhite.site](http://dannywhite.site/)

This website runs on [Jekyll](http://github.com/jekyll/jekyll). Here are some things that I've slowly built-out that might also help you.

## Running the thing

1. Clone the repo
2. Install [Jekyll](https://jekyllrb.com)
3. `cd` into the repo
4. Run `bundle exec jekyll serve`

## Features

Things I've added onto or tweaked from the standard Jekyll theme, layouts, includes, etc.

### Image optimisation
I'm using [ImageKit](https://imagekit.io) to host all my images and video. There are more hoops than simply putting them in an assets folder on this repo, but the advantages make it worth the effort:

- Faster Jekyll build times as the largest files are just referenced
- Images and video can be stored at full-resolution and then served dynamically (e.g. 80% quality, max-width 1800px for desktop)

### Navigation item selection
[Source](https://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/nav.html). An item from the top-most `<header><nav></nav></header>` will be dimmed if that item's page is active. E.g. if the '/notes' page is active, then the 'Notes' navigation item will be dimmed.

I built this out 'dumb' as some of the [other options](https://stackoverflow.com/a/9138259) are a bit heavy-handed.

### Email encoding
[Source](https://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/email.html). I use [email-encoder.com](http://www.email-encoder.com) to display my real email address whilst also making it difficult for bots to scrape. Not sure how it works—I'll guess I'll keep an eye on the spam levels.

### Open Graph smartness
[Source](http://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/head.html#L10-L21). Takes the leg-work out of nicely-formatted Twitter, iMessage, or Facebook shares from your website. The `jekyll-seo` plugin is a little too basic for my needs.

### Prettify URL slugs
[Source](http://github.com/dannyalright/dannyalright.github.io/blob/master/_config.yml#L47). Removes the post date from the URL. E.g. `dannywhite.site/2018/03/03/banana` becomes `dannywhite.site/banana`.

### Extensive favicon format
[Source](http://github.com/dannyalright/dannyalright.github.io/tree/master/assets/images). A lightweight format that covers most browser and OS implementations and formats.

### Responsive `iframe` elements
[Source](http://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/iframe-video.html). Simple styling 'normalisers' for embeds from Vimeo, YouTube, Twitter, etc.

### Custom 404 page
[Source](http://github.com/dannyalright/dannyalright.github.io/blob/master/404.md). Use existing `post` layout for a nicer 404 page. [Example](http://dannywhite.site/blah).

### Lazy-loaded images
[Source](https://github.com/dannyalright/dannyalright.github.io/blob/master/assets/lzy.min.js). Get your non-essential images to load only when scrolled-to. I'm using [lzy.js](https://github.com/neefrehman/lzy), and then [ImageKit](https://imagekit.io) to do some fancier [progressive-enhancement](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/).

### Variable fonts
[Source](https://rsms.me/inter/#variable). I'm currently using the lovely Inter typeface by Rasmus Andersson.