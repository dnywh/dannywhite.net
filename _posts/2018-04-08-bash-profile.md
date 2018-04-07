---
layout: post
type: article
date: 2018-04-07 09:12:00 -0400
---

I haven't seen this explained online in a non-engineer way online, so will do my best for future-Danny and anyone else landing here.

## The problem
So, you find yourself typing the same commands into Terminal over and over again? I used to, too. Here's an example:

To navigate to my personal site's local folder, I'd manually type:

```
cd ~/Projects/dannywhite.is
```

That would almost always be followed up by the command to start the local Jekyll server to preview changes to that site:
```
bundle exec jekyll serve
```

A bit painful.

## The fix
You can shorten these commands into whatever you like. M shortcuts for the above are `me` and `jek`, respectively.

To do this, open Terminal and type `nano .bash_profile`. This should open (and create, if you haven't done this before) the `.bash_profile` inside of Terminal.

Here's what mine looks like, with shortcuts already made at the bottom:
{% include image.html name="nano-bash_profile.png" %}

Go ahead and copy that syntax. As a refresher:

```
alias your-shortcut-name="whatever-you're-shortening"
```

I've also added an application shortcut for [Atom](https://atom.io), which you can see in the above two screenshots as:

```
alias atom="open -a 'Atom'"
```

That means if I want to edit my `.bash_profile` in the future, I can type `atom .bash_profile` instead of `nano .bash_profile` and have a slightly nicer experience:

{% include image.html name="atom-bash_profile.png" %}

Other people at Kickstarter have a crazy amount of (sometimes questionable) shortcuts (like `gc` for `git commit`). It's all up to you.

## This whole 'bash' thing
This is where I'd defer to an engineer to explain. I'll do my best to summarise: Think of this `.bash_profile` as an invisible file that customises your `bash` setup. One of the things we customised was shortcuts. You can other things about your `bash` such as colours.

Shout out to Stephanie Coleman who taught me all of this, the right way.
