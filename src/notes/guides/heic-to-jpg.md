---
title: Convert HEIC to JPEG via iOS Shortcuts
date: 2021-05-27
description: I like HEIC as the default iOS image format but occasionally want to export a JPEG (JPG). Here’s a shortcut for that.
pinned: true
stage: 2
tags:
  - iOS
  - macOS
  - shortcut
  - photos
---

I like HEIC as the default iOS image format but occasionally want to export a JPEG, usually for macOS apps that don't yet support HEIC. Here's a shortcut I made to do just that:

<div class="asset">
    <img src="/assets/images/outbound-assets/shortcuts.png" alt="An icon for this asset">
    <div>
      <h3>Convert to JPEG then AirDrop</h3>
      <p>An Apple Shortcut for iOS</p>
    </div>
    <a href="https://www.icloud.com/shortcuts/f2f351b0c7a24af5ac9616def7708629" target="_blank" class="outbound">View in Shortcuts</a>
</div>

After installing, navigate to any photo, open a Share Sheet, and then tap _Edit Actions_. You'll need to enable the shortcut before you can use it.

## In detail

At time of writing, iOS doesn't natively support image format conversion. That makes the HEIC to JPEG conversion process tedious:

1. Select the photo(s) on my iPhone
2. Open the Share Sheet
3. Tap _AirDrop_
4. AirDrop the HEIC image to my Mac
5. Open the HEIC image in Preview
6. Export the HEIC image as JPEG
7. Use the JPEG on my Mac

With the [aforementioned shortcut](https://www.icloud.com/shortcuts/f2f351b0c7a24af5ac9616def7708629) you instead just do the following:

1. Select the photo(s) on my iPhone
2. Open the Share Sheet
3. Tap _Convert to JPEG then AirDrop_
4. Use the JPEG on my Mac

## Via photo selection

I also made a version of the shortcut that launches the 'Select photos' modal instead of relying on the Share Sheet. You can download that one too:

<div class="asset">
    <img src="/assets/images/outbound-assets/shortcuts.png" alt="An icon for this asset">
    <div>
      <h3>Select, Convert to JPEG, then AirDrop</h3>
      <p>Another Apple Shortcut for iOS</p>
    </div>
    <a href="https://www.icloud.com/shortcuts/d18a40fa00f04f9cab39ea8671bf9949" target="_blank" class="outbound">View in Shortcuts</a>
</div>
