---
layout: work
featured: true
title: Kickstarter Environmental Resources Center
byline: Helping indepedent creators evaluate and reduce the environmental impact of their products.
date: 2018-11-29 09:00:00 -0400
featured_image: transparent-speaker.jpg
roles:
  - Product design
  - Strategy
  - Engineering (React)
collaborators:
  - Alexandra Criscuolo
  - Rob Lum
  - Heather Corcoran
  - Jon Leland
  - Maura Lynch
locations:
  - New York, NY
client: Kickstarter
organisations:
  - Kickstarter
  - Environmental Defence Fund
press:
  - outlet: Core77
    title: Kickstarter and EDF Team Up to Push for Greener Product Development
    url: https://www.core77.com/posts/81342/Kickstarter-and-EDF-Team-Up-to-Push-for-Greener-Product-Development
  - outlet: Deezeen
    title: Kickstarter unveils resource centre to nudge users towards launching sustainable products
    url: https://www.dezeen.com/2018/11/30/kickstarter-resource-centre-sustainable/
  - outlet: PSFK
    title: Kickstarter Resource Center Helps Companies Implement Sustainable Practices
    url: https://www.psfk.com/2018/12/kickstarter-environmental-resource-center.html
  - outlet: Engaget
    title: Kickstarter wants creators to be more environmentally friendly
    url: https://www.engadget.com/2018/11/27/kickstarter-enivronmental-commitments/
  - outlet: Kickstarter Blog
    title: New Features on Kickstarter Encourage Creators to Think Green
    url: https://medium.com/the-fourth-wave/new-features-on-kickstarter-encourage-creators-to-think-green-b17a05f41bab
  - outlet: Environmental Defence Fund
    title: Kickstarter and EDF Team Up to Push for Greener Product Development
    url: https://www.edf.org/media/kickstarter-and-edf-team-push-greener-product-development
---

<!-- https://www.figma.com/file/DlAeA2ExdFfj5Oo0JQSvgdgB/Environmental-Resource-Center?node-id=73%3A0 -->

## Issue

Design & technology projects on Kickstarter have the largest environmental footprint on the platform. We hypothesised that providing creators with tools to assess, mitigate, and communicate the environmental commitments for their planned projects would incentivise them to consider environmentally conscious production choices, thus reducing the category's environmental footprint.



## Roles, collaborators, and scope

I was the sole designer on a working group comprised of myself, product strategist Jon Leland, design & technology outreach specialist Heather Corcoran, and Environmental Defence Fund fellow Alexandra Criscuolo. As a working group and _not_ a fully resourced team, we limited the scope of the project to three months, part time.

My responsibilities included the design direction for project creation changes, project presentation changes, and any resulting resources or guidelines. I also led engineering on what ultimately became the <a href="http://kickstarter.com/environment" target="_blank">Environmental Resources Center</a>, with help from software engineers Rob Lum and Pritika Nilaratna.



## Shaping the proposed solution

Members of our team (namely Alexandra and Heather) interviewed creators and Kickstarter outreach members who deal with design & technology creators. Alexandra then created a gap analysis to determine what information these creators find underserved. Collectively, using this information, we decided that the most appropriate solution would be a five-part framework in the form of an online resource centre.

Past interviews with Kickstarter creators (done often since I joined Kickstarter and then established as a recurring, open process) had shown us that prompts in the project creation process were often necessary for discoverability of onsite educational material. This fact did not change even when some educational material was deemed more useful than others.



## Building the solution

Over a series of drafts, Alexandra collated the information design & technology creators found underserved into the five-point framework. I took this information and prototyped multiple presentation types and entry points for creators.

<figure>
  <img data-src="{% link /assets/work/environmental-resources-center/desktop-header-section.jpg %}" alt="TODO">
  <figcaption>One example of a presentation type and resulting desktop-sized mockup. We had a good idea of the information density at this point, so most of my focus was on parsability. That included interlinking, theming, and staging of various pieces of content.</figcaption>
</figure>



## Challenges faced

We experimented with embedding educational resources dynamically in the project creation experience, depending on how the creator defined their project. We found however that the vast majority of creators compose their project almost fully off-platform before entering the Kickstarter project creation experience.

Additionally, our creator-facing environmental commitment prompts receiving less usage than anticipated. This was partially due to the nature of when creators engage with the Kickstarter project creation experience, but mostly because the prompts lacked specificity.


<figure>
  <img data-src="{% link /assets/work/environmental-resources-center/environmental-commitments-prompts.jpg %}" alt="TODO">
  <figcaption>We had originally kept the commitment area open to encourage thoughtful, original response. The lack of specificity, combined with an unclear entry into the resources center, meant creators didn't know where to start.</figcaption>
</figure>

Another challenge was presenting the necessarily vast amount of information in a digestible format. Early attempts at isolating segments (such as sustainable materials, reusability & recyclability) actually increased anxiety in the creators we showed this to.



## Changes made

We reverted the nested structure of the educational resources into one Environmental Resources Center that could be more easily scanned. Each section and subsection received a unique ID for direct hyperlinking from other sections and future improvements to the Kickstarter project creation experience.

I also redesigned the creator-facing environmental commitment prompts to provide more guidance on how approach the five parts of our framework. Creators could now opt-in to environmental commitments via a checkbox, and gain more information about each commitment through the addition of direct-to-section hyperlinking.

<figure>
  <video muted loop playsinline controls>
  <source src="{% link /assets/work/environmental-resources-center/environmental-commitments-changes.mp4 %}" type="video/mp4">    
  </video>
  <figcaption>A comparison video of the original implementation of creator-facing environmental commitments and my CodePen prototype for the updated version. Note the direct-to-section hyperlinking for each checkbox, and the 'unlocking' of freeform text-fields for those that would like to expand.</figcaption>
</figure>

Both of these changes were impacted by the nature of how late Kickstarter's project creation experience overlapped with that of the creator. We recognised that future iterations must be done in collaboration with the Creator Development team, who oversee creator education and project development.

## Effects on users and business

Desired page view metrics for the first three months after launching the Environmental Resources Center were achieved within two weeks. Kickstarter design & technology outreach specialists noted an increase in projects that provided information on the environmental commitments for their production and fulfilment.

## Was was learned

Design & technology creators on Kickstarter are preoccupied by the subjects of their projects. If they are not already pursuing sustainable practices, creators must be presented with the relevant information early in their creative process.

Being publicly available, the Environmental Resources Center is a step in the right direction. The clear next step is to assist creators earlier whilst also lessening the burden of the Kickstarter project creation experience.
