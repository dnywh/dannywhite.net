---
layout: post
type: article
title: "Designing For Movement"
date: 2016-09-24 15:33:56 -0400
featured-image: ustwo-team-nypd.jpg
---

[Erin LeForce](http://twitter.com/ErinLeForce) and I co-wrote this article for publishing on the [ustwo blog](http://ustwo.com/blog/designing-for-movement). Since then, it's been picked up by the [Marvel blog](http://blog.marvelapp.com/designing-for-movement) (🎉!) and the principles have set a foundation for how we approach similar projects coming into our studio.

I'm going to use the co-publishing over here as an opportunity to give a shout-out to the full client-facing team:

{% include image.html name="ustwo-team-nypd.jpg" caption="Megan Wald, myself, Rimar Villaseñor, Coleman Dash, and Erin LeForce. Bunch of legends." %}

One last thing: I've also used the co-publishing here as an opportunity to prune to the good stuff. And leave out a lot of processes, testing, and results. See the original blog post for those things. Alright. Let's get to it...

---

ustwo has been working closely with organizations in [health](http://moodnotes.thriveport.com/), [wellbeing](http://pauseable.com/), [accessibility](http://wayfindr.net/), and now increasingly so in fitness. Working with a leading sports and fitness organization, we set out to improve the run experience. We focused on the varying degrees of interactivity for movement, and how we might transform relevant data into actionable insights. Our approach centered on simplification, automation, and contextualization of data.

{% include image.html name="erin-danny-framer.jpg" caption="Erin and I using Framer to prototype." %}

## The current situation

The majority of runners’ fitness apps are data-centric, with interpretation of this information largely up to the runner. This data-focused approach is often removed from an individual’s context for working out, making it difficult to interpret results and gather actionable insights.

{% include image.html name="fitness-apps-landscape.jpg" caption="A sample of general-fitness and running apps today." %}

Similar issues with interpretation and actions apply to dedicated wearables and fitness tracking devices. Raw data is often obscured or presented [unclearly](http://twitter.com/EdwardTufte/status/289208399621672960?); often with an emphasis on accountability and social sharing. These devices serve well for reflection and short-term motivation, but do little to help with analysis of performance techniques, safety and long-term motivation. In addition, glass screens requiring precise inputs and conscious interactions often fail when combined with a moving body and unfocused attention.

> “I usually put the phone in the pocket of my shorts, so it does get pretty steamy, any touch function is really, really difficult.”
>
> > —Pedro, Distance runner

> “Just another thing to carry/charge… so they now live in a box near my bed!”
>
> > —Andrea, Leisure runner

Worth noting is the rise of [naked running](http://www.youtube.com/watch?v=TQmXMM1f8mM) (running device-free—not actually nude) to combat the growing trend of runners suiting-up with multiple devices before a run. A runner’s dependency on a device can interrupt the body’s ability for self-regulation and conditioning. A digital presence in the fitness realm needs to be complementary to the runners ‘inner coach’.

> “You don’t see a coyote or fox looking at their GPS to check their progress on prey.”
>
> > —Lynn Jennings, Olympic distance runner ([source](http://online.wsj.com/articles/how-to-run-nakedand-love-it-1401323053))

## Our principles

Over the course of the client project, we defined three major principles for designing for in-motion activities:

1. Simplification and Removal of Interfaces
2. In-run Feedback Based on Environmental and Behavioral Factors
3. Contextualizing Data into Actionable Insights/Feedback

Let's dive into each.

### Simplification and Removal of Interfaces

We often heard from runners that touch-screen interfaces are frustrating, and that glancing at screens is not habitual when in-run.

If screen-based interfaces are the today’s medium for data collection and feedback, how can we make interacting with them less frustrating and mentally-taxing? We made a series of prototypes using [Framer](http://framer.com), that allowed to ideate in the wild. We found that a focus on core workout controls (start, pause, resume, stop) work best.

{% include iframe-video.html link="https://player.vimeo.com/video/151453518" %}

Early trials brought unforeseen challenges such as variety in how people carry their device and also helped clarify what assumptions we had left to validate; such as how haptic (vibration) may support interactions.

### In-run Feedback Based on Environmental and Behavioral Factors

What environmental triggers could we leverage to provide a user with actionable (and useful) feedback in-run? How could this feedback enhance a run? We experimented with audio and haptic feedback across a variety of in-run events and updates.

{% include iframe-video.html link="https://player.vimeo.com/video/151435603" %}

We also explored how data both collected from past runs and the environment could predict scenarios in which a runner would feel fatigue, need to change course, or adjust form. Pulling weather forecasts, traffic updates, and satellite images of the running paths alone would provide runners with insights as to when and where to workout, how to avoid injury, and even provide a user with tips on how to power up a tough hill.

{% include image.html name="east-river-park-running-track.jpg" caption="Taking this baby on the running track." %}

### Contextualizing Data into Actionable Insights/Feedback

Data that becomes contextualized often becomes an actionable insight by extension. Yet insights only truly become useful to a person when they are timely. At what points of a run is insight useful? What particular insights are useful? Here's where we mapped key moments in a runner's journey to insights that could become in-run feedback:

{% include image.html name="coach-characteristics.jpg" caption-start-link="http://josephsmithdesign.com" caption-start-link-text="Joe Smith" caption=" was also involved at this point of the project, and helped create this mapping and the one below."%}

We began to see that elements of useful feedback as going beyond just timing. Could insights become more useful when executed through different coaching personalities? Where should these differing coaching personalities appear or not appear? Here's what we ended up with:

{% include image.html name="coach-types.jpg" %}

Again, see the original write-up on the [ustwo blog](http://ustwo.com/blog/designing-for-movement) for how these assumptions were tested and the results from this testing.

## Future technology

Much of our thinking is centered on what technologies are afforded to us today. Knowing that devices are only going to get smarter and their components more miniaturized, what are the inherent elements that make up a run or workout, that are unlikely to change at all? Unlike a wearable device, a runner will almost always be wearing some form of active wear. What if the thread that makes up their shorts became an input? Could a runner gesture-down to pause their run while they get a drink of water, and later resume their run with a double tap?

## Extending to other domains

We are beginning to find that the methodologies, patterns, and applications we are experimenting with go well beyond the fitness industry. Interacting with digital products while exercising is essentially interacting while impaired. Acknowledging this may allow us to extend these technologies and insights to other domains.

Our exploration surfaced issues with accessibility; visual distraction or unavailability. How might a person with arthritis better communicate with their loved ones through coarse gestures? [How might a blind person navigate through a metropolitan transportation system](http://www.wayfindr.net/)? The opportunities to simplify and optimize products for impaired users begins to address an important shift—devices playing the supporting or hidden role rather than sitting at center stage.
