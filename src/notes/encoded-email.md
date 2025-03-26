---
title: Encoded Email Addresses
date: 2025-03-26
description: Don’t be a sucker. Encode your published email address so it doesn’t end up in someone’s spam list.
tags:
  - Web
  - HTML
  - JavaScript
  - Email
  - React
related:
  - next-link-email
audience: People building websites with links to email addresses they don’t want spammed.
---

If you’re [going to put your email address on the web](/notes/next-link-email) without obfuscating it in some way, you’re going to get spam. It’s like Murphy’s Law but for nerds.

That obfuscation is a tricky balance. You want good people to see (or tap) your email address whilst also preventing those pesky spammers from doing the same.

I’ve managed to strike this balance by encoding my email address before I publish it. JavaScript then decodes it back into a readable form when someone loads the relevant webpage.

Almost all (normal) people keep JavaScript enabled but most spammers, for whatever reason, can’t or won’t get through that hurdle. I assume there are enough plain-text suckers out there to keep them busy.

## How

[Email Encoder](https://email-encoder.com) is fine for one-offs. But I now mostly use the `btoa()` and `atob()` [methods](https://developer.mozilla.org/en-US/docs/Web/API/Window/atob#examples), with the `atob()` method running on the client-side.

In other words, I manually run something like the following in Node or the browser console:

```js
btoa("hello@example.com");
```

That gives me an encoded version of that email address which I can use in, say, a React component:

```jsx
<EncodedEmailHyperlink address="aGVsbG9AZXhhbXBsZS5jb20=">
  Email me
</EncodedEmailHyperlink>
```

That example React component then uses the `atob()` method to decode the above `address` value back into its original string. Here’s what it looks like:

```jsx
import { useState, useEffect } from "react";
import Hyperlink from "@/components/Hyperlink";

export default function EncodedEmailHyperlink({ address, children }) {
  const [decodedEmail, setDecodedEmail] = useState("");

  useEffect(() => {
    const decoded = atob(address);
    setDecodedEmail(decoded);
  }, []);

  return (
    <Hyperlink as="anchor" href={`mailto:${decodedEmail}`}>
      {children}
    </Hyperlink>
  );
}
```

You could have a `<noscript>` fallback there for folks who have disabled JavaScript but that seems like an extreme edge case, and one that’s hard to work around. What would you give them in lieu of your email address?
