---
title: A Beginner’s Guide to ImageMagick
date: 2021-05-28
modified: 2023-08-29
tags:
  - ImageMagick
  - macOS
  - Terminal
---

[ImageMagick](https://imagemagick.org) is a neat little command line library for image editing. I use it a lot for bulk image edits like resizing or cropping a bunch of photos in a folder. You could also use it to watermark, composite, or alter images in some other way you might do in Photoshop.

Check out the [official documentation](https://imagemagick.org/script/command-line-options.php) for a full list of what it can do.

## Understanding the two main commands

ImageMagick has two main commands:

- `convert`
- `mogrify`

`convert` takes an input image and outputs an _additional_ image based on whatever transformations you pass to it. Here's an example that takes an input PNG image, resizes it to 50%, and then exports it as a jpg:

```shell
convert my-original-image.png -resize 50% my-new-smaller-image.jpg
```

`mogrify` takes an input command, looks for any images in the directory that match that command, and _replaces_ any matching images. Here's an example that looks for any PNG files that start with the text _step-_ and then resizes any matches to 10% of their original size:

```shell
mogrify -resize 10% step-*.jpg
```

## Understanding the wildcard selector

You may have noticed the `*` in the above command. That tells ImageMagick that _any_ character from that point forward is a match. E.g. step-1.jpg, step-2.jpg, step-wet-paint.jpg, etc.

The `*` wildcard selector a common programming convention. You'll often see it in [CSS](/notes/tagged/css), for example.

Here's a more basic example of the wildcard selector that accepts any JPG in the current directory:

```shell
mogrify -resize 10% *.jpg
```

## Add a colour border to a selection of images

This is simple as long as you're good with fixed border sizing and simple colours. Here's an example that adds a 100px border to all sides of each JPG file in the current directory:

```shell
mogrify -bordercolor white -border 100x100 *.jpg
```

And here's what that looks like:

<div class="two-up">
  <figure>
    <img src="{% extSrc 'paul-gauguin-hina-no-border.jpg' %}"
    srcset="{% extSrcset 'paul-gauguin-hina-no-border.jpg' %}"
    alt="Paul Gauguin’s Tahitian Idol wood-block print."
    width="740"
    height="450"
    loading="lazy">
    <figcaption>Paul Gauguin’s <a href="https://www.artic.edu/artworks/63079/tahitian-idol-the-goddess-hina" rel="noopener">Tahitian Idol</a> wood-block print.</figcaption>
  </figure>
  <figure>
    <img src="{% extSrc 'paul-gauguin-hina-border-skyblue.jpg' %}"
    srcset="{% extSrcset 'paul-gauguin-hina-border-skyblue.jpg' %}"
    alt="The same image but with a 100px border on each side."
    width="740"
    height="450"
    loading="lazy">
    <figcaption>The same image but with a 100px border (set to skyblue for clarity) on each side.</figcaption>
  </figure>
</div>

See [this legacy documentation page](https://legacy.imagemagick.org/Usage/crop/#border) for more information. Proportional borders or custom fills require [some more maths](https://stackoverflow.com/questions/46050190/imagemagick-frame-a-picture-with-border-color-from-a-file#comment79080336_46052653).

## Resize, flip, or rotate a selection of images

You don't need ImageMagick for these transformations on macOS as there is the built-in `sips` command. If you still want to use ImageMagick for these transformations, here's how:

### Resize a selection of images

Use either the `-resize` or `-r` commands.

Resize by percentage:

```shell
mogrify -resize 10% step-*.jpg
```

Resize by pixel dimensions but keep original aspect ratio if it doesn't match:

```shell
mogrify -resize 800x600 step-*.jpg
```

Resize by pixel dimensions and enforce the exact dimensions:

```shell
mogrify -resize 800x600! step-*.jpg
```

Resize by just the _width_ pixel dimension, with height calculated automatically:

```shell
mogrify -resize 800 step-*.jpg
```

Resize by just the _height_ pixel dimension, with width calculated automatically:

```shell
mogrify -resize x600 step-*.jpg
```

## Brighten a selection of images

Pass in `-brightness-contrast` and a value between `-100` and `100`. Example:

```shell
mogrify -brightness-contrast 20 step-*.jpg
```

## Make a spritesheet from a selection of images

Use `-append` for a vertical spritesheet and `+append` for a horizontal one.

```shell
convert step-*.jpg -append spritesheet.jpg
```

Note that ImageMagick will order images by the first digit it encounters. In other words, if I name my individual files _step-1.jpg_, _step-2.jpg_, _step-3.jpg_, ..., _step-10.jpg_, _step-11.jpg_, _step-12.jpg_, ImageMagick will order them like so:

1. _step-1.jpg_
2. _step-10.jpg_
3. _step-11.jpg_
4. _step-12.jpg_
5. _step-2.jpg_
6. _step-3.jpg_
7. ...

Prevent this by 'padding' each file with as many digits as you go up to. Since I'm going up to `-12` in this case, which is two digits, I'd pad the names like this: _step-01.jpg_, _step-02.jpg_, and so on.

You can [apparently](https://stackoverflow.com/a/88720/2009441) also use the `montage` command (which lets you place images on a grid), although it [looks problematic](https://stackoverflow.com/questions/88711/how-to-concatenate-icons-into-a-single-image-with-imagemagick#comment90016528_10655028).

## Get rid of EXIF data

EXIF data is information about an image, attached to that image. It's how you see where in the world a photo was taken, on what camera, and so on. Use `-strip` to remove it. Here's how:

```shell
convert original-image.jpg -strip private-image.jpg
```

`-strip` will also remove all these profiles, comments, and chunks: bKGD,cHRM,EXIF,gAMA,iCCP,iTXt,sRGB,tEXt,zCCP,zTXt,date.

## Change the format of a selection of images

Here's how to change all TIFF files in the current directory to JPG:

```shell
mogrify -format jpg *.tiff
```
