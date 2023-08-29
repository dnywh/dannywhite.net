---
title: Colophon
subtitle: A not-so-brief summary of how this website works.
layout: "layouts/article.njk"
---

## Eleventy

I use [Eleventy](https://www.11ty.dev) to build and publish my site. I like how flexible and agnostic it is.

I'm such a fan of Eleventy that you should read [all my posts tagged with it](/notes/tagged/eleventy).

## Carbon footprint

I regularly estimate my website's carbon footprint using the [Website Carbon Calculator](https://www.websitecarbon.com). The most recent calculation put its footprint at TODO 0.05 grams of CO<sub>2</sub>e</a>. I used X and Y datasets to make the comparative emissions comparison of driving a Toyota Yaris 100m.

Here are some ways I've reduced the carbon footprint of my site:

- Switched to web hosting that runs on sustainable energy
- y

And here are some ways I plan to reduce it further in the future:

- Pressure for greener hosting
- Switch hosting
- Solar-powered server ala Low Tech Magazine
- More aggressive image optimisation (WEBP)
- Variable fonts

## Layout

- Min: 320px
- Max: 1280px
- Article Max: 720px

## Typography

The entire site is set in ITC Franklin Gothic, licensed through Paratype. I used [Utopia](https://utopia.fyi/type/calculator?c=320,18,1.2,1240,20,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12) to calculate and handle a fluid type scale. It goes from Minor Third (1.2) to Perfect Fourth (1.333).

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

I copied this idea from [Robin Sloan](https://www.robinsloan.com/colophon#assumed-audiences) who got it from [Chris Krycho](https://v4.chriskrycho.com/2018/assumed-audiences.html). Here's Robin explaining (much more eloquently than I could) why assumed audience sections are a good idea:

<figure class="quote">
  <blockquote>
  <p>I appreciate the way they push back against the “context collapse” of the internet, in which every public post is, by default, addressed to everyone.</p>
  </blockquote>
</figure>

Writing an assumed audience selection frees me up to write (unapologetically) to a specific audience without preamble or watering the whole thing down.

---

## Markup

Read on if you're a nerd. It's really just a collection of notes-to-self on how I maintain the website. A style guide, if you will.

### Markdown

I use Markdown for anything longform on this site: pretty much just [notes](/notes) and this page here, Colophon. I call this content type `article` in code.

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
