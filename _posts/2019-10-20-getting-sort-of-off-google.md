---
title: Getting (sort of) off Google
description: "This is a guide for those, like me, who wanted to cut the Google cord yet still be able to receive Google Calendar invitations and collaborate on Google Docs."
date: 2019-10-20 10:30:00 +1000
---

There are a lot of good reasons for killing-off the Gmail address and going with your own, custom email address. The current reality though is that a lot of folks still use Google Drive, Google Docs, and Google Calendar. Unless you want to fork out money for G Suite (and then once again give your data to Google), you're in danger of cutting yourself off from collaboration.

This is a guide for those, like me, who wanted to cut the Google cord yet still be able to receive Google Calendar invitations and collaborate on Google Docs.

## Setting up a non-Google email address
I like [Soverin](http://soverin.net) because they're independent, have good uptime, and use clean energy for their servers. They are also extremely responsive if you ever need personalised support. You can use pretty much any email service you like, however. The Google process should still work.

### Signing in to your usual email apps
Once you have an email address (and likely your own domain) from a service like Soverin, test it out using their webmail service. All good? Then you're ready to set it up in an app such as Apple Mail. Soverin has support articles for both [Mac](https://support.soverin.net/hc/en-us/articles/115004812134-Setup-Soverin-on-your-Mac-with-Apple-Mail) and [iOS](https://support.soverin.net/hc/en-us/articles/115004812134-Setup-Soverin-on-your-Mac-with-Apple-Mail) that go into how to do this, as do most other email services. It's usually quite straightforward.

## Setting up a Google account
Follow the first few steps to [create a personal Google account](https://accounts.google.com/). Instead of creating a Gmail address however, click _Use my current email address_. Enter your non-Gmail email address and finish the process.

You should probably add a profile picture to your Google account. The default one, combined with a non-Gmail/G Suite email address, can look a bit suspicious to folks who invite you to collaborate on Google services such as Docs and Calendar. A photo of yourself, combined with a custom email address, will make it look like you're just a G Suite customer.

### Syncing your custom email Google Calendar with iOS and macOS Calendar apps
This is easy on macOS and, as of writing this, hard on iOS.

On macOS: sign in via the Google flow in System Preferences > Internet Accounts. Once signed in, deselect everything except for calendar.

On iOS: ignore the Google flow and instead sign in via CalDAV. Here's how:

1. Go to _Settings_ > _Passwords & Accounts_ > _Add Account_
2. Select _Other_
3. Select _Add CalDav Account_

Enter the following details:

Server: `calendar.google.com`<br>
Username: `your@emailaddress.com`<br>
Password: `yourgooglepassword`

Be sure to swap out the `your@emailaddress.com` and `yourgooglepassword` with your own information.

There is another crucial field called _Advanced Settings_ which, for whatever reason, doesn't appear until you jump through some hoops. For me, that was a combination of tapping _Save_ at least twice, re-opening the modal, or swiping and tapping aimlessly on the modal. Just keep trying and it should appear.

Once Advanced Settings does appear, tap into it and enter the following details:

Port: `443`<br>
Account URL: `https://calendar.google.com/calendar/dav/your@emailaddress.com/user/`

Be sure to swap out the `your@emailaddress.com` with your own.

<figure class="even-two">
  <img data-src="https://ik.imagekit.io/dw/notes/verifying.png" alt="An iPad screenshot showing calendar settings">
  <img data-src="https://ik.imagekit.io/dw/notes/advanced-settings.png" alt="An iPad screenshot showing calendar settings">
  <figcaption>First: <em>Advanced Settings</em> appears as an option, after a bit of finagling. Second: The information I inputted within <em>Advanced Settings</em>.</figcaption>
</figure>

Tap the back (_< CalDAV_) navigation button, and then Save. It will likely take another few seconds to verify. It took me a few tries to have it work; so if it fails, give it more time and/or try again.

## Finishing up
That should be it for most folks. You can now use your custom email address for private emailing and for Google services. 

### Making sure you don't end up in the Junk folder
Some email services, such as Gmail, find custom email addresses suspicious and mark emails sent by them as junk. You can mark your email address as 'safe' by authenticating it through a method such as [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail). I did it with my [Soverin](https://support.soverin.net/hc/en-us/articles/360000213874-Setup-DKIM) email address and haven't had any issues since.