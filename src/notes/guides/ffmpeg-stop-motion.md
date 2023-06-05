---
title: Create a Stop-Motion Video With FFmpeg
date: 2021-01-06
tags:
  - ffmpeg
  - macOS
  - terminal
  - guide
subject: ffmpeg
audience: People comfortable using Terminal. They probably have prior experience with FFmpeg or similar.
---

Here’s how to create a WEBM video based on still images using [FFmpeg](https://ffmpeg.org):

```bash
ffmpeg -r 12 -i "frame-%02d.jpg" "output.webm"
```

That example:

1. Sets a FPS (frames per second) rate of 12.
2. Searches the directory for any file beginning with `frame-`, containing a two digit serial `(%02d)`, and ending in `.jpg`. For example: `frame-012.jpg` would match.
3. Outputs a file called `output.webm`.
