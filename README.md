# [dannywhite.is](http://dannywhite.is/)
Hi. This website runs on [Jekyll](https://github.com/jekyll/jekyll). Here are some things that I've slowly built-out that might also help you:

## Features
Things I've added onto or tweaked from the standard Jekyll theme, layouts, includes, etc:

What | Why
---|---
[`image.html` include](https://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/image.html) | For inserting HTML `figure` elements, with automatic image directory handling and rudimentary caption linking.
[`media-grid` include](https://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/media-grid.html) | Simple way to embed a video within a post. Grid functionality temporarily killed-off.
[Auto-forwarding pages](https://github.com/dannyalright/dannyalright.github.io/blob/master/making.html) | A lightweight format for when you'd like to link directly to an external source. [Example](http://dannywhite.is/making).
[Open Graph tags](https://github.com/dannyalright/dannyalright.github.io/blob/master/_includes/head.html#L8-L15) | Take the leg-work out of nicely-formatted Twitter, iMessage, or Facebook shares from your website.
[Prettify URL slugs](https://github.com/dannyalright/dannyalright.github.io/blob/master/_config.yml#L35-L39) | Removes the post date from the URL. E.g. `dannywhite.is/2018/03/03/banana` becomes `dannywhite.is/banana`.
[Extensive favicon format](https://github.com/dannyalright/dannyalright.github.io/tree/master/assets/images) | A lightweight format that covers most browser and OS implementations and formats.
[Responsive `iframe` elements](https://github.com/dannyalright/dannyalright.github.io/blob/933850fe018de92401781d62ebec021256ec2c14/_includes/iframe-video.html) | Simple styling 'normalisers' for embeds from Vimeo, YouTube, Twitter, etc
[Custom 404 page](http://dannywhite.is/banana) | Use existing `post` layout for a nicer 404 page.

Some of these implementations derive from other peoples' articles or examples. Attributions and links should be commented within the respective resources.

## Workflows
I find it useful to have this repo setup in the `your-username.github.io` format. This lets me publish the completely separate repository `banana` to `dannywhite.is/banana` with a simple `gh-pages` branch `push`.

### Testing your Jekyll site across devices on the same network
Suppose you'd like to preview your in-progress site on your phone or iPad. This is pretty straightforward, assuming they are on the same WiFi network as the computer you're using. Here's how:

1. Append `--host 0.0.0.0` to your `bundle exec jekyll serve` command in Terminal. The whole command should be `$ bundle exec jekyll serve --host 0.0.0.0`.
2. Assuming that worked, go to System Preferences > Network and find your IP address under _Status_. It should look something like `192.168.0.5`.
3. On your other device (e.g. phone or iPad), open a web browser and navigate to that IP address followed by `:4000`. For me, that is opening Safari on my iPhone and going to `192.168.0.5:4000`.

## Credits
### Fonts
Most type on the site is set in [Inter UI](https://rsms.me/inter/) by Rasmus Andersson.
