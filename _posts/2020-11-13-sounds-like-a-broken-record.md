---
title: Sounds like a broken record
date: 2020-11-13 16:30:00 +1100
tags:
  - process
  - tech
  - experiment
---

Ephemerabot has been tweeting the same few bits of ephemera every day for the last week. Apologies to my three followers. One of which is myself.

This is a note-to-self for similar situations in the future: [Heroku apps must be stateless](https://stackoverflow.com/a/24769708/2009441). Any changes made to files on Heroku will be lost the next time your dyno starts. Heroku's file system is, uh, ephemeral.

I've come up with a simple solution: adding a simple _tweeted_ value to each record. _tweeted_ is a checkbox, so takes just `true` or `false`. On the Airtable side, new records have their _tweeted_ value set to `false`. These new records are picked up on Ephemerabot's side with a simple `if` statement inside a `forEach`:

```js
if (!record.fields.tweeted) {
  // Go forth and tweet
}
```

Airtable's API has a handy `.update()` method for writing data. That means I can just loop through the above records and mark them as tweeted:

```js
// Those records have been tweeted
// Mark them as tweeted on Airtable
notYetTweetedEphemera.map((i) => {
  i.fields.tweeted = true;
});
```

That applies a `true` value to each record's _tweeted_ field. The Airtable interface updates almost instantly.

Cleaner and simpler than what I was doing before: reading from and writing to a JSON file on the file system.
