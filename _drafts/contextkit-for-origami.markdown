---
layout: post
type: article
title:  "ContextKit for Origami"
date:   2017-08-13 15:33:56 -0400
feature-image: contextkit-og.jpg
---

I'm not sure about you, but my experience in context-giving to user testing participants is verbal and pretty minimal. Those poor souls are thrust into a whole 'lotta newness without any digital illustration of how or why they got there.

In retrospect, having that context included would have been beneficial. I think staging affects peoples' reception of digital products quite heavily. There's also something to be said about the app-as-a-service shift we're seeing.

To fill that gap, I've begun a resource called [ContextKit][github]. Hopefully it helps to aid staging and scening in your prototypes.

## Adding context with ContextKit
ContextKit currently includes two Origami components and one Origami template. Each are dynamic and as native-feeling as I could get them. They cover some major entry-points for mobile apps:

- App open from SpringBoard (the home screen)
- App open from a Notification
- App open from another app (Deep Link)

You can [download these components and template on GitHub][github]. For more information on each, read on below.

### SpringBoard App component
A SpringBoard component for Origami. Adaptive for iPhone 7, iPhone 7 Plus, and iPhone SE. Not too much work to adapt for iPad, if you need to.

{% include video.html name="springboard-example.mp4" caption="Simple example of customising the SpringBoard component." attributes="playsinline controls muted loop" %}

There’s quite a lot you can do with this component. If you go under the hood, you’ll see the ability to change the app icons and names to anything you like, as well as the placement of your own app (the *App Location* variable). Each SpringBoard item is placed by anchor rather than position. I’m using this calculation for the pivot; each icon will ‘spring out’ differently depending where it’s placed.

{% include video.html name="pivot-example.mp4" caption="A test composition that shows this dynamism nicely. Feel free to move your own app to whatever position makes sense." attributes="playsinline controls muted loop" %}

I spent a fair bit of timing doing what I thought was optimizing. Turns out that hardcoding assets and removing functionality doesn’t do too much for that cause. Feel free to [download the iPhone 7-only version](https://github.com/dannyalright/contextkit/blob/master/examples/SpringBoard%20App%20iPhone%207.origami) if you want to take a look or see what else can be stripped-out.


### Notification component
A drop-down notification component for Origami. Uses responsive-sizing, so can be used on an iPad, too.

{% include video.html name="notification-and-springboard-app.mp4" caption="The Notification component tied to the SpringBoard App component." attributes="playsinline controls muted" %}

To open an app from the Notification component, simply use an Interaction patch with Notification as the target layer and connect it to the Open App input on the SpringBoard App component.

{% include image.html name="notification-app-open.jpg" %}

You don’t need to use it with my SpringBoard App component, if you just want to test with notifications.

### Deep Link template
A simple template for emulating the app-switching behavior in iOS. Drop your prototype contents into the ‘Your App’ group, and customise the ‘Some Other App’ group to your heart’s content.

{% include video.html name="deep-link.mp4" caption="Simple example of the Deep Link template." attributes="playsinline controls muted loop" %}


## Installation
There are three ways to get these components and template on your setup. The most direct way is to [download the ready-to-go files](https://github.com/dannyalright/contextkit/tree/master/ContextKit) and riff off them. For more extensibility, follow either of the following:

### Download the components and add to your Patch Library
[Download a ready-to-go file](https://github.com/dannyalright/contextkit/tree/master/ContextKit) and open into Origami. Right-click on the component and then click _Add to User Patch Library…_.

{% include image.html name="add-to-patch-library.jpg" %}

Next time you click on the New Layer button (+), you should see the component appear.

### Download the system and open in Origami
This is my recommended approach if you plan to use these extensively. [Clone or download the ComponentKit system][github] and open in Origami Studio. If you clone the repository, and choose _Install from Current Location_, the components can be updated automatically.

{% include image.html name="install-system.jpg" alt="Installing the ContextKit system in Origami Studio." caption="Installing the ContextKit system in Origami Studio." %}

Next time you click on the New Layer button (+), you should see all the components appear.


## Extending to Android and Framer
I’ve done the bare minimum to validate whether ContextKit is actually useful; a handful of iOS-only components, only for Origami. If these prove useful, I plan to extend ContextKit to include Android, more entry-points, and at least Framer.


## iOS 10 → 11
The current animation and visual styles are modeled from the latest iOS 11 Beta. There are some inevitable inconsistencies that will be ironed out as iOS 11 matures and releases publicly this September-ish.


## Feedback
…is welcome. I have some ideas of what can be extended or improved, but I need a bit of a push to get it done.

[github]:https://github.com/dannyalright/contextkit/
