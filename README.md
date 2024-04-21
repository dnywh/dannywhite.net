# dannywhite.net

My home on the internet.

See the [Colophon](https://dannywhite.net/colophon) for details on its design and build.

## Usage

```shell
npm install
npm start
```

### Prerequisites

I pull data from my [Raindrop](https://raindrop.io) account to power the [Trove](https://dannywhite.net/colophon#trove). You'll either need to amend the affected areas to use your own Raindrop data or remove them entirely. They are [.env](.env.example) and [trove.js](/src/_data/trove.js). Their data is referenced in [eleventy.js](.eleventy.js) and [home.njk](/src/_includes/layouts/home.njk).
