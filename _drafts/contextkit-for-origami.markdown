---
layout: post
type: article
title:  "ContextKit for Origami"
date:   2017-08-13 15:33:56 -0400
feature-image: origami-interface.png
---

A few times now I’ve been in a situation where I should have focused more on the context of a prototype. That means thinking about, and actually visualising, entry points such as notifications, deep links, and cold app opens. Similarly, in user testing, I’ve had a few experiences where it would have been beneficial for the subject to open the ‘app’ themselves—not being presented with the prototype directly with a verbal explanation of how they might have got there.

Why? I think scening affects peoples’ mental models.

TLDR: Our prototyping and testing is usually devoid of context, where instead it can be important to illustrate digitally.


## Adding context with ContextKit
I’ve started ContextKit with two components and one template. Each are dynamic and as native-feeling as I could get them. They cover some major entry-points for mobile apps:

- App open from SpringBoard (the home screen)
- App open from a Notification
- App open from another app (Deep Link)

You can [download these components and template on GitHub][github]. For more information on each, read on below.

### SpringBoard App component
A SpringBoard component for Origami. Adaptive for iPhone 7, iPhone 7 Plus, and iPhone SE. Not too much work to adapt for iPad, if you need to.

*[VIDEO: customizing phone size, changing icon, app name, and most importantly—app contents]*
*[CAPTION:]*

| **Inputs** | **Description**                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| App Icon   | An image. Doesn’t need to be rounded—the component does that for you. Is displayed on SpringBoard (the home screen). |
| App Name   | The name of your app. Is displayed on SpringBoard (the home screen).                                                 |
| App Tint   | The predominant colour of your App Icon and app contents. Helps blend the animation between App Icon and full-app.   |
| Open App   | Pulse to launch your app.                                                                                            |
| Close App  | Pulse to close your app and return to SpringBoard.                                                                   |
| Wallpaper  | An image. The default iOS water one if unspecified.                                                                  |

| **Outputs**         | **Description**                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------- |
| App Icon Down       | Boolean for detecting when App Icon is being pressed.                                        |
| App Icon Pulse      | Pulses when App Icon is tapped.                                                              |
| App Launch Progress | Progress (between 0 and 1) of your app being animated open (and closed). 1 being fully open. |
| App Launched        | Boolean that returns true when App Launch Progress is 1.                                     |


There’s quite a lot you can do with this component. If you go under the hood, you’ll see the ability to change the app icons and names to anything you like, as well as the placement of your own app (the *App Location* variable). Each SpringBoard item is placed by anchor rather than position. I’m using this calculation for the pivot; each icon will ‘spring out’ differently depending where it’s placed.

{% include video.html name="pivot-example.mp4" caption="A test composition that shows this dynamism nicely. Feel free to move your own app to whatever position makes sense." attributes="playsinline controls muted loop" %}

I spent a fair bit of timing doing what I thought was optimizing. Turns out that hardcoding assets and removing functionality doesn’t do too much for that cause. Feel free to [download the iPhone 7-only version](https://github.com/dannyalright/contextkit/blob/master/examples/SpringBoard%20App%20iPhone%207.origami) if you want to take a look or see what else can be stripped-out.


### Notification component
A drop-down notification component for Origami. Uses responsive-sizing, so can be used on an iPad, too.

{% include video.html name="notification-and-springboard-app.mp4" caption="The Notification component tied to the SpringBoard App component." attributes="playsinline controls muted" %}

To open an app from the Notification component, simply use an Interaction patch with Notification as the target layer and connect it to the Open App input on the SpringBoard App component.

{% include image.html name="notification-app-open.jpg" %}

You don’t need to use it with my SpringBoard App component, if you just want to test with notifications.

| **Inputs**           | **Description**                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| App Icon             | An image. Doesn’t need to be rounded—the component does that for you. Is displayed on SpringBoard (the home screen). |
| App Name             | The name of your app. Is displayed on SpringBoard (the home screen).                                                 |
| Notification Subject | Optional subject text of the notification.                                                                           |
| Notification Text    | The body text of the notification.                                                                                   |
| Show Notification    | Pulse animate-in the notification.                                                                                   |
| Hide Notification    | Pulse animate-out the notification.                                                                                  |
| Timeout              | An image. The default iOS water one if unspecified.                                                                  |



### Deep Link template
A simple template for emulating the app-switching behavior in iOS. Drop your prototype contents into the ‘Your App’ group, and customise the ‘Some Other App’ group to your heart’s content.

{% include video.html name="deep-link.mp4" caption="Simple example of the Deep Link template." attributes="playsinline controls muted loop" %}


## Installation
There are three ways to get these components and template on your setup. The most direct way is to download the ready-to-go files and riff off them. For more extensibility, follow either of the following:

### Download the components and add to your Patch Library
Download the ready-to-go files and open each into Origami. Right-click on a component and then click ‘Add to User Patch Library…’.

*[Image]*

Next time you click on the New Layer button (+), you should see the component appear.

### Download the system and open in Origami
This is my recommended approach, if you plan to use these extensively. You can also set this up to automatically update. Download the ComponentKit system and open in Origami. Save…

*[Image]*

Next time you click on the New Layer button (+), you should see all the components appear.


## Extending to Android and Framer

I’ve done the bare minimum to validate whether ContextKit is actually useful; a handful of iOS-only components, only for Origami. If these prove useful, I plan to extend ContextKit to include Android, more entry-points, and at least Framer.


## iOS 10 → 11

The current animation and visual styles are modeled from the latest iOS 11 Beta. There are some inevitable inconsistencies that will be ironed out as iOS 11 matures and releases publicly this September-ish.


## Feedback

…Is welcome. I have some ideas of what can be extended or improved, but I need a bit of a push to get it done.

[github]:https://github.com/dannyalright/contextkit/
