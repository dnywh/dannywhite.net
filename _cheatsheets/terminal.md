---
title: Terminal
contents:
    - Set up and modify Terminal shortcuts
---

## Set up and modify Terminal shortcuts

1. Open up Terminal
2. Run `nano ~/.zshenv`
3. Enter your Terminal shortcuts
4. Save the _.zshenv_ file

Setting a shortcut such as:

```shell
alias code="open -a 'Visual Studio Code'"
```

...will allow you to edit the _.zshenv_ file in your favourite text editor, next time.

See my post on [Bash]({% post_url 2018-04-08-bash-your-profile %}) for a primer on what this means. The default shell has changed from Bash to zsh [as of macOS Catalina](https://www.theverge.com/2019/6/4/18651872/apple-macos-catalina-zsh-bash-shell-replacement-features){:target="_blank" rel="noopener noreferrer"}.

[Source](https://stackoverflow.com/a/23091184/2009441)
