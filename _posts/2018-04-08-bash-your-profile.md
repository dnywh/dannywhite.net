---
title: "Bash your profile"
date: 2018-04-07 09:12:00 -0400
featured_image: atom-bash_profile.png
tags:
    - guide
---

It seems like everyone has a use for Terminal these days but the people most uncomfortable with it (think PMs, designers) have the heaviest lifting to do. Shortcuts are so wildly helpful for making Terminal approachable—yet are somehow unexplained and impenetrable for those that need them.

Here's my attempt to fix that.

## The long way

Repeatedly typing in the same commands into Terminal is annoying, takes time, and is prone to mistakes. Let's look at some examples of my common commands to illustrate this.

To navigate to my personal site's local folder, I'd manually type:

`cd ~/projects/dannywhite.site`

That would almost always be followed up by the command to start the local Jekyll server to preview changes to that site:

`bundle exec jekyll serve`

And then I'd want to open this folder up in Atom. I don't even know how to do this long-hand in Terminal so would probably just navigate to said folder via Finder and drag it onto Atom's app icon.

A bit painful.

## The quick way

You can shorten these commands into shortcuts of your choosing. My shortcuts for the above three commands are `me`, `jek`, and `atom` respectively. So to get those same three things done, I'd instead write:

```shell
me
jek
atom .
```

Let's give it a try. Open Terminal and type `nano .bash_profile`. This should create and open the _.bash_profile_ file inside of Terminal.

Here's what mine looks like with shortcuts already made at the bottom:

<figure>
  <img data-src="https://ik.imagekit.io/dw/notes/bash-your-profile/nano-bash_profile.png" alt="A screenshot of the macOS Terminal">
  <figcaption>Yours should appear empty.</figcaption>
</figure>

Notice the syntax that each of my shortcuts are using? Here's a breakdown:

`alias your-shortcut-name="whatever-you're-shortening"`

`alias`: as the word suggests, this defines the following will be an 'alias', or shortcut.

`your-shortcut-name`: replace this with your desired shortcut word; what you will type in Terminal to actually do that longer, gnarlier thing. If your shortcut is to open Visual Studio Code, you might write replace this with `code`.

`"whatever-you're-shortening"`: if your shortcut is to navigate to a directory, you would replace this with `"cd ~/My Folder/"`. If your shortcut is to open an application, you would replace this with `"open -a App Name"`.

Simply add any of your desired shortcuts to the bottom of this file, above `source ~/.bashrc`. Save _.bash_profile_ and restart Terminal. Your shortcuts should now work.

## The pro zone

I don't even need to fuss in Terminal now that I have an application shortcut for Atom. Instead of writing the command `nano .bash_profile`, I can use my fancy shortcut `atom .bash_profile` for a nicer experience. Just make sure to restart Terminal after saving your changes.

<figure>
  <img data-src="https://ik.imagekit.io/dw/notes/bash-your-profile/atom-bash_profile.png" alt="A screenshot of the Atom text editor">
  <figcaption>You can of course use your text editor of choice. Atom has no special tie-in to Terminal or bash profiles.</figcaption>
</figure>

Keep an eye on an nearby engineer as they use Terminal. You might see them use shortcuts beyond applications and directories such as using `gc` for `git commit`. It's all up to you. Colours, ASCII art, and things I'm yet to figure out are also customisable via _.bash_profile_.

Shout out to Stephanie Coleman who introduced me to all of this at Kickstarter. My .bash_profile lives in a [Gist](https://gist.github.com/dannyalright/5856920a9579200f59bbcc8bfe76b05c) if you've like to use it as a starting-point.
