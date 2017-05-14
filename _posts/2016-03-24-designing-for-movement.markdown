---
layout: post
title:  "Designing For Movement"
date:   2016-03-24 15:33:56 -0400
feature-image: 2016-03-24-designing-for-movement/studio-wearables.jpg
---

*I co-wrote this article with [Erin LeForce](https://twitter.com/ErinLeForce) back in early 2016. Originally published on the [ustwo blog](https://ustwo.com/blog/designing-for-movement). I've made some amendments whilst porting over to here.*

*Shout-out to the full client-facing team for who-can-not-be-named:*

-Photo of our team in NYPD-

ustwo has been working closely with organizations in [health](http://moodnotes.thriveport.com/), [wellbeing](http://pauseable.com/), [accessibility](http://wayfindr.net/), and now increasingly so in fitness. One of the major challenges the fitness domain brings with it is designing for movement. Our research shows us that runners are frustrated with the amount of interactions required to gain in-run insights on progress towards their goals.

Working with a leading sports and fitness organization, we set out to improve the run experience. We focused on the varying degrees of interactivity for movement, and how we might transform relevant data into actionable insights. Our approach centered on simplification, automation, and contextualization of data.

## Today's fitness offerings
To get ourselves in the right frame of mind, we hit the pavement---joining group runs and taking a myriad of devices with us. This allowed us to better relate to the runners we would later interview, survey, and test our prototypes on. We found that most runners we talked to like having a device (or at least the *idea* of one) with them while on a run. The devices they actually carried however were described to us as cumbersome, the content overwhelming, and the dependency upon them as worrisome.

![Landscape][device-landscape]

To get a better sense of why that is, we dove into the landscape of today’s fitness apps and devices. The majority of runners’ fitness apps are data-centric, with interpretation of this information largely up to the runner. This data-focused approach is often removed from an individual’s context for working out, making it difficult to interpret results and gather actionable insights.

![Wearables in the studio][studio-wearables]

Similar issues with interpretation and actions apply to dedicated wearables and fitness tracking devices. Raw data is often obscured or presented [unclearly](https://twitter.com/EdwardTufte/status/289208399621672960?); often with an emphasis on accountability and social sharing. Just over 25% of respondents to one of our surveys felt positively about the device they brought on their workout. These devices serve well for reflection and short-term motivation, but do little to help with analysis of performance techniques, safety and long-term motivation. In addition, glass screens requiring precise inputs and conscious interactions often fail when combined with a moving body and unfocused attention.

> “I usually put the phone in the pocket of my shorts, so it does get pretty steamy, any touch function is really, really difficult.”
> > ---Pedro, Distance runner

> “Just another thing to carry/charge… so they now live in a box near my bed!”
> > ---Andrea, Leisure runner

Worth noting is the rise of [naked running](https://www.youtube.com/watch?v=TQmXMM1f8mM) (running device-free---not actually nude) to combat the growing trend of runners suiting-up with multiple devices before a run. A runner’s dependency on a device can interrupt the body’s ability for self-regulation and conditioning. A digital presence in the fitness realm needs to be complementary to the runners ‘inner coach’.

> “You don’t see a coyote or fox looking at their GPS to check their progress on prey.”
> > ---Lynn Jennings, Olympic distance runner ([source](http://online.wsj.com/articles/how-to-run-nakedand-love-it-1401323053))

## Transforming fitness products
After collecting our research and survey results, we began to prioritize how we can be more considered when designing for a person in motion. Three major areas took priority:

1. Simplification and Removal of Interfaces
2. In-run Feedback Based on Environmental and Behavioral Factors
3. Contextualizing Data into Actionable Insights/Feedback

![Taking this baby on the road (track)][running-track]

## Simplification of interfaces
We often heard from runners that touch-screen interfaces are frustrating, and that glancing at screens are not habitual in-run. We’ll discuss sensor-led automation and an invisible interface later on in this piece, but for now we’d like to focus on simplification of a screen-based interface.

If screen-based interfaces are the today’s medium for data collection and feedback, how can we make interacting with them less frustrating and mentally-taxing? We made a series of prototypes using [Framer](http://framer.com), that allowed to ideate out in the wild. We kept the focus on simple workout controls: start, pause, resume, stop. Early trials brought unforeseen challenges such as variety in how people carry their device and also helped clarify what assumptions we have left to validate; such as how would haptic (vibration) feedback support (or own) interactions.

<div class="intrinsic-container">
  <iframe src="https://player.vimeo.com/video/151453518" frameborder="0" allowfullscreen=""></iframe>
</div>

## Environmental and behavioral factors
We extended this thinking towards behavioral and environmental factors. What environmental triggers could we leverage to provide a user with actionable (and useful) feedback in-run? How could this feedback enhance a run? We experimented with audio and haptic feedback across a variety of in-run events and updates.

In addition to audio and haptics, we explored how data both collected from past runs and the environment could predict scenarios in which a runner would feel fatigue, need to change course, or adjust form. Pulling weather forecasts, traffic updates, and satellite images of the running paths alone would provide runners with insights as to when and where to workout, how to avoid injury, and even provide a user with tips on how to power up a tough hill.

## Data to insight
Data that becomes contextualized often becomes humanized and actionable insight by extension. Yet insights only truly become useful to a person when they are timely. At what points of a run is insight useful? What particular insights are useful? To explore, we chose key moments in a runner’s journey and mapped those to insights that could become in-run feedback.

![][coach-characteristics]

We began to see that elements of useful feedback as going beyond just timing. Could insights become more useful when executed through different coaching personalities? Sharing our individual experiences of being coached allowed us to create basic personas, and a starting point of where and when these personas might be most effective in a typical workout.

![][coach-types]

To test our assumptions so far, we focused around three types of runners: competitive and/or experienced runners, new runners, and leisure runners. Analyzing how they responded to various feedback types throughout an exercise, we highlighted moments where feedback interruptions either supported or hindered their progress.

We found that pacing-out feedback (pulling back as the runner gets further along in their workout), as well as knowing when to shut feedback off entirely, was dependent on specific workout type, and the context of the runner’s skill-level and goals. In a leisure run for instance, we trust that runners may typically only need external coach feedback post-run, if at all.

Our research, testing, and findings validated these three broad in-run feedback types:

- **Competitive Experienced Runner** In run interaction/ interruption for critical feedback only.
- **New Runner** Frequent interaction in-run, until stride met.
- **Leisure Runner** Post-run feedback only.

## Future technology
Much of our thinking is centered on what technologies are afforded to us today. Knowing that devices are only going to get smarter and their components more miniaturized, what are the inherent elements that make up a run or workout, that are unlikely to change at all? Unlike a wearable device, a runner will almost always be wearing some form of active wear. What if the thread that makes up their shorts became an input? Could a runner gesture-down to pause their run while they get a drink of water, and later resume their run with a double tap?

![][technology]

Explorations such as [Project Jacquard](https://www.google.com/atap/project-jacquard/) and [Project Soli](https://www.google.com/atap/project-soli/) from Google’s ATAP lab explore user input through conductive thread and Radar technologies, respectively. Interaction with both coarse and extremely fine gestures—with either your body or what you already have on, are only becoming more attainable. We will soon be able to realistically apply smarter, in-motion solutions that fit into the core elements of a workout seamlessly. These solutions may also fit other forms of passive engagement, too.

## Extending to other domains
We are beginning to find that the methodologies, patterns, and applications we are experimenting with go well beyond the fitness industry. Interacting with digital products while exercising is essentially interacting while impaired. Acknowledging this may allow us to extend these technologies and insights to other domains.

Our exploration surfaced issues with accessibility; visual distraction or unavailability. How might a person with arthritis better communicate with their loved ones through coarse gestures? [How might a blind person navigate through a metropolitan transportation system](http://www.wayfindr.net/)? The opportunities to simplify and optimize products for impaired users begins to address an important shift---**devices playing the supporting or hidden role rather than sitting at center stage**.

[device-landscape]: /assets/posts/2016-03-24-designing-for-movement/landscape.jpg
[studio-wearables]: /assets/posts/2016-03-24-designing-for-movement/studio-wearables.jpg

[running-track]: /assets/posts/2016-03-24-designing-for-movement/running-track.jpg

[coach-characteristics]: /assets/posts/2016-03-24-designing-for-movement/coach-characteristics.jpg
[coach-types]: /assets/posts/2016-03-24-designing-for-movement/coach-types.jpg

[technology]: /assets/posts/2016-03-24-designing-for-movement/technology.jpg

[gestures]: /assets/posts/2016-03-24-designing-for-movement/gestures.mp4
