---
title: A beginner’s guide to Rename
date: 2021-05-29
tags:
  - Rename
  - macOS
  - Terminal
---

Sometimes the [built-in](https://support.apple.com/en-au/guide/mac-help/mchlp1144/mac#apdecbd8036ee564) macOS Finder renaming tool doesn't cut the mustard. Enter [Rename](https://formulae.brew.sh/formula/rename); a handy Homebrew formula for batch renaming files using your Terminal.

This formula is based off the Perl script of the same name. Refer to that original version's [documentation](http://plasmasturm.org/code/rename/) if you get stuck.

Forgive the brevity below. I'll update this once I get more of a hang of Rename.

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

(Right now the above is problematic as it reads `step-11.jpg` before `step-2.jpg`.)

## Preview changes

Passing `-n` (or `--dry-run` or `--just-print`) will just show the changes in Terminal without applying them to the actual files.

```shell
rename -n # rest of command to preview
```

I use it almost every time I use rename; first running the desired command with `-n` (and usually fixing one or two things) and then, when I'm happy, running the real thing without `-n`.
