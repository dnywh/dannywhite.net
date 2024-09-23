---
title: "Using a non-Gmail Google account on the iOS Calendar app"
description: A short guide to using a non-Gmail Google account as one of your calendars on the built-in Calendar app for iPhone and iPad.
date: 2024-09-23
tags:
  - iOS
audience: Folks who want to use the default Calendar app on iPhone or iPad for Google Calendar, but for a Google account with a custom (non-Gmail) email address.
---

I remember this taking me far too long to figure out when I first set it up years ago, have recently needed to update it, and could barely remember how. So consider this a note-to-self that might also help an internet stranger.

## Scenario

Imagine you own and use `danny@example.com` as your email address. You have a Google account registered for that username but host is email service elsewhere. I.e. not via Gmail's custom address feature. You want be able to use that Google account's calendar service but via your iPhone or iPad's built-in Calendar app.

## Problem

Unless it's been fixed since writing this, iOS and/or Google have a long-standing bug where Google accounts in that scenario can't be set up as an iOS Calendar account.

## Fix

_On your Google account:_

1. Go to your [Security](https://myaccount.google.com/security) page.
2. Enable [2-Step Verification](https://myaccount.google.com/signinoptions/twosv).
3. Go to [App passwords](https://myaccount.google.com/apppasswords). Add an item called 'Calendar on my iPhone' or similar. Copy that password. You'll need it for the below.

_On your iOS device:_

1. Go to Settings → Calendar → Calendar Accounts → Add Account → Other.
2. Tap 'Add CalDAV Account'
3. Fill in the details below, swapping out my example username and password for your own.

**Server:** calendar.google.com\
**Username:** `danny@example.com`\
**Password:** `your-app-password-from-google`\
**Description:** `Your Description Here`

You might need to also adjust or fill-in the Advanced Settings fields:

**Use SSL:** On\
**Port:** 433\
**Account URL:** https://calendar.google.com/calendar/dav/`danny@example.com`/user/
