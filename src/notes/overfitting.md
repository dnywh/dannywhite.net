---
title: Overfitting the Model
date: 2025-10-05
description: Baseball, earthquakes, pattern-matching, and confirmation bias.
tags:
  - Statistics
  - Mind
  - Books
---

Nate Silver's _The Signal and the Noise_ is a bit of a slog. That chapter on baseball and earthquakes, though. Wow. I see overfitting everywhere since reading it.

## Baseball

Say you're evaluating how well baseball players perform as they age. You track 27 players and get these results:

<figure>
  <img src="{% extSrc 'notes/overfitting/signal-noise-5-6a' %}"
  srcset="{% extSrcset 'notes/overfitting/signal-noise-5-6a' %}"
  alt="A chart showing a semi-random scattering of dots with no real curve."
  width="1230"
  height="747"
  loading="lazy">
  <figcaption>Age on the X axis, performance on the Y. Baseball players are usually expected to improve as they begin their career, peak somewhere in their late 20s, and then slowly decline.</figcaption>
</figure>

Many of us have an inclination to overfit the data: we pull a pattern out that only (barely) exists because the sample size was small. An overfit model of the above might look like this:

<figure>
  <img src="{% extSrc 'notes/overfitting/signal-noise-5-6c' %}"
  srcset="{% extSrcset 'notes/overfitting/signal-noise-5-6c' %}"
  alt="The same chart as above, this time with a very specific, squiggly curve between the dots. Another, dashed, parabolic curve sits behind."
  width="1230"
  height="825"
  loading="lazy">
  <figcaption>Reverse-engineering a curve from that limited dataset via complex functions. Essentially suggesting baseball players perform peak and trough a few times as they age.</figcaption>
</figure>

This is much like flipping a coin five times, getting tails four of those times, then concluding that a coin toss favours tails 80% of the time.

Add more data—more coin flips or baseball players—and you'll often see that a simpler, smoother, curve appears:

<figure>
  <img src="{% extSrc 'notes/overfitting/signal-noise-5-5' %}"
  srcset="{% extSrcset 'notes/overfitting/signal-noise-5-5' %}"
  alt="The same chart as above, this time with a very specific, squiggly curve between the dots. Another, dashed, parabolic curve sits behind."
  width="1230"
  height="720"
  loading="lazy">
  <figcaption>Could have been approximated with just the limited data in 5-6A via a quadratic equation; the dashed curve above.</figcaption>
</figure>

## Earthquakes

Seismologists track the magnitude and frequency of earthquakes over time. Unlike baseball however, patterns in magnitude and frequency can take centuries to play out.

Some seismologists play "connect the dots" anyway. They reverse-engineer a formula and/or fall victim to confirmation bias; finding reproducible signals in nature for why those events happened when they did. They use these complex formulas and signals to predict future earthquakes, often down to the day. Or the opposite; they predict when earthquakes _won't_ happen.

The 2011 magnitude 9.1 earthquake in Japan (the [Fukushima](https://en.wikipedia.org/wiki/2011_Tōhoku_earthquake_and_tsunami) one) was one of these cases. Seismologists had used an overfit model to determine such an earthquake might only occur once every 13,000 years.

Had they followed the more boring, straight-lined, [Gutenberg-Richter law](https://en.wikipedia.org/wiki/Gutenberg–Richter_law)? Once every 130 years.
