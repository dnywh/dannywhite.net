---
title: Reduce Video File Size With FFmpeg
date: 2023-06-04
tags:
  - ffmpeg
  - macOS
  - terminal
  - guide
subject: ffmpeg
audience: People comfortable using Terminal. They probably have prior experience with FFmpeg or similar.
---

Here’s how to reduce the size of an MP4 file using [FFmpeg](https://ffmpeg.org):

```bash
ffmpeg -i "input.mp4" -vcodec libx264 -crf 28 "ouput.mp4"
```

The `-crf 28` bit determines the quality and therefore also determines the file size. [A lower value means higher quality](https://superuser.com/a/677580/1680399). I find `28` a happy medium between a small file size and not much visual drop in quality. The file size ends up being about 5–6% of the original, in my experience.

Here’s how to reduce the file size of an MOV file whilst also converting it to an MP4 file:

```bash
ffmpeg -i "input.mov" -vcodec libx264 -crf 28 "output.mp4"
```

And here’s how to batch convert all MOV files within the current directory to MP4 files whilst also reducing their file size:

```bash
for i in *.mov; do ffmpeg -i "$i" -vcodec libx264 -crf 28 "${i%.*}.mp4";done
```

Finally, here's the one I use most often: converting all MP4 files in the current directory to new MP4 files within a child directory called _Converted_:

```bash
for i in *.mp4; do ffmpeg -i "$i" -vcodec libx264 -crf 28 "Converted/${i%.*}.mp4";done
```

That child directory must already exist for the above to work. I usually keep a dedicated folder on my Mac (Downloads ▸ Convert) in which I drop videos to convert. That folder has an empty subfolder called _Converted_ (so Downloads ▸ Convert ▸ Converted) ready to catch the output.

I can then just batch convert videos quickly with the same few keystrokes each time; with a predictable output location and without any change to the original file name.

## Backstory

I find myself uploading lots of screen recordings to Slack or similar. It isn’t uncommon for these video files to be a few hundred megabytes or over a gigabyte in size. Files that big are both annoying to upload and [wasteful](https://www.iea.org/reports/data-centres-and-data-transmission-networks), especially considering their ephemeral nature.

There are surprisingly few macOS apps that do the simple task of reducing a video file size well and for cheap. [Handbrake](https://handbrake.fr) is the internet go-to but I find it finicky. [Miro](http://www.mirovideoconverter.com) was good but is falling apart from neglect.

FFmpeg powers both of the apps mentioned above and probably most of what’s on the market. So if you’re comfortable with basic Terminal commands (or have been looking for a reason to learn) then FFmpeg is the way to go.
