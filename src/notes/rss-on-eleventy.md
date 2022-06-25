---
title: An Idiot's Guide to RSS on Eleventy
date: 2022-06-24
custTags:
  - Eleventy
---

Serving an RSS/Atom feed from your Eleventy site is [well](#/) [documented](#/) bar two issues:

- No one can add your site to their reader unless they know the exact path to the feed (e.g. example.com/feed.xml)
- A link to that feed shows gibberish on iOS

Strangly none of the above resources—or any others that I Googled—showed why. Here's how I handled it.

1. Foo
2. Bar

First, follow the instructions from the official plugin.

Then, add the following to your site's `<head>`:

```html
<link
  rel="alternate"
  type="application/atom+xml"
  href="https://dannywhite.org/feed.xml"
  title="Danny White"
/>
```

That's pointing RSS clients to your site's exact feed address no matter which page they enter. For example, homepage.
