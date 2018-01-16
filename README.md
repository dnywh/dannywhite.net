# [dannywhite.is](http://dannywhite.is/)
Hi. Welcome to my site. It runs on [Jekyll](https://github.com/jekyll/jekyll). If you're like me (not an engineer but like to tinker, and want to go beyond Jekyll basics), here are a few things that may help you build your site...

## Notable features and workflows
Things I've added onto or tweaked from the standard Jekyll theme, layouts, includes, etc:

- `image.html` include for inserting HTML `figure` elements, with automatic image directory handling
- `media-grid` include for inserting gridded media of any format, with editorial layouts as `type` to choose from
- auto-forwarding pages (e.g. [dannywhite.is/making](dannywhite.is/making))
- Open Graph in Jekyll
- Prettify URL slugs
- Extensive favicons
- Responsive `iframe` elements
- Using GitHub's project pages feature to publish from `repo-name` branch named `gh-pages` straight to `dannywhite.is/repo-name`

Almost all of these features are derived from other peoples' articles or examples. They will eventually have their origin attributed, and usage extrapolated here.

### Testing your Jekyll site across devices on the same network
Suppose you'd like to preview your in-progress site on your phone or iPad. This is pretty straightforward, assuming they are on the same WiFi network as the computer you're using. Here's how:

1. Append `--host 0.0.0.0` to your `bundle exec jekyll serve` command in Terminal. So the whole command should be `$ bundle exec jekyll serve --host 0.0.0.0`.
2. Assuming that worked, go to System Preferences > Network and find your IP address under _Status_. It should look something like `192.168.0.5`.
3. On your other device (e.g. phone or iPad), open a web browser and navigate to that IP address followed by `:4000`. For me, that is opening Safari on my iPhone and going to `192.168.0.5:4000`
