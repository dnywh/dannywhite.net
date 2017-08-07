---
layout: post
type: article
title:  "SpringBoard resources for Origami"
date:   2017-05-07 15:33:56 -0400
categories: jekyll update
feature-image: 2017-05-07-app-open-component-for-origami/origami-interface.png
---

User testing a mobile app often has a bit of weirdness around realism. The stage is often set that 'hey, welcome to this session. You're in this app now'—or, tap to open this prototype.

I've been enough situations now where we've had to mock the iOS SpringBoard or Android Home Screen/Drawer so many times, that I've decided to make a component for it.

## Framer support
I love Framer, but this this component doesn't really make sense for it. Being web-based, Framer allows designers/researchers/testers to save the prototype to the SpringBoard/Home Screen, thus mitigating the need to fake one.

## iOS 11 changes
Animation and layout values are designed for the soon-to-be-released iOS 11. I figured the changes were drastic enough, and the timing close enough, that a small window of iOS 10-to-11 is ok.

I'll let the Origami team sort out updating the Status Bar component to iOS 11.

## What's in, and what's out
I quickly realized that there could be a huge amount of complexity in this component. I chose the route of 'include most of it, and you can take out what you don't want'. I'm assuming the end user is somewhat proficient in Origami (but you don't have to be, simply to run it).

### What's out
- Background parallax animation on app open and close. This would require separate layers for the app icons and background. Kinda beyond the purposes of this resource. Too much weight compared to benefit.
- Pivot animation on entry & exit

## Grid pivot
You can change the _App Location_ variable to see how this is automatically applied.

## Android
I know, this one is kinda more important for most people. Given the fragmentation, I've chosen the Google Nexus 5 as a good medium. I'll release it soon.

## Where's the unlock screen?
I think it's redundant for the purposes of testing. Sure, it adds more realism, but it adds a lot of heft to a situation where you don't want to bring in any possible issues or weight.
