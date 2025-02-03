---
title: "Bookmarklets"
description: Browsing the web like it’s 2001 again.
date: 2024-01-16
tags:
  - JavaScript
  - Web
audience: People who are familiar with bookmarklets
---

[Bookmarklets](https://bookmarklets.org/what-is-a-bookmarklet/) have been out of fashion for a while now. I've relied on them for years but only just made the connection that I can roll my own for prepend services[^prepend-services] like [12ft.io](https://12ft.io) or [Cooked](https://cooked.wiki). Here's how, using Cooked as an example.

<figure>
  <img src="{% extSrc 'notes/cooked-demo.jpg' %}"
  srcset="{% extSrcset 'notes/cooked-demo.jpg' %}"
  alt="Screenshots of the Cooked summary service in action."
  width="859"
  height="804"
  loading="lazy"
  style="padding: 3rem 3rem 3rem 1.5rem;">
  <figcaption>How Cooked advertises its summarised recipe prepend service.</figcaption>
</figure>

## How

1. Get the prepend service's URL handy. For Cooked, it's `https://cooked.wiki/`
2. Add it to the following JavaScript snippet in place of `baseUrl`'s value:

```js
const baseUrl = "https://cooked.wiki/";
const currentUrl = encodeURI(window.location.href);
window.location.href = baseUrl + currentUrl;
```

3. Paste that JavaScript into a bookmarklet maker like [this one](https://mrcoles.com/bookmarklet/).
4. Drag-and-drop the resulting bookmarklet to your browser's bookmarks bar.

## More examples

Here are some that I use often. You can drag any of these to your bookmarks bar if you'd like to use them yourself.

- <a href="javascript:(function()%7B(function%20()%20%7Bvar%20i%2C%20elements%20%3D%20document.querySelectorAll('body%20*')%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20elements.length%3B%20i%2B%2B)%20%7Bif%20(getComputedStyle(elements%5Bi%5D).position%20%3D%3D%3D%20'fixed')%20%7Belements%5Bi%5D.parentNode.removeChild(elements%5Bi%5D)%3B%7D%7D%7D)()%7D)()">**Kill Sticky**</a> removes all `position: fixed;` elements from view. I.e. it gets rid of annoying overlays and pop-ups.
- <a href="javascript:void%20function()%7Bwindow.location.href=%22https://getpocket.com/edit%3Furl=%22+encodeURI(window.location.href)%7D();">**Pinterest It**</a> scours the current page for images and prepares them for pinning to your Pinterest account.
- <a href="javascript:void%20function()%7Bwindow.location.href=%22https://cooked.wiki/%22+encodeURI(window.location.href)%7D();">**Cook It**</a> uses the [Cooked](https://cooked.wiki) service to formats recipe webpages nicely. Cooked removes all the preamble, upsells, and so on.
- <a href="javascript:void%20function()%7Bwindow.location.href=%22https://getpocket.com/edit%3Furl=%22+encodeURI(window.location.href)%7D();">**Save to Pocket**</a> does exactly that.
- <a href="javascript:void%20function()%7Bwindow.location.href=%22https://12ft.io/%22+encodeURI(window.location.href)%7D();">**Jump 12ft**</a> uses the [12ft.io](https://12ft.io) service to get past the occasional paywall.
- <a href="javascript:void((function(d)%7Bvar%20e=d.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//www.typesample.com/assets/typesample.js?r='+Math.random()*99999999);d.body.appendChild(e)%7D)(document));">**Sample Type**</a> uses the [Type Sample](https://www.typewolf.com/type-sample) service to inspect and toy with font assets on the current page.

## Keyboard shortcuts

I use the Pinterest one a lot so I made a keyboard shortcut for it. Here's how to do that on macOS for Safari bookmarklets:

1. Open System Settings -> Keyboard -> Keyboard Shortcuts -> App Shortcuts
2. Add a new item for Safari.
3. Enter the _exact_ same name as the bookmarklet in Safari.

My _Pinterest it_ keyboard shortcut is ⌥⇧⌘P.

## Credits

I used Max Masnick's [work-around](https://tech-notes.maxmasnick.com/work-around-for-broken-pocket-bookmarklet) to fix Pocket's broken bookmarklet for Safari on the same day Jeffrey Zeldman [linked](https://www.threads.net/@zeldman/post/C2Hrs6Bg2Nm) to Cooked. These two connected the dots for me.

[^prepend-services]: These are services that have instructions like "add `example.com/` in front of the URL already in your address bar". They take the page you're on and transform it in some way.
