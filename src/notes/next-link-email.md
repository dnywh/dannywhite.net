---
title: Next Link and Mailto in Safari
date: 2025-03-26
description: The Next.js Link component doesn’t play nice with ‘mailto’ email links in Safari. You need to swap those instances out for regular anchor elements.
tags:
  - React
  - Next.js
  - Web
  - HTML
  - Email
related:
  - encoded-email
audience: People building websites with Next.js.
---

Using the [Next.js Link](https://nextjs.org/docs/app/api-reference/components/link) component for `mailto` email links works fine everywhere except for Safari, which throws the following JavaScript alert upon tap:

<figure>
  <img src="{% extSrc 'notes/safari-mailto-next-link' %}"
  srcset="{% extSrcset 'notes/safari-mailto-next-link' %}"
  alt="A browser alert on Safari saying 'This website has been blocked from automatically composing an email.'"
  width="1308"
  height="782"
  loading="lazy">
  <figcaption>“This website has been blocked from automatically composing an email.”</figcaption>
</figure>

It’s probably caused by the Link component doing some fancy [intercepting](https://stackoverflow.com/a/42540729/2009441), which looks suspect to the browser. **You can fix this by just using a regular `<a>` tag instead**.

In other words, take this problematic starting point:

```jsx
import Link from "next/link";

<Link href="mailto:you@example.com">Email me</Link>;
```

And just swap out the `<Link>` with a regular HTML `<a>` tag:

```jsx
<a href="mailto:you@example.com">Email me</a>
```

The same problem and solution applies to `tel` and `sms` links, too.

## Better

I personally roll-up my own `Hyperlink` component with an `as` prop. It renders either a `Link` component or `<a>` tag depending on what I pass through as a value to an `as` prop. Here’s what it looks like in practice:

```jsx
<Hyperlink as="anchor" href="mailto:you@example.com">
  Email me
</Hyperlink>
```

This setup lets me define styles in one component and just occasionally override the element type for email links via that `as` prop, like so:

```jsx
import Link from "next/link";
import { styled } from "@pigment-css/react";

// Define styles
const getSharedStyles = ({ theme }) => ({
  color: theme.colors.text.primary,
  fontWeight: "500",
  textDecoration: "underline",
  transition: "opacity 150ms ease-in-out",
  "&:hover": {
    opacity: 0.65,
  },
});

// Share the same styles across whatever element is rendered
const StyledLink = styled(Link)(getSharedStyles);
const StyledAnchor = styled("a")(getSharedStyles);

// Export the component
export default function Hyperlink({ as = Link, children, href, ...props }) {
  if (as === "anchor") {
    return (
      <StyledAnchor href={href} {...props}>
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  );
}
```

There’s probably a way to do that automatically by reading the `href` contents but that’s a little too fancy for my liking. I prefer to be explicit about what’s being rendered, when.

## Best

You should also [encode your email address](/notes/encoded-email) so it doesn’t end up forever receiving spam.
