---
title: Bringing Life to a Bot
date: 2020-11-06 11:30:00 +1100
featured_image: ephemera-sizes.jpg
tags:
  - process
  - tech
  - machine-learning
  - experiment
---

Ephemerabot was born into the world this week. Here's one of their first words:

<div class="tweet">
  <blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">Paris Metro. Paris, France. Tuesday, October 2, 2018. Tagged with <a href="https://twitter.com/hashtag/train?src=hash&amp;ref_src=twsrc%5Etfw">#train</a>, <a href="https://twitter.com/hashtag/transport?src=hash&amp;ref_src=twsrc%5Etfw">#transport</a>. <a href="https://t.co/Bx2liPpn0C">pic.twitter.com/Bx2liPpn0C</a></p>&mdash; Ephemerabot (@ephemerabot) <a href="https://twitter.com/ephemerabot/status/1322797882420961280?ref_src=twsrc%5Etfw">November 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

And [here's their birth certificate](https://github.com/dnywh/ephemerabot).

Ephemerabot checks for and tweets out new scraps of [ephemera](https://github.com/dnywh/ephemera) daily, and tweets out a Throwback Thursday edition every...Thursday.

I've been itching to play with the Twitter API for a while. Twitter has the trifecta for making interesting computer-generated content:

1. A steady flow of human-made content to programmatically sift through and read
2. The ability to write new content in a myriad of ways
3. A well-documented and accessible API

Other public forums like Instagram lack the accessible API: the ability for anyone to experiment with their platform.

I decided to try out Ephemerabot first because it's a one-way stream: just sending simple(ish) tweets out without reading other peoples' ones first.

## Approach

I already use Airtable to publish records to the [Ephemera](https://ephemera.herokuapp.com/) web app via Airtable's API. It works great[^airtable] and their API documentation is my go-to example of good documentation. So, Ephemerabot already had a data source (example Airtable base [here](https://airtable.com/shr1HFbqpH0axgEb6/tbl689cjHdYYIM5ZA)).

How often should I pull from that data source? I've landed on the following schedules based on how often I actually upload new ephemera and how many records (200ish) already exist:

- Check for and tweet _new_ ephemera every twelve hours
- Choose one piece of ephemera at random to tweet every Thursday

These are easy to change thanks to packages like [node-schedule](https://www.npmjs.com/package/node-schedule).

So, I've already got the Airtable base, a [working web app](https://github.com/dnywh/ephemera) with the Airtable API, and a pretty good idea of how I want these Airtable records to be tweeted. Hooking up Twitter was the next challenge, although that was pretty easy thanks to the [twit](https://www.npmjs.com/package/twit) package, a bunch of [YouTube videos](https://www.youtube.com/watch?v=7-nX3YOC4OA), and their documentation. The real challenge was tweeting with images.

Ephemera scraps come in all shapes and sizes. Twitter however has a very rigid image container dimensions: 1024x512. That's 2:1. Wider than widescreen.

<figure>
  <img data-src="https://ik.imagekit.io/dw/notes/bringing-life-to-a-bot/ephemera-sizes.jpg" alt="Several scraps of ephemera">
   <figcaption>Ephemera varies between tall, short, rectangular, circular, irregular.</figcaption>
</figure>

I don't want one tweet's image to be huge because it happens to fit the 2:1 ratio well and another to be tiny because it doesn't. Here's what I mean:

<figure class="even-four">
  <img data-src="https://ik.imagekit.io/dw/notes/bringing-life-to-a-bot/ephemerabot-tweet-mockup-a.jpg" alt="A mock up of a tweet">
  <img data-src="https://ik.imagekit.io/dw/notes/bringing-life-to-a-bot/ephemerabot-tweet-mockup-b.jpg" alt="A mock up of a tweet">
  <img data-src="https://ik.imagekit.io/dw/notes/bringing-life-to-a-bot/ephemerabot-tweet-mockup-c.jpg" alt="A mock up of a tweet">
  <img data-src="https://ik.imagekit.io/dw/notes/bringing-life-to-a-bot/ephemerabot-tweet-mockup-d.jpg" alt="A mock up of a tweet">
  <figcaption>What tweets would look like if I didn't scale images.</figcaption>
</figure>

You get the gist. The images need to be scaled differently on the X and Y axes in order to appear proportional. This was the hardest part for me.

I settled on the [jimp](https://www.npmjs.com/package/jimp) package because it's (limited) documentation had a few different methods for scaling and cropping. It also had a built-in `.getBase64` method, which is the format Twitter wants images in.

I won't bore you with the details. It just took me a long time to get the raw image read, scaled, and then composited on a white background because I actively avoid JavaScript promises await, async and all that other call back madness. Funny how I'll spend twice as long trying to do something another way than the time it would take to actually learn the hard thing.

I experimented with annotating the image with text. I ultimately decided against it as it seems to visually pollute the ephemera scrap whilst repeating text that's right above the scrap in a more accessible format.

<figure>
  <img data-src="https://ik.imagekit.io/dw/notes/bringing-life-to-a-bot/ephemerabot-tweet-mockup-annotated.jpg" alt="A mock up of a tweet with text within the image">
  <figcaption>What tweets would look like with text within the image.</figcaption>
</figure>

Speaking of accessibility, I can't get alt-text to work. That's annotating images so people with low or no vision have a description read out to them. I've kept my [commented-out attempt](https://github.com/dnywh/ephemerabot/blob/9297ecad400a05610a6ba99fcf77aa5a5937d2af/server.js#L169) in case anyone is able to help.

## Next up

The alt-text struggle has me thinking: how many people are actually adding alt-text/descriptions to their photos on Twitter, Instagram, and elsewhere? I bet not many. [This bot](https://twitter.com/a11yimage?lang=en) (among others) already does what I was thinking as a future project.

What about a bot that replies to photos with unsolicited image descriptions? Ones that are hilariously bad, like if I tell the bot that every photo it receives (when it could be of humans, a chair, whatever) is of birds. My [recent machine learning experiments](tinkering-with-spade-face) and the release of new tools like [Lobe](http://lobe.ai) also have me thinking about making photos from text or drawings from images.

Then again, is this the time to goof off? I'm writing this as all three major TV networks cut their feeds away from the U.S. President making false claims about voter fraud. Last night, his supporters were chanting both "count the votes" and "stop the counting" in Arizona and Michigan respectively.

This election is tight, I think, not because of poor Democratic strategy but because of effective disinformation campaigns. I feel obligated to at least try designing for this if I'm going to goof off with it. My Twitter experiments won't make or break democracy but I should at least think about tools to bridge the gap between echo chambers and reality.

[^airtable]: Although let me know if you have a better idea
