---
title: Set up and modify Terminal shortcuts
date: 2020-12-26
tags:
  - Terminal
  - macOS
  - guide
subject: Terminal
audience: People already comfortable using Terminal.
---

1. Open up Terminal
2. Run `nano ~/.zshenv`
3. Enter your Terminal shortcuts
4. Save the _.zshenv_ file

Setting a shortcut such as:

```shell
alias code="open -a 'Visual Studio Code'"
```

...will allow you to edit the _.zshenv_ file in your favourite text editor, next time.

[Source](https://stackoverflow.com/a/23091184/2009441)
