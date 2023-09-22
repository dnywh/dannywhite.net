---
title: AI as the Copilot
description: Musings on AI as it affects the design industry.
date: 2023-09-22
tags:
  - AI
  - Design
audience: Designers, makers, and other technologists.
---

Microsoft [announced Copilot for Windows today](https://www.theverge.com/2023/9/21/23882173/microsoft-windows-11-23h2-update-features-release-date). Here's the 60 second snippet to catch you up:

https://youtu.be/5rEZGSFgZVY?si=GTmfg2Dgq-doTVeb&t=48

I've had a few drafts around this topic for a while now.
Today's Copilot launch feels like the right time to get something—anything—out for the sake of moving on.

So here's my current thinking on artificial intelligence as it affects the design industry.

## On Windows Copilot

'Copilot' feels like the right way to describe our relationship to AI as makers.
AI tools are the there-if-you-need-them navigator (and soon to be better driver) sitting in the passenger seat of your car.

The natural language interactions (dictating and typing out commands) however looks cumbersome for half of the things demoed in the above video: changing colour schemes, window management, and music selection.
To me it's akin to using the terminal to get things done before the invention of the GUI.

<div class="two-up">
  <figure>
    <img src="{% extSrc 'windows-copilot-dark-mode.png' %}"
    srcset="{% extSrcset 'windows-copilot-dark-mode.png' %}"
    alt="A screenshot of a user prompting the computer to change to dark mode."
    width="4213"
    height="2371"
    loading="lazy">
    <figcaption>Writing 17 characters to turn off a light switch.</figcaption>
  </figure>
  <figure>
    <img src="{% extSrc 'windows-copilot-remove-background.png' %}"
    srcset="{% extSrcset 'windows-copilot-remove-background.png' %}"
    alt="A screenshot of a user prompting the computer to remove the background of a photo."
    width="2450"
    height="2452"
    loading="lazy">
    <figcaption>That's more like it.</figcaption>
  </figure>
</div>

Using natural language for higher-level interactions feels right: back-and-forth art direction, conversation, and research. I'd expect this to stick around beyond the invention of the GUI.

## More broadly

The invention, maturation, and manipulation of this GUI will form the bulk of design work going forward.
Work designing bespoke interfaces directly for consumer products will decrease. Work designing or manipulating interfaces _for AI to design those interfaces_ will increase.

In other words: designers will focus on either the designing of these aforementioned tools (technical product design) or focus on 'prompt engineering' to turn problems or opportunities into the right inputs (service design). The broader team[^1] will absorb and assume the role that designers like myself currently take: compose and iterate on interfaces.

I see this shared role playing out in interactions similar to what [Noah Levin shared](https://www.figma.com/blog/ai-the-next-chapter-in-design/) in this year's Figma conference, just more aggressively than what was demoed:

https://youtu.be/bslH4Mv1ZHA?si=k269AhtBOcPFiZZY&t=768

## I'm probably wrong

Most designers or technologists I’ve tested this on disagree with me. The general response is something like "our specific role is too nebulous and difficult to be automated any time soon".
I think that's a blind spot created by a fear of redundancy[^2].

[Brad Frost writes](https://bradfrost.com/blog/link/ai-the-next-chapter-in-design-figma-blog/) many predictions (of which I assume mine fits the bill) are "reactive, myopic, and short-sighted". He also writes in response to AI doing rote design work:

<figure class="quote">
  <blockquote>
    <p>
      But it still requires human discretion and decision-making (and don’t forget that important moral compass!) in order to separate the wheat from the chaff.
    </p>
  </blockquote>
</figure>

I'm not sure about that. Look at the case of Alpha Zero's triumph over Alpha Go[^3]; it's _because_ of a lack of human discretion and design-making that Zero became creative enough to win a notoriously complex game against its well-trained opponent.

We'll see how this shakes out. And probably pretty soon.

[^1]: I suppose this could be any team member with design sensibilities. If a product manager has design sensibilities (as a lot of them do), a designer might come in to tie loose ends.
[^2]: This seems to be a common response from people in white-collar jobs. I think all these jobs have unhappy endings, but that's a musing for another time.
[^3]: The Demis Hassabis (of DeepMind) [episode of the Ezra Klein show](https://www.nytimes.com/2023/07/11/opinion/ezra-klein-podcast-demis-hassabis.html) explains the Alpha Go and Alpha Zero story well. Skip to about 30–40 minutes in.
