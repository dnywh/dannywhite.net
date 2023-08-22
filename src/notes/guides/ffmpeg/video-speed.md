---
title: Speed up or slow down a video with FFmpeg
date: 2021-01-06
tags:
  - ffmpeg
  - macOS
  - terminal
  - guide
subject: ffmpeg
audience: People comfortable using Terminal. They probably have prior experience with FFmpeg or similar.
---

Here's how to double the speed of a video using FFmpeg:

```shell
ffmpeg -i input.mp4 -filter:v "setpts=0.5*PTS" output.mp4
```

The `0.5` in `"setpts=0.5*PTS"` tells the video frames (technically their timestamps) how much to multiply by. Use a value greater than `1` to slow down the video.

Check out the [official wiki](https://trac.ffmpeg.org/wiki/How%20to%20speed%20up%20/%20slow%20down%20a%20video#setptsfilter) for more methods including how to smooth out the result.
