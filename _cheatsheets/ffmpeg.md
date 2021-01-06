---
title: ffmpeg
url: https://ffmpeg.org
contents:
    - Create a stop-motion video based on still images
    - Add a padded border around a video
---

## Create a stop-motion video based on still images

The below example...

1. sets a FPS (frames per second) rate of `12`
2. searches the directory for any file beginning with `frame-`, containing a two digit serial (`%02d`), and ending in `.jpg` (e.g. _frame-012.jpg`)
3. outputs an `output.webm` file

```shell
ffmpeg -r 12 -i frame-%02d.jpg output.webm
```

Here's what that looks like:

<video muted playsinline controls loop style="width: 256px;">
  <source src="https://res.cloudinary.com/dannywhite/video/upload/v1608781903/video/rotating-charcoal-ball-borderless.webm" type="video/webm">
  <source src="https://res.cloudinary.com/dannywhite/video/upload/v1608781903/video/rotating-charcoal-ball-borderless-backup.mp4" type="video/mp4">
</video>

[Source](http://brendandawes.com/blog/ffmpeg-images-to-video)

## Add a padded border around a video

The below example sets a new width and height of the desired padding (`128`) plus the existing width (`iw`) and existing height (`ih`). The video is then moved to half that desired padding (`64`) on the `x` and `y` axis so the border is visible. Lastly, the colour is set to a recognised HTML colour name (`white`).

```shell
ffmpeg -i input.webm -filter_complex "[0]pad=w=128+iw:h=128+ih:x=64:y=64:color=white" output.webm
```

Here's what that looks like:

<video muted playsinline controls loop style="width: 256px;">
  <source src="https://res.cloudinary.com/dannywhite/video/upload/v1608781903/video/rotating-charcoal-ball.webm" type="video/webm">
  <source src="https://res.cloudinary.com/dannywhite/video/upload/v1608781903/video/rotating-charcoal-ball-backup.mp4" type="video/mp4">
</video>

And here's another example for padding the video to fit a 16:9 context:

<video muted playsinline controls loop style="height: 256px;">
  <source src="https://res.cloudinary.com/dannywhite/video/upload/v1608781903/video/rotating-charcoal-ball-16x9.webm" type="video/webm">
  <source src="https://res.cloudinary.com/dannywhite/video/upload/v1608781903/video/rotating-charcoal-ball-16x9-backup.mp4" type="video/mp4">
</video>

[Source](https://stackoverflow.com/a/56179969/2009441)