---
title: Pi on the Brain
date: 2022-11-26
tags:
  - Raspberry Pi
  - Progress
---

My Raspberry Pi is talking to the International Space Station, then talking to Mapbox, then rendering a picture to my homemade e-ink picture frame every hour.

...Almost.

I’ve been saying that 'almost' bit every day for the last three weekends.

Feels great regardless. Progress.

<figure>
  <img src="{% extSrc 'map-tile-2022-11-21-18-22-53-rendered.jpg' %}"
    srcset="{% extSrcset 'map-tile-2022-11-21-18-22-53-rendered.jpg' %}"
    alt="A failed map tile render test"
    width="800"
    height="400"
    loading="lazy">
  <figcaption>Over the ocean. My Pi Zero isn’t strong enough to check some database for “are these coordinates over ocean or land?” yet. I’m working on doing it more crudely via pixel value. If a low pixel value, the ISS is likely over the ocean and the image will likely be boring. So keep what’s already on screen.</figcaption>
</figure>

<figure>
  <img src="{% extSrc 'map-tile-2022-11-21-18-16-40-rendered.jpg' %}"
    srcset="{% extSrcset 'map-tile-2022-11-21-18-16-40-rendered.jpg' %}"
    alt="A better map tile render test"
    width="800"
    height="400"
    loading="lazy">
  <figcaption>A ridge. Some work to do to make this legible.</figcaption>
</figure>
