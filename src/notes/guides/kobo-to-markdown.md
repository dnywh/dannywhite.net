---
title: Saving Kobo Highlights to Markdown or Notion
date: 2023-06-25
description: A macOS shortcut for turning highlights and notes from your Kobo into Markdown.
tags:
  - macOS
  - shortcut
  - Notion
  - Kobo
  - Markdown
  - guide
subject: Shortcuts
audience: People who own a Kobo e-reader, use a Mac, and want to save their highlights and notes in Markdown format for tools like Notion.
---

I’m sick of relying on expensive, fickle, and/or cumbersome online services to store my Kobo highlights so I built my own flow. Now I can just press a few buttons and paste the highlights (and notes) in Notion.

Each highlight appears as a native Notion quote block. Notes (or annotations) that accompany highlights can take on any Markdown/Notion syntax, such as `[]` to create a todo item.

As you might be able to guess: the shortcut simply cleans up and formats highlights and notes to Markdown. You could use this flow to bring your highlights and notes to any app or service that supports Markdown, not just Notion.

## Installation

You only need to do these things once:

- Follow [these instructions](https://www.reddit.com/r/kobo/comments/7swz6v/comment/dtnxr2r/) to enable the highlight export feature on your Kobo.
- Add the [Kobo Highlighter shortcut](https://www.icloud.com/shortcuts/3b4336f383764076bc2c2f6f8d336db7) to your Mac.

## Usage

You need to follow these steps each time you want to save a book's highlights and notes to your Mac:

1. On your Kobo: long-press on a book cover and tap 'Export Annotations'. Tap 'Export'.
2. Plug in your Kobo to your Mac and then, on your Mac, navigate to the newly created TXT file.
3. Right-click on the file and then navigate to Quick Services > Kobo Highlighter.
4. Wait a few seconds for the notification.
5. Paste the results in Notion or wherever you like.

## Screenshots

Here’s what it looks like in practice:

<figure>
  <img src="{% src 'kobo-shortcut.png' %}"
  srcset="{% srcset 'kobo-shortcut.png' %}"
  alt="A screenshot of macOS Finder."
  width="1088"
  height="260"
  loading="lazy">
  <figcaption>Right-clicking on a TXT file in Finder shows the <a href="https://www.icloud.com/shortcuts/3b4336f383764076bc2c2f6f8d336db7">Kobo Highlighter shortcut</a>.</figcaption>
</figure>

<figure>
  <img src="{% src 'kobo-markdown.png' %}"
  srcset="{% srcset 'kobo-markdown.png' %}"
  alt="A screenshot of plain text formatted as Markdown."
  width="1716"
  height="388"
  loading="lazy">
  <figcaption>Running the shortcut turns the contents of the TXT file into Markdown and saves it to your clipboard.</figcaption>
</figure>

<figure>
  <img src="{% src 'kobo-notion.png' %}"
  srcset="{% srcset 'kobo-notion.png' %}"
  alt="A screenshot of the same text formatted visually in Notion as blockquotes and a todo item."
  width="1488"
  height="386"
  loading="lazy">
  <figcaption>Pasting the shortcut’s results into Notion (or similar) means that the text inherits Markdown formatting. Notice how the ‘Read Team Human’ note is formatted as a todo item. The surrounding highlights are formatted as blockquotes.</figcaption>
</figure>
