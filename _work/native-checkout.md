---
featured: true
title: Kickstarter Native Checkout
description: Reimagining the project pledge experience from error-prone and fragmented to robust and fully native.
featured_image: log-in-modal.jpg
date: 2019-09-01 09:00:00 -0400
roles:
  - UX research
  - Product design
collaborators:
  - Christella Dolmo
  - Isabel Barrera
  - Izzy Oji
  - Justin Swart
  - Nino Collaço
  - Nneka Bolden
  - Pavel Dusatko
  - Jamie Roth
locations:
  - New York, NY
  - Vancouver, Canada
client: Kickstarter
links:
  - title: Kickstarter for iOS and Android
    url: https://www.kickstarter.com/mobile
  - title: Kickstarter on the App Store
    url: https://www.kickstarter.com/download/ios
  - title: Kickstarter on Google Play
    url: https://www.kickstarter.com/download/android
  - title: Kickstarter for iOS on GitHub
    url: https://github.com/kickstarter/ios-oss
  - title: Kickstarter for Android on GitHub
    url: https://github.com/kickstarter/android-oss

tags:
  - prototyping
  - origami
---

## Issues and opportunities
About 40% of project pledges on Kickstarter occur on mobile.

This project began by necessity. Much of the project pledge experience on our iOS and Android apps had become brittle yet difficult to iterate upon. A technical rewrite would perhaps resolve these issues but continue to perpetuate product-wide inconsistencies and inefficiencies across features and teams.

We turned a difficult situation into three distinct opportunities:

1. Replace brittle web views with truly native components.
2. Fix long-standing usability issues within the pledge flow.
3. Set up the project and pledge interfaces for incoming product-wide changes and cross-team collaboration.

We hypothesised that addressing the usability issues whilst going fully-native would achieve the third opportunity for us.

### Opportunity 1: Replace brittle web views with truly native components
Much of the pledge experience on the Kickstarter Android and iOS apps were built using their respective platform's web view capabilities. Content displayed in a web view throughout checkout would be outdated and often break, causing the process to fail entirely for would-be project backers.

Tracking these breakages, identifying the bugs, and then deciding who would be accountable for fixing them would often prolong the broken experience for several days. That is, **Kickstarter would lose potential income from 40% of its source and creators may fail to fund their projects**.

### Opportunity 2: Fix long-standing usability issues within the pledge flow
Usability testing sessions over the previous twelve months had confirmed our suspicions that the project and pledging interfaces were at a breaking point.

#### Projects were overwhelming and imbalanced
Reward density (both the amount of rewards and content within them) forced every other detail about the project to be presented in short or not at all. Backers simply could not find the navigational elements to see crucial project information such as the campaign description, FAQ, project updates, or creator bio.

#### Inputting payment information was difficult
The native and web views in the checkout flow contained a multitude of inconsistent interface elements. Web view interface elements such as text inputs would often be a poor user experience simply because they hadn't been implemented with direct manipulation (touch input) in mind. These issues caused additional frustration for backers doing more complex tasks such as managing payment methods or changing a chosen reward.

### Opportunity 3: Set up the project and pledge interfaces for incoming product-wide changes and cross-team collaboration
Kickstarter had recently switched from teams based on features or platforms to teams based on common Kickstarter verticals or experiences. Our native applications team would be a uniquely dispositioned to support the rest of the organisation's feature and product improvements whilst providing expertise for in our own domain.

## Roles and collaborators
I led product design and supported product strategy. Nneka Bolden was responsible for product strategy and project management. Isabel Barrera led technical investigation and infrastructural choices. Jamie Roth joined later to support the team with managing the project, rollout strategy, and shaping its releases.

## Coming to the solution
Conducting a technological audit of the pledge flow across iOS and Android revealed several inconsistencies beyond just platform convention. These revelations informed how large our scope _could_ be.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/android-pledge-flow-audit.jpg" alt="A digital diagram of many mobile screens">
  <figcaption>A snapshot of the Android audit. Orange labels indicate web views; the vast majority of views in the flow.</figcaption>
</figure>

Our pledge flow audit was then mapped against the [aforementioned usability issues](#opportunity-2-fix-long-standing-usability-issues-within-the-pledge-flow). This revealed how closely our usability issues overlapped with how the respective interface was built; natively or as a web view. We could then prioritise product *and* technical updates intelligently against technical rewrites.

The [aforementioned density and imbalance issues](#projects-were-overwhelming-and-imbalanced) informed our secondary focus on improving the experience of entering and exiting a project's rewards. Known interface confusion throughout the flow (combined with the mapping results) informed our primary focus on improving the reward comparison and pledging (payment) experiences.

### Improving the reward comparison and pledging experiences
I employed a technique called 'breadboarding' to rapidly explore possible design solutions for allowing reward comparison and progression to pledging. Breadboarding placed focus on the intent and expected outcome—reducing the lure of retrofitting intent onto a predefined architecture.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/make-pledge-breadboarding.jpg" alt="A hand-drawn sketch">
  <figcaption>A small piece of the larger 'make pledge' breadboarding. This technique then fostered interface ideation more appropriate to the needs of soon-to-be backers.</figcaption>
</figure>

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/pledge-review-wireframes.jpg" alt="Two hand-drawn sketches">
  <figcaption>Backing a Kickstarter project with a physical reward is a logistically complicated process, made more complicated by the fact that the transaction is not is not guaranteed unless the project successfully meets its goal. Breadboarding helped surface all of the possible intricacies whilst pledging.</figcaption>
</figure>

Breadboarding was especially useful for highlighting gaps in the many routes within the 'manage pledge' sphere. These routes include updating a payment method, deleting a pledge, fixing a erred payment method, and changing the reward type or amount pledged.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/manage-pledge-breadboarding.jpg" alt="A hand-drawn sketch">
  <figcaption>Some of the ambiguities exposed by breadboarding the 'manage pledge' flow. These ambiguities informed our early technical investigation of required engineering effort.</figcaption>
</figure>

Beginning from intent allowed us to consider the inclusion of likely product-wide upcoming features such as reward imagery, selecting multiple rewards, and sorting rewards. This process also encouraged collaboration with teams such as Rewards and Fulfilment, who would later own all checkout surfaces in the near future.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/select-multiple.jpg" alt="A hand-drawn sketch">
  <figcaption>Knowing that the selection of multiple rewards is a likely upcoming feature helped inform a foundation that can later incorporate it with little friction</figcaption>
</figure>

First-hand experience, backed by internal statistics, let us know that creators structure rewards in varied ways. Creators however tend to be consistent _within_ a project; their rewards often share a format for title, itemisation, and description. We believed that aligning these attributes as axes in visual space could improve the backer's reward comparison process.


### Improving the experience of entering and exiting a project's rewards
The average amount of rewards per project is twelve. That's twelve text-heavy (with no imagery or formatting) options for backers to sift through just to support the creator's intent.

Additionally, rewards are usually intertwined with the project's subject matter and therefore the accompanying description, video, and images. We heard from multiple backers that they manage multiple browser windows in order to visually compare rewards again other project information.

We therefore dedicated a significant portion of the initial design phase to ideate and prototype ways we could balance all elements of a project, intuitively present rewards, and then present a multitude of rewards with clarity.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/reward-entry.jpg" alt="Two hand-drawn sketches">
  <figcaption>Some of the many reward entry ideas later tested with backers as prototypes.</figcaption>
</figure>

Our final, rolled-out solution for reward entry had over a dozen predecessors; ideas and prototypes that were improved after testing. Placing these ideas in the hands of backers was imperative in the design process. 


### Finding flaws
As part a small team, I was also responsible for administrating and conducting usability testing. I began to pool qualifying backers either internally or through the Respondent platform as viable design solutions began to take shape.

Engineers become more heavily involved as testing began. They worked with myself and product management to identify the riskiest proposals, provide feedback, and estimate engineering effort.

Initial tests were done with click-through prototypes; enough to find where we needed to improve how the flow translated to user experience. Later tests increasingly focused on reward entry, reward entry, and completing a pledge. These would increase in fidelity as the issues reported by respondents did too.

<figure class="even-two">
  <video muted playsinline controls>
    <source src="https://ik.imagekit.io/dw/video/stage-three-full-flow-testing.mp4" type="video/mp4">
  </video>
  <video muted playsinline controls>
    <source src="https://ik.imagekit.io/dw/video/stage-six-android-variations-and-control.mp4" type="video/mp4">
  </video>
  <figcaption>First: a mid-fidelity prototype that also began to validate future features such as reward sorting and multiple selection. Second: a series of reward entry and reward comparison options (including a control variant) for later, higher-fidelity testing.</figcaption>
</figure>


<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/reward-selection-improvements.jpg" alt="Two hand-drawn sketches">
  <figcaption>Improving interface and micro-interaction details as usability testers began to have less issues with the flow and began to focus more on reward comparison specifics.</figcaption>
</figure>

Reward comparison architecture became contentious as fidelity increased. Usability tests showed mixed results between horizontally-scrolling rewards and vertically-scrolling rewards (with clarified interface elements). Thankfully, earlier engineering investigation had shown that making later changes in architecture—even split testing—would only require a small amount of work. We could move forward now with confidence and, if necessary, iterate from real-world results later.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/full-experience-flow.jpg" alt="A digital diagram of the pledge flow">
  <figcaption>A high-level rendering of the pledge flow once we had enough confidence to begin implementing changes. This was shown at a company-wide All Hands.</figcaption>
</figure>

The [aforementioned breadboarding exercises](#improving-the-reward-comparison-and-pledging-experiences) provided approximate scope for major backer behaviours. We were now ready to build the iOS and Android interface changes based on what had been validated through testing.

I created an 'experience map'—a blend of a service blueprint and decisions tree—to cover the complex landscape of _all_ backer behaviours. The experience map acted as a checklist for engineering and design as we resolved outstanding interface questions and built out each component.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/experience-map-section.jpg" alt="A digital diagram">
  <figcaption>A screenshot of one small part of the experience map. We used the experience map to ensure we hadn't missed any parts of the backer process.</figcaption>
</figure>

Lastly, I created a design package that contained detailed information about, and links to, tested interface patterns and micro-interactions. This package worked in tandem with the experience map to spread my design direction amongst eight engineers.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/design-package-stepper.jpg" alt="Documentation and a digital prototype">
  <figcaption>Although I was in constant collaboration with engineers, a documented description of design intent through the design package helped prepend general questions; instead directing attention to unforeseen complexities, such as in this 'Stepper' case.</figcaption>
</figure>

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/design-package-project-states.jpg" alt="Documentation and a digital prototype">
  <figcaption>The design package also simplified abstract states into visually identifiable ones.</figcaption>
</figure>

## How we fared against the original issues and opportunities
Our two-pronged approach freed Kickstarter's native applications from impenetrable checkout failures whilst also delivering future-ready user experience updates. We achieved these results in a similar amount of engineering time as simply rewriting the web views as native ones.

Backing a Kickstarter project is now completely native on both iOS and Android. This means every view is testable by the Native team; bugs are much easier to spot and diagnose. Future iOS and Android-specific product requests and changes no longer require the availability of both web and native engineers.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/cancel-pledge.jpg" alt="Photo of several phones with various parts of the Kickstarter checkout process displayed on their screens">
  <figcaption>Low-use yet imperative web view features such as pledge cancellation were previously difficult to complete as a user or often broken for our engineers.</figcaption>
</figure>

The experience of backing a Kickstarter project is now more intuitive and supportive of common actions such as cross-referencing the campaign description against rewards. Our codification of variable reward formats places the focus on supporting the creator's work whilst also preparing for upcoming product-wide changes.


## Challenges faced
### Endpoints
Native applications were the first external client to the historically web-first Kickstarter API. Although necessary endpoints had been agreed upon, personnel and priority changes severely delayed their releases. This meant our team was often blocked from communicating with Kickstarter's database and therefore blocked from building core checkout features.

We resolved the delays caused by missing endpoints by splitting our changes in two major releases. The first release was focused on reward entry and presentation, which had already been built natively and therefore had endpoints available. The second release, focused on pledge confirmation and management, would be released later. An interim, temporary, release smoothed resulting interface discrepancies at low engineering and design cost.

### Resulting design descoping
Moving rewards into a dedicated section gave other project information room to shine. Although I already begun to address project-level imbalance, we decided to descope the work for a later date.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/wells-lifts-wireframes.jpg" alt="Two hand-drawn sketches">
  <figcaption>I had begun considering key project elements as either 'wells' or 'lifts'; two types of interface component that would react differently depending on their information density and typical use.</figcaption>
</figure>

Affordances to help parse projects with large amounts of rewards were also removed from initial releases and slated for later. Some of them, such as the ability to change reward presentation, were ultimately not pursued.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/reward-view-switching.jpg" alt="Two hand-drawn sketches">
  <figcaption>Early wireframes for allowing backers to switch the presentation of rewards to their liking. Testing suggested this added only a slight improvement to user experience, and thus made the feature a strong candidate for descoping.</figcaption>
</figure>

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/log-in-modal.jpg" alt="Photo of several phones with various parts of the Kickstarter checkout process displayed on their screens">
  <figcaption>Reusing existing components, with a low-cost visual refresh, where possible. This log in view is the same as several other locations in the app—presented modally in this case.</figcaption>
</figure>

## Effects on users and business
API endpoint challenges pushed the final releases to beyond my departure at Kickstarter so I do not have quantitative evidence of how the releases faired. High-confidence results are available however from earlier data analysis and testing projections. They include:

- Potential income loss reduced drastically given checkout breakages must be platform-wide to affect iOS and Android
- Reduced engineering costs due to less ambiguous breakages
- Likely increase in pledge volume due to lower-friction checkout process
- Likely increase in average pledge amount due to new bump-up mechanism
- More effective cross-team collaboration now that the iOS and Android infrastructure is fully-operable by native engineers
- Advancement in public Kickstarter API release due to iOS and Android apps prepending core endpoints

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/edit-pledge-amount.jpg" alt="Photo of several phones with various parts of the Kickstarter checkout process displayed on their screens">
  <figcaption>Improvements to the pledge amount input and addition of the 'bump up' mechanism have the potential to help creators fund projects sooner and more often.</figcaption>
</figure>

## What was learned
The transition from web views to native views inherently constrained us to relying on new API endpoints. This project taught our team to identify this risk earlier; draw lines around what could be first released without dependencies, then design and build from a fully-working baseline.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/native-checkout/thank-you.jpg" alt="Photo of several phones with various parts of the Kickstarter checkout process displayed on their screens">
  <figcaption>An example of changing after learning: we simplified our ambitions for updating the Thank You stage—which was already built natively—by simply updating the interface design to more seamlessly integrate with the newly-native checkout process.</figcaption>
</figure>