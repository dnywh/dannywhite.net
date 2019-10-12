# [dannywhite.site](http://dannywhite.site/)

Hi. This website runs on [Jekyll](http://github.com/jekyll/jekyll). Here are some things that I've slowly built-out that might also help you.

## Running the thing

1. Clone the repo
2. Install [Jekyll](https://jekyllrb.com)
3. `cd` into the repo
4. Run `gem install bundler jekyll`

## Features

Things I've added onto or tweaked from the standard Jekyll theme, layouts, includes, etc:

| What                                                                                                                          | Why                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`image.html` include](http://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/image.html)                | For inserting HTML `figure` elements, with automatic image directory handling and rudimentary caption linking.                                                                                                                                                                |
| [`media-grid` include](http://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/media-grid.html)           | Simple way to embed a video within a post. Grid functionality temporarily killed-off.                                                                                                                                                                                         |
| [Auto-forwarding pages](http://github.com/dannyalright/dannyalright.github.io/blob/master/making.html)                        | A lightweight format for when you'd like to link directly to an external source. [Example](http://dannywhite.site/making).                                                                                                                                                    |
| [Open Graph tags](http://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/head.html#L8-L15)               | Take the leg-work out of nicely-formatted Twitter, iMessage, or Facebook shares from your website.                                                                                                                                                                            |
| [Prettify URL slugs](http://github.com/dannyalright/dannyalright.github.io/blob/master/_config.yml#L35-L39)                   | Removes the post date from the URL. E.g. `dannywhite.site/2018/03/03/banana` becomes `dannywhite.site/banana`.                                                                                                                                                                |
| [Extensive favicon format](http://github.com/dannyalright/dannyalright.github.io/tree/master/assets/images)                   | A lightweight format that covers most browser and OS implementations and formats.                                                                                                                                                                                             |
| [Responsive `iframe` elements](http://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/iframe-video.html) | Simple styling 'normalisers' for embeds from Vimeo, YouTube, Twitter, etc.                                                                                                                                                                                                    |
| [Custom 404 page](http://github.com/dannyalright/dannyalright.github.io/blob/master/404.md)                                   | Use existing `post` layout for a nicer 404 page. [Example](http://dannywhite.site/banana).                                                                                                                                                                                    |
| [Lazy-loaded images](https://github.com/dannyalright/dannyalright.github.io/blob/master/assets/lzy.min.js)                    | Get your non-essential images to load only when scrolled-to. I'm using [lzy.js](https://github.com/neefrehman/lzy), and then [ImageKit](https://imagekit.io) to do some fancier [progressive-enhancement](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/). |

Some of these implementations derive from other peoples' articles or examples. Attributions and links should be commented within the respective resources.

## Workflows

### Testing your Jekyll site across devices on the same network

Suppose you'd like to preview your in-progress site on your phone or iPad. This is pretty straightforward, assuming they are on the same WiFi network as the computer you're using. Here's how:

1. Append `--host 0.0.0.0` to your `bundle exec jekyll serve` command in Terminal. The whole command should be `$ bundle exec jekyll serve --host 0.0.0.0`.
2. Assuming that worked, go to System Preferences > Network and find your IP address under _Status_. It should look something like `192.168.0.5`.
3. On your other device (e.g. phone or iPad), open a web browser and navigate to that IP address followed by `:4000`. For me, that is opening Safari on my iPhone and going to `192.168.0.5:4000`.

## Credits

#### Email encoding
I used www.email-encoder.com.