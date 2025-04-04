---
title: Colophon
subtitle: This site is handmade. Here’s how.
layout: "layouts/article.njk"
---

It's also open source. Find it on [GitHub]({{ site.repoUrl }}) or read on for details.

## Carbon footprint

I regularly estimate my website's carbon footprint using the [Website Carbon Calculator](https://www.websitecarbon.com). The [most recent calculation](https://www.websitecarbon.com/website/dannywhite-org/) put its footprint at {{ site.footprint }} grams of CO<sub>2</sub>e</a>.

My homepage footer shows an an equivalent amount of unique visits per phone charge. I use the [EPA's Greenhouse Gas Equivalencies Calculator](https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator) to get that figure. They explain the smartphone emissions math [here](https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references#smartphones).

Here are some ways I've reduced the carbon footprint of my site:

- [Subset and optimised fonts](#fonts)
- [Aggressively optimised images](#images)
- Switched to web hosting that mostly[^1] runs on sustainable energy
- Minimised the use of imagery and video
- Cached assets where possible

[Sustainable Web Design](https://sustainablewebdesign.org/category/design/) is a list of best practices and provocations that I've tried to follow.

## Stages

I write a lot of technical notes-to-self on this site. Some of them I revisit and improve over time. I also write the occasional musing or experiment.

Assigning a stage to each note frees me up to do both, all in the same space. It's a solution I've copied from [Maggie Appleton](https://maggieappleton.com/colophon) who calls them _growth stages_ and uses them in a similar way.

Like Maggie, I use three stages:

<table>
  <thead>
    <tr>
      <th>Stage</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
       <span class="dots" style="--stage: 1" aria-label="Stage 1 out of 3"></span>
      </td>
      <td>The first version of a note, regardless of its length. They all start here.</td>
    </tr>
    <tr>
      <td>
       <span class="dots" style="--stage: 2" aria-label="Stage 2 out of 3"></span>
      </td>
      <td>A note that has had some level of refinement.</td>
    </tr>
    <tr>
      <td>
       <span class="dots" style="--stage: 3" aria-label="Stage 2 out of 3"></span>
      </td>
      <td>A note that has had several rounds of updates.</td>
    </tr>
    </tbody>
</table>

## Assumed audience

Sometimes I will prepend a note with a short explanation of what type of person it is written for. [Here's one](/notes/video-border) example. [Here's](/notes/bash-your-profile) another.

I copied this idea from [Robin Sloan](https://www.robinsloan.com/colophon#assumed-audiences) who got it from [Chris Krycho](https://v4.chriskrycho.com/2018/assumed-audiences.html). Here's Robin explaining why assumed audience sections are a good idea, much more eloquently than I could:

<figure class="quote">
  <blockquote>
  <p>I appreciate the way they push back against the “context collapse” of the internet, in which every public post is, by default, addressed to everyone.</p>
  </blockquote>
</figure>

Writing an assumed audience selection frees me up to write unapologetically to a specific audience without preamble or watering the whole thing down.

---

## Design

### Layout

This is still in flux. Here are the values I use in [Utopia](https://utopia.fyi/space/calculator/?c=320,18,1.2,1638,21,1.333,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,xl,3xl,8) at the moment:

- Min: 320px
- Max: 1280px
- Article Max: 720px

### Typography

The entire site is set in ITC Franklin Gothic, licensed through Paratype. I use [Utopia](https://utopia.fyi/type/calculator?c=320,18,1.2,1240,20,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12) to calculate and handle a fluid type scale. It goes from Minor Third (1.2) to Perfect Fourth (1.333).

See the [Fonts](#fonts) section for implementation details.

---

## Build

Read on if you're a nerd. It's really just a collection of notes-to-self on how I maintain the website. A style guide, if you will.

### Eleventy

I use [Eleventy](https://www.11ty.dev) to build and publish my site. I'm such a fan of Eleventy that I've written [a bunch of notes about it](/notes/tagged/eleventy).

Assume everything build-related in this colophon is heavily Eleventy-flavoured.

#### Collections

##### Drafts

I exclude drafts by using the following in collection frontmatter:

```md
---
eleventyExcludeFromCollections: true
---

Draft blog post contents here.
```

It's a simple brute-force way to exclude the file anywhere it might be looped through, such as on the [Notes](/notes) page. This lets me continue working on a draft post whilst seeing it in the browser (at its URL) without needing to set `if` statements everywhere to exclude files with some bespoke `item.data.draft` frontmatter value.

### Trove

The [Trove](/#trove) is a pinboard-esque section on my homepage that shows off what I've 'pinned' lately from around the web. I use [Raindrop](https://raindrop.io) to collect these 'pins' and their [API](https://developer.raindrop.io) to pull them into my site. I use the [eleventy-fetch](https://www.11ty.dev/docs/plugins/fetch/) plugin to cache these pins.

In terms of keeping the site 'fresh' with Trove data: I no longer use Netlify's [Scheduled Functions](https://www.raymondcamden.com/2022/02/04/an-early-look-at-netlify-scheduled-functions) and instead just use this tension as healthy pressure to regularly update the site (thus refreshing Trove data along the way)[^2].

I made a macOS and iOS [Shortcut](https://alejandromp.com/blog/netlify-deployment-with-ios-shortcut/) for manual builds using Netlify's Build Hooks for the scenario where I want to force a rebuild. That doesn't visibly change the site if the data has already been refreshed in the last day, given that I have the [netlify-plugin-cache](https://www.11ty.dev/docs/plugins/fetch/#running-this-on-your-build-server) package installed.

See the [Images](#images) section of this page for how I process pinned imagery.

### Markdown

I use Markdown for anything longform on this site: pretty much just [notes](/notes) and this page here. I refer to this content type as `article` in code.

### Blockquotes

You can add blockquotes in Markdown like so:

```md
> Classics cut to fit fifteen-minute radio shows, then cut again to fill a two-minute book column.
```

But things get messy if you want to add a `cite` tag. How is Markdown to know that both that and the quote above it should be treated as a single unit?

I use a raw HTML `figure` element to wrap both blockquotes and the occasional accompanying `cite` element for semantic reasons described in [this CSS-Tricks article](https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/#aa-hey-what-about-the-figure-element).

Here's what that looks like in my Markdown files:

```md
Regular Markdown content above.

<figure class="quote">
  <blockquote>
    <p>
      Classics cut to fit fifteen-minute radio shows, then cut again to fill a
      two-minute book column...
    </p>
  </blockquote>
</figure>

Regular Markdown content below.
```

I could figure out how to have the HTML write itself from Markdown automatically, probably in the same way I sweep up and turn [straight quotes into smart quotes](/notes/11ty-smart-quotes/). For another day.

### Embeds

I use [Graham F. Scott](https://gfscott.com)'s [Embed Everything](https://gfscott.com/embed-everything/) plugins for any [YouTube](https://www.npmjs.com/package/eleventy-plugin-youtube-embed) and [Vimeo](https://www.npmjs.com/package/eleventy-plugin-vimeo-embed) video embeds. Graham's plugins detect media from plain text (such as in your Markdown files) and automatically creates embeds. They look like this:

```md
Here's some Markdown content followed by a YouTube video:

https://www.youtube.com/watch?v=_ByEBjf9ktY&t=180s

That will be turned into a nicely formatted `<iframe>` during build.
```

I've turned on Paul Irish’s [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed) method for the YouTube embed.

### Images

Aside from minor images like favicons, I host most of them on Cloudinary. I use [shortcodes.js]({{ site.repoUrl }}/blob/main/src/helpers/shortcodes.js) to process [responsive image sizes](https://web.dev/learn/design/responsive-images/#sizes) and prepend image URLs with my Cloudinary URL.

The [Trove](/#trove) section of the homepage is an exception to my Cloudinary setup. Instead, I use the [eleventy-img plugin](https://www.11ty.dev/docs/plugins/image/) to download, reformat, and resize Trove image via the `troveImg` shortcode. I like this method because eleventy-img will generate HTML according to what image sizes are available. For example: if the original image for a Trove item is lower resolution than one or more of my desired widths, it will only [generate HTML](<https://www.11ty.dev/docs/plugins/image/#nunjucks-liquid-javascript-(asynchronous-shortcodes)>) for the ones it can supply.

I add `loading="lazy"` to all images except for those [above-the-fold](https://sia.codes/posts/eleventy-and-cloudinary-images/#lazy-load-offscreen-images-for-performance).

### Fonts

I use WOFF2 across the board. Fonts have been [subset](https://web.dev/reduce-webfont-size/#unicode-range-subsetting) using [pyftsubset](https://github.com/fonttools/fonttools). I can't find a record of what I subset the fonts to exactly, but I'm pretty sure it was Latin characters and a subset of common Unicode ones.

I'll update this section next time I run the subsetting, or when I make the subsetting happen automatically upon build based on what characters are actually used on the site.

See the [Typography](#typography) section for design details.

### RSS

Yes, [this site has an RSS feed](/rss). See [feed.njk]({{ site.repoUrl }}/blob/main/src/feed.njk) for the technical details. It loops through my note collection and excludes drafts.

### CSS

Once a member of the Sass cult, I now process all my CSS with LightningCSS. I do this via Stephanie Eckles' [LightningCSS Eleventy plugin](https://github.com/5t3ph/eleventy-plugin-lightningcss) for reasons she's already explained on [her blog](https://thinkdobecreate.com/articles/is-it-time-to-replace-sass/). In summary:

- Regular CSS now does a lot of the things we used to use Sass for (such as variables and nesting)
- LightningCSS fills in the gaps more elegantly

One [quirk](https://github.com/11ty/eleventy/discussions/2850#discussioncomment-5254892) on Eleventy is that it might process the CSS as a collection. That's why I have a [css.json]({{ site.repoUrl }}/blob/main/src/css/css.json) file with the following:

```json
"eleventyExcludeFromCollections": true;
```

[^1]: My site is hosted by Netlify, who use a global CDN. Most of their locations use clean energy (via [AWS and Google Cloud](https://www.netlify.com/sustainability)) but whether or not the _your_ visit to the site is running on clean energy depends on where you are visiting from and at what time.
[^2]: There is a mystery bug where my site will auto-deploy every few weeks on its own. I'm guessing it's got something to do with the [netlify-plugin-cache](https://www.11ty.dev/docs/plugins/fetch/#running-this-on-your-build-server) package but that's for another day.
