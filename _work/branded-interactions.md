---
title: Branded Interactions
description: Allowing any organisation to identify and express unique motion and interactions.
date: 2016-01-20 09:00:00 -0400
locations:
  - New York, NY
client: ustwo
featured_image: ipad-in-situ.jpg
links:
  - title: Branded Interactions on GitHub
    url: https://www.github.com/ustwo/branded-interactions
tags:
  - prototyping
  - framer
  - native
  - experimental
---

## Issue

Clients of ustwo often request direct or indirect branded motion help. Our traditional client process makes it difficult to uncover relevant motion attributes, and thus also difficult for us to embed well-branded motion within screen-based interactions. Branded Interactions attempts to solve this via a collaborative iPad interface.

## Roles, collaborators, and scope

ustwo New York Design Director Joe Smith surfaced the opportunity and provided general guidance. I was solely responsible for the design process and design direction. This included prototyping and front-end development.

## Shaping the proposed solution

Joe and I decided on our appetite and thus scope and timing for the first solution. We allowed two weeks for the initial design process; enough to address the issue in its simplest form for client validation.

Auditing requirements from past client projects and interviewing experienced workshop facilitators helped confirm expectations (routine execution of static visual assets such as colour schemes, type stacks, iconography) as well as surface surprising gaps. One of gaps included a disconnect from brand guidelines to future extensions. An example of this includes a large media service struggling to extend to new media devices (mobile, wearables), ultimately resorting to fragmentation.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/branded-interactions/attribute-applications.jpg" alt="Two hand-drawn sketches">
  <figcaption>Working out the range in which most clients work within, as well as common expectations down the line.</figcaption>
</figure>

A happy medium between abstract and realistic representation of movements was necessary. Something that could be placed in situ on existing formats and then naturally extended to new ones.

## Building the solution

I chose Framer to build what would ultimately become the Branded Interactions playground. Framer gave us the ability to ideate and validate ideas extremely quickly whilst jumping between versions with Git. It also allowed us to load Branded Interactions on any device with an internet connection and WebKit browser (i.e. any iPad, iPhone, or Mac), and extend Branded Interactions in order to export values created with clients.

Our earlier client audit provided us with a foundation for common brand attributes to convert to motion presets. The creation of these motion presets was surprisingly the least difficult task—creating an interface that could support a set of presets whilst allowing for parameter customisation and exporting was the largest hurdle.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/branded-interactions/curve-expressions.jpg" alt="A hand-drawn sketch">
  <figcaption>Early ideation into entering and exiting motion presets. These presets needed to contain editable parameters typical of any digital motion (velocity, friction, tension) in order for client customisation.</figcaption>
</figure>

Presets were named for to well-known affordances such as 'smooth', 'snappy', and 'sluggish'. We quickly realised well-known _elements_ were needed too; parts of an interface that are easily recognisable, tend to be branded, and therefore have connotations on how they behave.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/branded-interactions/pattern-expressions.jpg" alt="A hand-drawn sketch">
  <figcaption>Exploration into common interface elements that could be generalised enough for the Branded Interactions tool, whilst also giving enough indication of how a preset behaves.</figcaption>
</figure>

Our largest unknowns and ambiguities had now been clarified. At this point we were ready to iterate within Framer. The iteration process became simply piecing together editable presets and interactive interface elements into a coherent experience. Designers and project managers at ustwo (who were routinely exposed to the aforementioned client requests) could then provide multiple rounds of precise feedback.

<figure>
  <video muted loop playsinline controls autoplay>
  <source src="https://ik.imagekit.io/dw/video/branded-interactions-demo.mp4" type="video/mp4">
  </video>
  <figcaption>The resulting Branded Interactions tool containing editable presets and interactive interface elements.</figcaption>
</figure>



## Looking forward

Clients continue to make analogies to real-world physical items and visceral experiences. They turn out to be useful regardless of whether the motion values are fully digital. Prototyping with LittleBits or perhaps motion sensors in existing, household-level, physical items could provide added value in the branding of motion patterns.


