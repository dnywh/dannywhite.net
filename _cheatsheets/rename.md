---
title: rename
url: http://plasmasturm.org/code/rename/
contents:
    - Install rename
    - Batch renaming files
otherResources:
    - name: rename's tutorial
      url: http://plasmasturm.org/code/rename/#TUTORIAL
    - name: Stack Overflow thread
      url: https://stackoverflow.com/a/44977159/2009441
---

This macOS Terminal utility is based off the Perl script of the same name. Refer to Perl documentation if you get stuck.

This cheatsheet is a work-in-progress. I'm still new to rename, so some things might be off.

## Install rename

You can install rename with Homebrew:

```shell
brew install rename
```

## Batch rename files

Use `-N` or `--counter-format` Here's how to set to zero-padded to three digits:

```shell
rename --counter-format 001 *.jpg
```

```shell
rename --counter-format 000001 --lower-case --keep-extension --expr='$_ = "$N" if @EXT' *
```

Problematic as it reads `step-11.jpg` before `step-2.jpg`.

## Preview changes

Passing `-n` (or `--dry-run` or `--just-print`) will just show the changes in Terminal without applying them to the actual files.

```shell
rename -n # rest of command to preview
```

I use it almost every time I use rename; first running the desired command with `-n` (and usually fixing one or two things) and then, when I'm happy, running the real thing without `-n`.
