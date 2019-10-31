---
title: ContextKit
description: Adding device context to your mobile prototypes.
date: 2017-08-17 09:00:00 -0400
featured_image: contextkit-in-situ.jpg
client: ustwo
locations:
  - New York, NY
roles:
  - Prototyping
tags:
  - prototyping
  - origami
  - native
  - experimental
---

Picture this: you’re led to an unfamiliar room in an unfamiliar building, and sat-down in front of a mobile device. Some person called a ‘researcher’ or ‘product designer’ presses a few buttons, and then wham—you have something called a ‘prototype’ in front of you and a short verbal description as to why.

I have a hypothesis that the more exposure (and feedback) a person has around the core app experience, the better. To test this hypothesis, I’ve built a resource called [ContextKit][github].

## Adding context with ContextKit

ContextKit currently includes two Origami components and one Origami template. Each are dynamic and as native-feeling as I could get them. They cover some major entry-points for mobile apps:

- App open from SpringBoard (the home screen)
- App open from a Notification
- App open from another app (Deep Link)

You can [download these components and template on GitHub][github]. For more information on each, read on below.

### SpringBoard App component

A SpringBoard component for Origami. Adaptive for iPhone 7, iPhone 7 Plus, and iPhone SE. Not too much work to adapt for iPad, if you need to.

<figure>
  <video muted loop playsinline controls>
  <source src="https://ik.imagekit.io/dw/video/springboard-example.mp4" type="video/mp4">
  </video>
  <figcaption>A simple example of customising the SpringBoard component.</figcaption>
</figure>

There’s quite a lot you can do with this component. If you go under the hood, you’ll see the ability to change the app icons and names to anything you like, as well as the placement of your own app (the _App Location_ variable).

Each SpringBoard item is positioned by the anchor property, rather than the X and Y position properties. I’m also using this calculation for the app icon pivot; each icon will ‘spring out’ differently depending where it’s placed.

<figure>
  <video muted loop playsinline controls>
  <source src="https://ik.imagekit.io/dw/video/pivot-example.mp4" type="video/mp4">
  </video>
  <figcaption>A test composition that shows this dynamism nicely. Feel free to move your own app to whatever position makes sense.</figcaption>
</figure>

#### Optimisation

It turns out that hard-coding assets and removing functionality doesn’t do too much for reducing file size. Feel free to [download the iPhone 7-only version](http://github.com/dannyalright/contextkit/blob/master/examples/SpringBoard%20App%20iPhone%207.origami) if you want to take a look or see what else can be stripped-out.

### Notification component

A drop-down notification component for Origami. Uses responsive-sizing, so can be used on an iPad, too.

<figure>
  <video muted loop playsinline controls>
  <source src="https://ik.imagekit.io/dw/video/notification-springboard-app.mp4" type="video/mp4">
  </video>
  <figcaption>The Notification component tied to the SpringBoard App component.</figcaption>
</figure>

To open an app from the Notification component, simply use an Interaction patch with Notification as the target layer and connect it to the Open App input on the SpringBoard App component.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/contextkit/notification-app-open.jpg" alt="Two Origami patches connect to each other">
  <figcaption>Tapping a ContextKit Notification will now trigger a ContextKit SpringBoard App to animate into view.</figcaption>
</figure>

You don’t need to use it in conjunction with the SpringBoard App component if you just want to test with notifications.

### Deep Link template

A simple template for emulating the app-switching behaviour in iOS. Drop your prototype contents into the ‘Your App’ group, and customise the ‘Some Other App’ group to your heart’s content.

<figure>
  <video muted loop playsinline controls>
  <source src="https://ik.imagekit.io/dw/video/deep-link.mp4" type="video/mp4">
  </video>
  <figcaption>A simple example of the Deep Link template.</figcaption>
</figure>

## Installation

There are three ways to get access to these components and template. The most direct way is to [download the ready-to-go files](http://github.com/dannyalright/contextkit/tree/master/origami/ContextKit) and riff from them. For more extensibility, follow either of the following:

### Download the components and add to your Patch Library

[Download a ready-to-go file](http://github.com/dannyalright/contextkit/tree/master/origami/ContextKit) and open into Origami. Right-click on the component and then click _Add to User Patch Library…_.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/contextkit/add-to-patch-library.jpg" alt="A screenshot of the Origami Mac app">
  <figcaption>Adding the ContextKit Notification component to your Patch Library.</figcaption>
</figure>


Next time you click on the New Layer button (+), you should see the component appear. This approach is good for quick-yet-global access across documents.

### Download the system and open in Origami

This is my recommended approach if you plan to use these extensively. [Clone or download the ComponentKit system](http://github.com/dannyalright/contextkit/tree/master/origami) and open in Origami Studio. If you clone the repository, and choose _Install from Current Location_, the components will automatically update whenever you pull from the repository.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/contextkit/install-system.jpg" alt="Installing the ContextKit system in Origami Studio">
  <figcaption>Installing the ContextKit system in Origami Studio.</figcaption>
</figure>

Next time you click on the New Layer button (+), you should see all the components appear.

## Extending to Android and Framer

I’ve done the bare minimum to validate whether ContextKit is actually useful; a handful of iOS-only components, only for Origami. If these prove useful, I plan to extend ContextKit to include Android, more entry-points, and at least Framer.

## iOS 10 → 11

The current animation and visual styles are modelled from the latest iOS 11 Beta. There are some inevitable inconsistencies that will be ironed out as iOS 11 matures and releases publicly this September-ish.

## Detailed documentation

Information on each component's inputs and outputs is available inside its respective tool's directory. So far that includes:

- [iOS Notification component for Origami](http://github.com/dannyalright/contextkit/blob/master/origami/notification.md)
- [iOS SpringBoard App component for Origami](http://github.com/dannyalright/contextkit/blob/master/origami/springboard-app.md)


## Tutorials

Chris Slowik over at [designers.how][designershow] has [published a 5 minute video tutorial on ContextKit][designershow]. Specifically SpringBoard App component. It's a great walk-through of the installation process and a real-world use case.

[github]: http://github.com/dannyalright/contextkit/
[designershow]: http://designers.how/episodes/start-by-building-context
