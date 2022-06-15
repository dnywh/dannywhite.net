---
title: Convert HEIC to JPEG via iOS Shortcuts
date: 2021-05-27
description: I like HEIC as the default iOS image format but occasionally want to export a JPEG. Here's a shortcut for that.
custTags:
  - iOS
  - macos
  - shortcut
  - photos
---

I like HEIC as the default iOS image format but occasionally want to export a JPEG, usually for macOS apps that don't yet support HEIC. iOS doesn't let you convert image formats, making this workflow fairly painful:

1. Select the photo(s) on my iPhone
2. Open the Share Sheet
3. Tap _AirDrop_
4. AirDrop the HEIC image to my Mac
5. Open the HEIC image in Preview
6. Export the HEIC image as JPEG
7. Use the JPEG on my Mac

Here's my new workflow:

1. Select the photo(s) on my iPhone
2. Open the Share Sheet
3. Tap _Convert to JPEG then AirDrop_
4. Use the JPEG on my Mac

I got it down to four steps (and a couple of seconds instead of a minute or two) by making an iOS shortcut called _Convert to JPEG then AirDrop_. You can download it [here](https://www.icloud.com/shortcuts/f2f351b0c7a24af5ac9616def7708629). Just make sure you tap _Edit Actions_ on your Share Sheet to enable it.

I also made a version of the shortcut that launches the 'Select photos' modal instead of relying on the Share Sheet. You can download that one [here](https://www.icloud.com/shortcuts/d18a40fa00f04f9cab39ea8671bf9949).
