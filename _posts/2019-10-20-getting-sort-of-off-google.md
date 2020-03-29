---
title: Getting (sort of) off Google
description: "This is a guide for those, like me, who wanted to cut the Google cord yet still be able to receive Google Calendar invitations and collaborate on Google Docs."
date: 2019-10-20 10:30:00 +1000
tags:
  - email
  - guide
---

There are a lot of good reasons for killing-off the Gmail address and going with your own, custom email address. The current reality though is that a lot of folks still use Google Drive, Google Docs, and Google Calendar. Unless you want to fork out money for G Suite (and then once again give your data to Google), you're in danger of cutting yourself off from collaboration.

This is a guide for those, like me, who wanted to cut the Google cord yet still be able to meet via Google Calendar and collaborate via Google Docs.

## Setting up a non-Google email address
I like [Soverin](http://soverin.net) because they're independent, have good uptime, and use clean energy for their servers. They are also extremely responsive if you ever need personalised support. You can use pretty much any email service you like, however. The Google process should still work.

### Signing in to your usual email apps
Once you have an email address (and likely your own domain) from a service like Soverin, test it out using their webmail service. All good? Then you're ready to set it up in an app such as Apple Mail. Soverin has support articles for both [Mac](https://support.soverin.net/hc/en-us/articles/115004812134-Setup-Soverin-on-your-Mac-with-Apple-Mail) and [iOS](https://support.soverin.net/hc/en-us/articles/115004812134-Setup-Soverin-on-your-Mac-with-Apple-Mail) that go into how to do this, as do most other email services. It's usually quite straightforward.

## Setting up a Google account
Follow the first few steps to [create a personal Google account](https://accounts.google.com/). Instead of creating a Gmail address however, click _Use my current email address_. Enter your non-Gmail email address and finish the process.

You should probably add a profile picture to your Google account. The default one, combined with a non-Gmail/G Suite email address, can look a bit suspicious to folks who invite you to collaborate on Google services such as Docs and Calendar. A photo of yourself, combined with a custom email address, will make it look like you're just a G Suite customer.

### Syncing your custom email Google Calendar with iOS and macOS Calendar apps
#### macOS
Sign in via the Google flow in System Preferences > Internet Accounts. Once signed in, deselect everything except for calendar.

#### iOS
The Google flow won't work for us here.

##### Generating an app password
Follow this guide if you have 2-Step Verification enabled on your Google account.

1. Open a new browser tab on any device from which you're signed into your Google account.
1. Go to _Manage your Google Account_.
2. On the left navigation panel, select _Security_.
3. On the _Signing in to Google panel_, select _App Passwords_.
3. At the bottom, select _Select app_ and select _Calendar_.
4. Select _Select device_ and select the device you’re using (_iPhone_ or _iPad_).
5. Select Generate.
6. A new app password should appear on your screen. Keep this at hand.

##### Signing in via CalDAV
Again, we cannot use the Google flow like we can on macOS. We need to use CalDAV.

On your iOS device:

1. Go to _Settings_ > _Passwords & Accounts_ > _Add Account_
2. Select _Other_
3. Select _Add CalDAV Account_
4. Enter the following details:

Server: `calendar.google.com`<br>
Username: `your@emailaddress.com`<br>
Password: `your-google-password-or-app-password`

Be sure to swap out the `your@emailaddress.com` and `your-google-password-or-app-password` with your own information. Remember to use your app password instead of your Google account password as per the instructions in _Generating an app password_.

If that doesn't work, double-check your password situation: did you use your regular Google account password instead of an app password?

### Making sure you don't end up in the Junk folder
Some email services, such as Gmail, find custom email addresses suspicious and mark emails sent by them as junk. You can mark your email address as 'safe' by authenticating it through a method such as [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail). I did it with my [Soverin](https://support.soverin.net/hc/en-us/articles/360000213874-Setup-DKIM) email address and haven't had any issues since.