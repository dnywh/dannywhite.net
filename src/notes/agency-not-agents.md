---
title: "Agency, Not Agents"
description: A short exploration in automated audio bookmark summation and thematic interlinking, with the help of generative AI.
date: 2023-11-13
modified: 2023-12-13
stage: 2
pinned: true
tags:
  - AI
  - Design
related:
  - feeling-forward
  - ai-as-the-copilot
audience: Designers, makers, and other technologists.
---

Imagine that you're listening to a podcast and the guest says something particularly insightful. Maybe it relates to something you're working on, thinking about, or just want to come back to. If only you could snap your fingers and have that insight saved for later.

This is an idea that I've kicked around for a while. It also turns out to be unoriginal; the [Fathom](https://fathom.fm) podcast app does this via its clipping feature:

<figure>
  <video playsinline controls loop muted preload="metadata" style="aspect-ratio:1/1">
    <source src="https://res.cloudinary.com/dannywhite/video/upload/bo_140px_solid_black/q_auto,ar_1:1,b_black,w_1440,c_pad/v1699673868/notes/agency-not-agents/fathom-clipping.webm#t=0.1">
    <source src="https://res.cloudinary.com/dannywhite/video/upload/bo_140px_solid_black/q_auto,ar_1:1,b_black,w_1440,c_pad/v1699673868/notes/agency-not-agents/fathom-clipping.mp4#t=0.1">
  </video>
  <figcaption>Fathom’s clipping feature. Dubious podcast choice not mine.</figcaption>
</figure>

The basic utility of bookmarking audio segments is obvious.
What interests me now is what happens _after_ you save segments of audio.

Can this insight be automatically distilled, collated, and interlinked with everything you've saved before it?
Does the automation of this work reduce some of the work involved in understanding new information?

I think the answer is no. **The mental, menial, task of truly understanding an idea or new concept and linking it to others can't be outsourced**, irrespective of how advanced that computer is or will be.

## Experiments

I used OpenAI's Whisper to transcribe three podcast episode segments (across shows and genres) and GPT-4 (via ChatGPT, [GPT builders](https://openai.com/blog/introducing-gpts)) to manipulate the resulting text.
I also built-out a podcast app prototype that takes the source audio, transcript, and then handles the 'stamping': forming the distilled insight.

<figure>
  <video playsinline controls loop preload="metadata" style="aspect-ratio:1/1">
    <source src="https://res.cloudinary.com/dannywhite/video/upload/f_auto,q_auto:good,w_1440,c_limit,ar_1:1,c_fill/v1699673868/notes/agency-not-agents/stamper-overview.webm#t=0.1">
  </video>
  <figcaption>Say hello to <em>Stamper</em>, a text-friendly podcast player.</figcaption>
</figure>

Here's a simplified example of what Whisper produced from the source audio:

```json
{
  "text": "All right, so the so the famous mediumist message I find that quote really opaque I I never connected for me, but there's something else McLuhan says in that same book understanding media that that I love so he says...",
  "segments": [
    {
      "start": 0.0,
      "end": 4.12,
      "text": "All right, so the so the famous mediumist message I find that quote really opaque"
    },
    {
      "start": 4.12,
      "end": 10.64,
      "text": "I I never connected for me, but there's something else McLuhan says in that same book understanding media that that I love so he says..."
    }
  ]
}
```

GPT-4 could then read this JSON file and distill insights within segments based on my prior instructions and a timestamp.
This was surprisingly straightforward with GPT Builder.

Here's what I found provided the best results:

<figure class="prompt">
  <p>Users will ask you about a specific timestamp of the podcast. Your task is to provide a summary of whatever is being discussed at that timestamp in three formats:</p>
  <ol>
    <li>A concise title.</li>
    <li>A brief two-to-three sentence summary.</li>
    <li>A summary in as many words as you need to make the content comprehensible to someone completely new to the material.</li>
  </ol>
  <p>Your summaries must be direct and to the point, avoiding any reference to the podcast itself. The summaries should stand on their own, presenting the main ideas and key points in a manner that’s comprehensible to someone unfamiliar with the material, and written at a basic adult reading level. </p>
</figure>

<figure class="prompt">
  <p><em>File: transcript.json</em></p>
  <p>I am going to upload a transcript of a podcast. Please use this to inform your answers when users ask you what happens at a specific timestamp.</p>
</figure>

And here's what that look like in practice:

<figure>
  <img src="{% extSrc 'agency-not-agents/gpt-builder-example' %}"
  srcset="{% extSrcset 'agency-not-agents/gpt-builder-example' %}"
  alt="A screenshot of OpenAI's GPT Builder tool showing what is being discussed at a specific timestamp"
  width="1490"
  height="1327"
  loading="lazy">
  <figcaption>I later revised the prompt so summaries do not mention the conversation and its segments, with the hope that insights could stand on their own.</figcaption>
</figure>

This would work well in an API or production setting but was impractical for my immediate prototyping purposes.
I instead manually merged related segments and their timestamps, and then generated the summaries of each of those clusters.
That way, when the podcast player stamped at a particular timestamp, it could just cross-reference a prepared summary.

Assembling by hand also meant I could more easily iterate over alternate prompts for the creation of each summary.
This was important because although the results were useable, they didn't seem all that _useful_[^1].

This lack of usefulness became even pronounced when summary types were placed in the Stamper app prototype.

<figure>
  <video playsinline controls loop preload="metadata" style="aspect-ratio:1/1">
    <source src="https://res.cloudinary.com/dannywhite/video/upload/f_auto,q_auto:good,w_1440,c_limit,ar_1:1,c_fill/v1699673868/notes/agency-not-agents/stamper-summary-short.webm#t=0.1">
  </video>
</figure>

I could never capture an insight in a way that would make sense to someone coming to it afresh.
Let alone to myself, having also heard the source material verbatim.

<figure>
  <video playsinline controls loop preload="metadata" style="aspect-ratio:1/1">
    <source src="https://res.cloudinary.com/dannywhite/video/upload/f_auto,q_auto:good,w_1440,c_limit,ar_1:1,c_fill/v1699673868/notes/agency-not-agents/stamper-summary-long.webm#t=0.1">
  </video>
</figure>

<figure>
  <video playsinline controls loop preload="metadata" style="aspect-ratio:1/1">
    <source src="https://res.cloudinary.com/dannywhite/video/upload/f_auto,q_auto:good,w_1440,c_limit,ar_1:1,c_fill/v1699673868/notes/agency-not-agents/stamper-title-and-summary-short.webm#t=0.1">
  </video>
</figure>

Comparing the AI-produced summaries against the source audio, you can see it has done exactly as asked.
And AI will just get better at this type of task in time.
But I think there's a bigger issue at at hand than the quality of summation.

## Paradox

In 2003, Dutch cognitive psychologist Christof van Nimwegen ran [several experiments on the effects of computer-aided learning](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bRM80xIAAAAJ&citation_for_view=bRM80xIAAAAJ:u-x6o8ySG0sC). In each experiment, two groups were given a problem to solve. One group received software assistance, the other did not.

The results are summarised nicely by Nicholas Carr in his book _The Shallows_:

<figure class="quote">
  <blockquote>
  <p>The brighter the software, the dimmer the user.</p>
  </blockquote>
  <figcaption>The Shallows by Nicholas Carr</cite></figcaption>
</figure>

No matter how good the AI-generated summation, collation, and interlinking gets, we still won't understand the original ideas any better.
In fact, we'll probably get worse at comprehending them as our own, underutilised, mental muscles atrophy.

It sounds obvious in hindsight that leaving the rote work of transcribing, summarising and interlinking to do manually is a necessary step in our understanding of new material.
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
  <video playsinline controls loop muted preload="metadata" style="aspect-ratio:1/1">
    <source src="https://res.cloudinary.com/dannywhite/video/upload/bo_140px_solid_black/q_auto,ar_1:1,b_black,w_1440,c_pad/v1699673868/notes/agency-not-agents/fathom-search.webm#t=0.1">
    <source src="https://res.cloudinary.com/dannywhite/video/upload/bo_140px_solid_black/q_auto,ar_1:1,b_black,w_1440,c_pad/v1699673868/notes/agency-not-agents/fathom-search.mp4#t=0.1">
  </video>
  <figcaption>Fathom’s search feature, which also works across its ‘podcast universe’.</figcaption>
</figure>

I suppose I'm conflating 'heathy AI' with assistance that is largely grunt work, done behind the scenes.
This reminds me of the "ChatGPT as an intern" analogy, used to make the point that the current state of technology is only so useful.

I wonder if that is perhaps the right way to treat virtual aids permanently, irrespective of how powerful they become.
Artificial assistance should be used for _additive work_ that we otherwise wouldn't do. Freeing us humans up for more agency, not less.

### Updates

I've come back to this to link to Jess Fong's excellent Vox video [AI can do your homework. Now what?](https://www.youtube.com/watch?v=bEJ0_TVXh-I&t=678s). _The science of learning_ chapter hits these same notes. It also more neatly proposes a healthy relationship with AI: using it to test our thinking which happens elsewhere, manually.

[^1]: I judged response quality based on how well it could jog my memory on the point discussed. I also judged it on how well the summation might work on someone who came to it afresh. Could they understand the point without having to listen to the source?
