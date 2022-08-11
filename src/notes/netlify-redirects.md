---
title: Clean URLs for Figma links via Eleventy and Netlify
date: 2022-08-11
description: Using Netlify redirects to clean up Figma portfolio links.
tags:
  - eleventy
  - netlify
  - figma
  - portfolio
---

Suppose you have a Figma file that serves as your online portfolio. It looks something like this:

```txt
https://www.figma.com/file/gnziUDsg08y4397dgz/File-Name-%E2%80%A2-Portfolio?node-id=2%4B517
```

Gross.
No one wants to open that.

No matter, because you are a web _master_ and happen to run your own website on Eleventy and host it on Netlify. You can use [redirects](https://docs.netlify.com/routing/redirects/) to share a portfolio URL like `yourname.com/work` that then redirects to the Figma link.

Here’s now.

Create a file called `_redirects` in the `src` of your Eleventy project.
You read that right: without a file extension. Then fill that file with redirects in the following syntax:

```txt
/old-url                /new-url
/old-blog/some-post     /new-blog/some-post
```

For your Figma use-case that might look like:

```txt
/work              https://www.figma.com/file/gnziUDsg08y4397dgz/File-Name-%E2%80%A2-Portfolio?node-id=2%4B517
```

That's it.
Now we just need to turn it on.

Eleventy ignores files and folders by default.
You need to tell it to pass through the `_redirects` file by leaving instructions in the `.eleventy.js` file like so:

```js
config.addPassthroughCopy("src/_redirects");
```

Here are some more thorough resources that helped me:

- [Adding Netlify redirects to an Eleventy site](https://daily-dev-tips.com/posts/adding-netlify-redirects-to-an-eleventy-site/)
- [Automate Netlify Redirects with 11ty](https://www.aleksandrhovhannisyan.com/blog/eleventy-netlify-redirects/)
