---
title: The missing guide to RSS in Eleventy
date: 2022-06-24
custTags:
  - Eleventy
  - RSS
  - Web
---

There are [plenty](https://bnijenhuis.nl/notes/2021-04-07-creating-a-feed-in-eleventy/) [of](https://learneleventyfromscratch.com/lesson/17.html) [guides](https://obsolete29.com/posts/2020/12/31/rss-a-love-letter-and-walkthrough-for-my-eleventy-site/) for adding an [RSS feed](https://www.11ty.dev/docs/plugins/rss/) to your Eleventy site.
This little post covers two extracurricular points that are often missing from those guides.

## Subscribe from anywhere

Suppose someone finds your site _example.net_ and wants to subscribe to its RSS feed.
This relies on them knowing the full feed URL, which can be ambiguous.

You can solve this issue by adding a `<link>` to your site's `<head>` on the base template.
This `<link>` points RSS readers to the exact location of the RSS feed.

```html
<link
  rel="alternate"
  type="application/atom+xml"
  href="https://example.net/my-blog-atom-feed.xml"
  title="Example Site"
/>
```

That person can now search their RSS reader for _example.net_ (or _example.net/foo_) and it will still find the RSS feed.

## Open feed directly in RSS reader

Safari has a nice feature where feed links ([like this one](/feed.xml)) open directly in an RSS reader [^1].
There's a strange quirk though on iOS Safari (as of writing this) where an Atom feed will instead link straight to a page full of raw XML.

So, if you're particular like me, use the RSS sample feed template from the [Eleventy RSS Plugin](https://www.11ty.dev/docs/plugins/rss/#sample-feed-templates). Not the Atom one. Just be sure to update the `type` line from earlier to `"application/rss+xml"`.

---

## Further reading

[This CSS-Tricks post](https://css-tricks.com/working-with-web-feeds-its-more-than-rss/) article by Farai Gandiya demystified some of the grander mysteries (and histories!) of web feeds for me.
The [W3C Feed Validation Service](https://validator.w3.org/feed/) helped me check the health of my feed as I tinkered.

[^1]: Contingent on the visitor having an RSS app installed. Which I think is almost always the case now on macOS and iOS with the built-in News app.
