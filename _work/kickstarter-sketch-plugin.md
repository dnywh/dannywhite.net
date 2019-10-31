---
# featured: true
title: Kickstarter Sketch Plugin
description: Increasing the fidelity at which the Kickstarter design team ideates, prototypes, and creates.
featured_image: kickstarter-data-angled.jpg
date: 2019-06-26 09:00:00 -0400
roles:
  - Strategy
  - Sketch plugin development (JavaScript)
  - Product design
collaborators:
  - Walter Beller-Morales
locations:
  - New York, NY
client: Kickstarter
links:
  - title: Kickstarter Sketch Plugin on GitHub
    url: https://github.com/kickstarter/sketch-plugin
  - title: Direct download
    url: https://github.com/kickstarter/sketch-plugin/releases/latest/download/kickstarter.sketchplugin.zip
---

## Issue
I noticed a peculiar behaviour from myself and from colleagues: we would subconsciously scour Kickstarter for the nicest possible project to insert into feature mockups.

Time-cost aside, **we were creating interfaces based on data _not_ representative of the general dataset**. Interface design proposals would be brittle—breaking as soon as a long string or busy project image were passed in. **We needed more honest interface design, and a quicker pace**. Truly random project data would help us get there.

## Opportunity
Sketch launched its [Data](https://www.sketch.com/docs/data/){:target="_blank"} user feature and [Data Supplier](https://developer.sketch.com/reference/api/#data-supplier){:target="_blank"} developer documentation at a similar time that we began to make the Kickstarter API accessible internally through GraphiQL. The Data feature essentially opened the door to accessible plugin development. GraphiQL let us explore the Kickstarter schema and potentially glue the two together.

In addition to supporting the Kickstarter design team, The Sketch plugin would be a perfect lead generation for others who want to build from the API.

### Validating the idea
Although more accessible than before, developing a data-informed Sketch plugin remains a large investment—especially for a non-engineer such as myself. The cost-to-build was simply unjustifiable given the hypothesis (of honest data improving interface design) had not been properly validated.  

Luckily, Sketch provided simplified ways to insert small subsets of data. This would allow us to more cheaply integrate and test data. I manually scraped and downloaded random project images and titles and then placed them in a Google Drive folder to be shared with teammates.

<figure>
  <img data-src="https://ik.imagekit.io/dw/work/kickstarter-sketch-plugin/manual-data.png" alt="A macOS Finder window screenshot">
  <figcaption>Some of the manually-pulled data that informed our first test. When we needed to populate an image or string, we'd grab something from Sketch's Data feature, which referenced this folder.</figcaption>
</figure>

## Coming to the solution
Our team quickly outgrew the simplified data sets; we had used them to their limits—truely validating the need for the larger range that comes with an API call. It was time to build a Sketch plugin that spoke to the Kickstarter API.

### Collaboration
Walter Beller-Morales, engineer at Kickstarter, graciously volunteered his skills and time to the task. As a non-team project, we met for an hour once ever few weeks to build what would become the eventual Kickstarter Sketch plugin.

Our first task was to successfully receive data from the Kickstarter API. We then converted this data into objects that Sketch could understand and place as layers. Lastly, we connected data such as _Project name_ to related data such as _Project URL_ so designers could scrape more data if necessary.

<hr>

## How it works
The following queries are available to insert as Sketch layers:

| Query | Type |
| --- | --- |
| Project name | text |
| Project description | text |
| Reward name | text |
| Reward description | text |
| Creator name | text |
| Project image | image |
| Creator image | image |

These queries manifest in Sketch via the [Data](https://www.sketch.com/docs/data/){:target="_blank"} feature. Any shape or text layer can be populated with data—just select some and choose your data. They'll populate.

<figure>
  <video muted loop playsinline controls>
  <source src="https://ik.imagekit.io/dw/video/place-data.mp4" type="video/mp4">
  </video>
  <figcaption>Data can be refreshed indefinitely, and in bulk. Select any layers that have had data inserted, and then click <em>Data > Refresh Data</em> or &#x21E7;&#x2318;D.</figcaption>
</figure>

### Finding _that_ project
Want to know the project from which you just inserted text or imagery? You can open the project in your browser by clicking _Plugins > Kickstarter > View Project on Kickstarter_. 

<figure>
  <video muted loop playsinline controls>
  <source src="https://ik.imagekit.io/dw/video/view-project-on-kickstarter.mp4" type="video/mp4">
  </video>
  <figcaption>This works for any data that can be traced back to a project; project image, name, description, reward name, reward description.</figcaption>
</figure>

### Leaving feedback
Have a Kickstarter text or image query you'd like to see added? File a [Query request](https://github.com/kickstarter/kickstarter-sketchplugin/issues/new?assignees=&labels=&template=query-request.md&title=){:target="_blank"}. See a problem with an existing query? File a [Bug report](https://github.com/kickstarter/kickstarter-sketchplugin/issues/new?assignees=&labels=&template=bug_report.md&title=){:target="_blank"}.