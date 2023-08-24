---
title: Add a padded border around a video with FFmpeg
date: 2021-01-06
tags:
  - FFmpeg
  - macOS
  - Terminal
audience: People comfortable using Terminal. They probably have prior experience with FFmpeg or similar.
---

The below example sets a new width and height of the desired padding (`128`) plus the existing width (`iw`) and existing height (`ih`). The video is then moved to half that desired padding (`64`) on the `x` and `y` axis so this new border is visible. Lastly, the colour is set to a recognised HTML colour name (`white`).

```shell
ffmpeg -i input.webm -filter_complex "[0]pad=w=128+iw:h=128+ih:x=64:y=64:color=white" output.webm
```

[Source](https://stackoverflow.com/a/56179969/2009441)
