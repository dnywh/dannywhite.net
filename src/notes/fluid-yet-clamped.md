---
title: Fluid Yet Clamped
date: 2022-11-11
tags:
  - typography
  - Figma
  - CSS
---

You have the following scenario:
1. A type scale
2. A whole ‘lotta steps on that scale
3. Some of that scale is good for billboards, some is good for social, only a narrow range is good for interfaces
4. Within that digital interface range, one step seems appropriate as a Heading 1 for a desktop monitor but it’s far too large as a Heading 1 for mobile. The appropriate one for mobile is several steps down.
5. Now you have a very beautiful type scale yet a complex situation

Here’s how I solve it:
1. Within your Figma type scale, choose a minimum and maximum step/value for each web semantic header. E.g. maybe your max (desktop) H1 is 80px in size and your min (mobile) H1 is 36px in size.
2. Use CSS clamp to figure out the rest!

See my CodePen demo for Brightspeed.


---
## A note on simplicity
Refactoring UI recommends a simple type scale. But that was before CSS clamp was widely available in the most browsers.