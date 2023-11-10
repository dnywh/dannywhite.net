---
title: "Agency, Not Agents"
description: A short exploration in automated audio bookmark summation and thematic interlinking, with the help of generative AI.
date: 2023-11-11
pinned: true
tags:
  - AI
  - Design
related:
  - feeling-forward
  - ai-as-the-copilot
audience: Designers, makers, and other technologists.
---

Imagine the guest on a podcast episode you're listening to says something insightful. Maybe that insight relates to something you're working on, thinking about, or just want to come back to. If only you could snap your fingers and have it saved for later.

This is an idea that I've kicked around for a while. It also turns out to be unoriginal; the [Fathom](https://fathom.fm) podcast app does this via its clipping feature:

<figure>
  <video playsinline autoplay controls loop muted height="500px" style="background: black; padding: 1rem 0">
    <source src="https://res.cloudinary.com/dmpf5fukm/video/upload/f_auto,q_auto/v1673411667/fathom_landing_page/no_alpha/clips_1_tighter_sp7fro.webm">
  </video>
  <figcaption>Fathom’s clipping feature. Dubious podcast choice not mine.</figcaption>
</figure>

The basic utility of bookmarking audio segments is obvious.
What interested me next is happens _after_ you save segments of audio.

Can this information be automatically distilled, collated, and interlinked with everything you've saved before it?
Does this automation reduce some of the work involved in understanding new information?

I get a strong feeling that the answer is no; **the mental, menial, task of truly understanding an idea or new concept and linking it to others can't be outsourced**, irrespective of how advanced that computer is.

## Experiments

I used OpenAI's Whisper to transcribe three podcast episode segments (across shows and genres) and GPT-4 (via ChatGPT and the GPT Builder tool) to manipulate the resulting text.
I also built-out a podcast app prototype that takes the source audio, transcript, and then handles the 'stamping': forming the distilled insight.

_Say hello to `Stamper`, a text-friendly podcast player. (A video of the prototype with just transcripts being demoed across three episodes, no segmented control)_

I prepared stamps ahead of time by asking ChatGPT to split the text by how the conversation flows. That way, when I 'stamp' something in the podcast player, it can just look at the current timestamp and cross-reference the prepared summary.

My initial prompting looked like this:

<figure class="prompt">
  <p>Please take the attached JSON file and do the following:</p>
  <ol>
    <li>Read through the "segments" array.</li>
    <li>Using the child "text" properties within each item of the "segments" array, find the concepts and themes being discussed.</li>
    <li>Condense the "segments" array into a smaller array based on these concepts and themes you found by looking at the "text" properties. Do this condensing linearly. Concepts and themes must be neighbours of one another, not from different parts of the array.</li>
    <li>Add a new "stamp" property within each item in the "segment" array that summaries the concept or theme.</li>
  </ol>
</figure>

Unfortunately this was too much for GPT-4 to chew off. The model was also confused by the concept of the 'stamp', no matter how I described the request.
After some trial and error, here's the prompt format (split across separate requests) that I found produced the most usable results:

<figure class="prompt">
  <p>Please take the attached JSON file and do the following:</p>
  <ol>
    <li>Go into the "segments" array.</li>
    <li>Condense it into a much shorter array, using the child "text" items and their themes and concepts to decide where to merge them. Do this linearly in chunks no smaller than 20 seconds each.</li>
  </ol>
  <p><em>Prompt continues below...</em></p>
</figure>

The "20–30 seconds" range instruction was only loosely followed by ChatGPT, which seemed to work nicely for variations in how conversation flowed.

The final 'stamp' request needed delicate handling for GPT-4 to both understand it and produce useful results. Here are a few variations that worked best[^1]:

<figure class="prompt">
  <ol start="3">
    <li>For each of these newly-condensed items: write at least two sentences that turn the "text" content into a new "stamp" text property. This new property must be at least 2–3 sentences long yet be comprehensible to someone completely new to the material. This cannot reveal that it came from a podcast so write it as a general takeaway.</li>
  <ol>
</figure>

<figure class="prompt">
  <ol start="3">
    <li>For each of these newly-condensed items: write at least two sentences that turn the "text" content into a new "stamp" text property. Take as many words as you need to make this content comprehensible to someone completely new to the material. This cannot reveal that it came from a podcast so write it as a general takeaway.</li>
  <ol>
</figure>

<figure class="prompt">
  <ol start="3">
    <li>For each of these newly-condensed items: create a new "stamp" text property. Populate this new "stamp" property in two parts. First, write a brief title summarising the "text" content followed by a colon. After the colon, write a longer summary expanding on the concept or idea. Make this comprehensible to someone completely new to the material. This cannot reveal that it came from a podcast so write it as a general takeaway.</li>
  <ol>
</figure>

Maybe it was a lack of prompt creativity but I could never capture an insight in a way that would make sense to someone coming to it afresh.
Let alone to myself, having also heard the source material, verbatim.

_Two up: prototype recording—just device._

The results were _fine_.
ChatGPT did an admirable job of summarising complicated ideas.

_Two up: prototype recording—just device._

Comparing the AI-produced summaries against the source audio, you can see its done exactly as asked.
And the AI will just get better at this in time.
But I think there's a bigger issue at at hand.

## Paradox

In 2003, Dutch cognitive psychologist Christof van Nimwegen ran [several experiments on the effects of computer-aided learning](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bRM80xIAAAAJ&citation_for_view=bRM80xIAAAAJ:u-x6o8ySG0sC). In each experiment, two groups were given a problem to solve. One group received software assistance, the other did not.

The results are summarised nicely by Nicholas Carr in his book _The Shallows_:

<figure class="quote">
  <blockquote>
  <p>The brighter the software, the dimmer the user.</p>
  </blockquote>
  <figcaption>The Shallows by Nicholas Carr</cite></figcaption>
</figure>

No matter how good the AI-generated summation, collation, and interlinking gets we won't understand the original ideas any better.
In fact, we'll probably get worse at comprehending them as our own, underutilised, mental muscles atrophy.

It sounds obvious in hindsight but leaving the rote work of transcribing, summarising and interlinking to do manually is a necessary step in understanding new material.
Casey Newton wrote something similar a few months ago in his [Platformer](https://www.platformer.news/p/why-note-taking-apps-dont-make-us?) newsletter: although computers _can_ do our thinking for us, it doesn't mean they should.

<figure class="quote">
  <blockquote>
  <p>...as we grow more accustomed to and dependent on our computers we will be tempted to entrust to them ‘tasks that demand wisdom.’</p>
  </blockquote>
  <figcaption>The Shallows by Nicholas Carr</cite></figcaption>
</figure>

I feel like I've been lulled into the unquestioning 'computer is god' mantra, like those tourists who follow GPS driving directions [through bodies of water](https://www.redlandcitybulletin.com.au/story/104929/how-not-to-get-to-straddie/), [over](https://www.sfgate.com/hawaii/article/tourists-follow-gps-into-hawaii-harbor-18077000.php) and [over again](https://www.sfgate.com/hawaii/article/hawaii-tourist-follows-gps-into-harbor-18126281.php).

Computers are great.
But we rely on them for everything at our peril.

<figure class="quote">
  <blockquote>
  <p>...as we cede to software more of the toil of thinking, we are likely diminishing our own brain power in subtle but meaningful ways.</p>
  </blockquote>
  <figcaption>The Shallows by Nicholas Carr</figcaption>
</figure>

## Alternatives

A good rule of thumb might be to maintain human agency; relying on automation and AI assistance only when it is in service of said human agency. We'll know we've broken that rule when we find ourselves [subservient](https://www.threads.net/@dannywhite/post/CzIAYdIPOiB) to said automation or assistance (or driving into oceans).

Examples of 'healthy' AI that comes to mind include [Apple](https://machinelearning.apple.com/research/recognizing-people-photos) and [Google](https://support.google.com/photos/answer/6128838?hl=en&co=GENIE.Platform%3DAndroid)'s respective intelligent photo recognition.
I also think of Fathom—the podcast app I mentioned earlier—which allows for natural language search across all podcasts for topic, theme, and specific dialogue.

<figure>
  <video playsinline autoplay controls loop muted height="500px" style="background: black; padding: 1rem 0">
    <source src="https://res.cloudinary.com/dmpf5fukm/video/upload/f_auto,q_auto/v1673289123/fathom_landing_page/no_alpha/search_1_no_alpha_vua2tj.webm">
  </video>
  <figcaption>Fathom’s search feature, which also works across its ‘podcast universe’.</figcaption>
</figure>

I suppose I'm conflating 'heathy AI' with assistance that is largely grunt work done behind the scenes.
This reminds me of the "ChatGPT as an intern" simile, used to make the point that the current state of technology is only so useful.

I wonder if that is perhaps the right way to treat virtual aids permanently, irrespective of how powerful they become.
Assistance that frees us up to do the thinking and decision-making.

[^1]: I had about 30 variations all up. I judged the response quality based on how well it could jog my memory on the point discussed. I also judged it on how well the summation might work on someone who came to it afresh. Could they understand the point without having to listen to the source?
