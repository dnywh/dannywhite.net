# dannywhite.net

My home on the internet.

See the [Colophon](https://dannywhite.net/colophon) for details on its design and build.

## Usage

```shell
# Copy the environment template and fill in your Raindrop access token
cp .env.example .env

# Edit .env and add your Raindrop access token
# RAINDROP_ACCESS_TOKEN=your_token_here

# Install dependencies and start the development server
npm install
npm start
```

### Prerequisites

I pull data from my [Raindrop](https://raindrop.io) account to power the [Trove](https://dannywhite.net/colophon#trove). You’ll either need to amend the affected areas to use your own Raindrop data or remove them entirely. Raindrop data is referenced in [trove.js](/src/_data/trove.js), [eleventy.js](.eleventy.js), and [home.njk](/src/_includes/layouts/home.njk).
