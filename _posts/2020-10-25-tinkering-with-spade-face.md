---
title: Tinkering with SPADE-FACE
date: 2020-10-25 17:20:00 +1100
featured_image: spade-face-b.jpg
tags:
  - experiment
  - machine-learning
  - drawing
---

A sprained ankle on a rainy day means I'm actually making good on [yesterday's plan](the-archie) to try [SPADE-FACE on RunwayML](https://app.runwayml.com/models/sree_harsha/SPADE-FACE).

Here’s what that's looking like:

<figure>
  <img data-src="https://ik.imagekit.io/dw/notes/tinkering-with-spade-face/spade-face-a.jpg" alt="A sketch of a face and its computer-generated result">
  <img data-src="https://ik.imagekit.io/dw/notes/tinkering-with-spade-face/spade-face-b.jpg" alt="A sketch of a face and its computer-generated result">
  <img data-src="https://ik.imagekit.io/dw/notes/tinkering-with-spade-face/spade-face-c.jpg" alt="A sketch of a face and its computer-generated result">
  <figcaption>Left: the 'segmentation' sketch input. Right: the computer-generated output.</figcaption>
</figure>

There were a couple versions that didn't work out so well. They were ones I sketched elsewhere and imported in via a PNG or JPG. Here's what I mean:

<figure>
  <img data-src="https://ik.imagekit.io/dw/notes/tinkering-with-spade-face/spade-face-x.jpg" alt="A sketch of a face and its computer-generated result">
   <figcaption>Randall Flagg on a good day.</figcaption>
</figure>

You can see the difference in black; the prior versions are pure `#000000`. The imported, demonic, one has gone through some unwanted colour profile changes. Same deal with all other colours. Similar results with PNG where there should be less colour differences.

<figure>
  <img data-src="https://ik.imagekit.io/dw/notes/tinkering-with-spade-face/hex-codes.jpg" alt="A screenshot of all the colours that SPADE-FACE requires for facial features">
   <figcaption>Each of these hex codes must be matched exactly for the model to do its magic.</figcaption>
</figure>

I had an idea to outsource the sketch creation to a whole bunch of people, ideally hand-rendered in crayon, marker, or acrylic. How would the output from a five year old kid in the U.S. differ from that of an adult in Sydney?

This colour matching snafu puts a damper on these plans as it means the segmentation sketch must be done in RunwayML or have been exported with the exact right colours and colour profile. That stuff is a black hole.

Anyway. There's gotta be a way. I'll figure something out.

Here's a speed-run of live-editing a segmentation:

<figure>
  <video muted playsinline controls loop>
  <source src="https://ik.imagekit.io/dw/video/spade-face-demo.mp4" type="video/mp4">
  </video>
  <figcaption>Drawing whilst the model is running. I'm doing this via the Sidecar feature that lets you use your iPad as a second Mac display, which means I can also use the Apple Pencil.</figcaption>
</figure>

And here's me learning how to chain models on RunwayML:

<figure>
  <img data-src="https://ik.imagekit.io/dw/notes/tinkering-with-spade-face/model-chaining.jpg" alt="A screenshot of the RunwayML interface">
   <figcaption>My movements in in the camera are applied to the image and outputted below.</figcaption>
</figure>
