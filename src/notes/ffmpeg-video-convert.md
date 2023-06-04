---
title: Reduce Video File Size with FFmpeg
date: 2023-06-04
tags:
  - ffmpeg
  - macOS
  - terminal
  - guide
subject: ffmpeg
draft: false
---

Here’s how to reduce the size of an MP4 file using [FFmpeg](https://ffmpeg.org):

```bash
ffmpeg -i "input.mp4" -vcodec libx264 -crf 28 "ouput.mp4"
```

The `-crf 28` bit determines the quality and therefore also determines the file size. [A lower value means higher quality](https://superuser.com/a/677580/1680399). I find `28` a happy medium between a small file size and not much visual drop in quality.

Here’s how to reduce the file size of an MOV file whilst also converting it to an MP4 file:

```bash
ffmpeg -i "input.mov" -vcodec libx264 -crf 28 "output.mp4"
```

And here’s how to batch convert all MOV files within the current directory to MP4 files whilst also reducing their file size:

```bash
for i in *.mov; do ffmpeg -i "$i" -vcodec libx264 -crf 28 "${i%.*}.mp4";done
```

I usually keep a dedicated folder on my Mac (Downloads ▸ Convert) in which I drop videos to convert. I can then just batch convert videos quickly with the same few keystrokes each time.

## Backstory

I find myself uploading lots of screen recordings to Slack or similar. It isn’t uncommon for these video files to be a few hundred megabytes or over a gigabyte in size. Files that big are both annoying to upload and [wasteful](https://www.iea.org/reports/data-centres-and-data-transmission-networks), especially considering their ephemeral nature.

There are surprisingly few macOS apps that do the simple task of reducing a video file size well and for cheap. [Handbrake](https://handbrake.fr) is the internet go-to but I find it finicky. [Miro](http://www.mirovideoconverter.com) was good but is falling apart from neglect.

FFmpeg powers both of the apps mentioned above and probably most of what’s on the market. So if you’re comfortable with basic Terminal commands (or have been looking for a reason to learn) then FFmpeg is the way to go.
