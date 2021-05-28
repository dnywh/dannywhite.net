---
title: ImageMagick
url: https://imagemagick.org
contents:
    - Understanding the two main commands
    - Understanding the wildcard selector
    - Resize, flip, or rotate a selection of images
    - Brighten a selection of images
    - Make a spritesheet
otherResources:
    - name: ImageMagick's documentation
      url: https://imagemagick.org/script/command-line-options.php
    - name: Save time by transforming images in the command line | Hackernoon
      url: https://hackernoon.com/save-time-by-transforming-images-in-the-command-line-c63c83e53b17
    - name: Use ImageMagick to quickly and easily process images for your blog
      url: https://www.brianlinkletter.com/2015/12/process-images-for-your-blog-with-imagemagick/
---
## Understanding the two main commands

ImageMagick has two main commands:

- `convert`
- `mogrify`

`convert` takes an input image and outputs an _additional_ image based on whatever transformations you pass to it. Here's an example that takes an input PNG image, resizes it to 50%, and then exports it as a jpg:

```shell
convert my-original-image.png -resize 50% my-new-smaller-image.jpg
```

`mogrify` takes an input command, looks for any images in the directory that match that command, and _replaces_ any matching images. Here's an example that looks for any PNG files starting with _step-_ and then resizes them to 10% of their original size:

```shell
mogrify -resize 10% step-*.jpg
```

## Understanding the wildcard selector

You might have noticed the weird `*` in the above command. That tells ImageMagick that _any_ character from that point forward is a match. E.g. step-1.jpg, step-2.jpg, step-wet-paint.jpg, etc.

The `*` wildcard selector a common programming convention.  You'll often see it in [CSS](css), for example.

Here's a more basic example of the wildcard selector that accepts any JPG in the current directory:

```shell
mogrify -resize 10% *.jpg
```

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

## Make a spritesheet

Use `-append` for a vertical spritesheet and `+append` for a horizontal one.

```shell
convert step-*.jpg -append spritesheet.jpg
```

You can [apparently](https://stackoverflow.com/a/88720/2009441) also use the `montage` command (which lets you place images on a grid), although it [looks problematic](https://stackoverflow.com/questions/88711/how-to-concatenate-icons-into-a-single-image-with-imagemagick#comment90016528_10655028).

## Get rid of EXIF data

EXIF data is information about an image, attached to that image. It's how you see where in the world a photo was taken, on what camera, and so on. Use `-strip` to remove it. Here's how:

```shell
convert original-image.jpg -strip private-image.jpg
```

`-strip` will also remove all these profiles, comments, and chunks: bKGD,cHRM,EXIF,gAMA,iCCP,iTXt,sRGB,tEXt,zCCP,zTXt,date.
