# scripts

These files are helper scripts for using `rclone` to mirror the `static` bucket contents on a Mac.

I keep a copy of the `static` folder locally for these reasons:

1. To back up stuff that’s on R2.
2. To make it easier to upload and organise files as I go.

You won’t see this `static` folder on the public repo because:

- It’s huge.
- I’ve added it to `.gitignore` for that reason.

So these are mainly instructions-to-self for when I set this repo up on a new machine.

## Folder structure

```text
static/
├── ephemera/       # scanned bits and bobs
├── img/            # miscellaneous
├── photos/         # visual diary
├── assets/         # catch-all for PDFs etc
├── video/          # catch-all for video
└── _drafts/        # never synced (see below)
```

Anything in `_drafts` will be ignored by the scripts. Other folders may change over time as I finesse my setup.

## Requirements

1. `brew install rclone`
2. `rclone config` to set up remote R2 (credentials for each step elsewhere)

Then make the scripts executable:

```bash
chmod +x scripts/static-sync.sh scripts/static-pull.sh
```

## Scripts

Just one script for each direction, both of which are destructive.

### Publish

`static-sync.sh` is for publishing new content (local → R2).

> [!WARNING]  
> `static-sync.sh` is destructive. If you delete (or don’t have) a file locally, it **will be deleted from R2**.

### Restore

`static-pull.sh` is for restoring the mirror (R2 → local) on a new machine (or after deleting your local mirror).

> [!WARNING]  
> `static-pull.sh` is destructive. It will delete local files that are not already in R2.

## Usage

Run the scripts from the repo root. Always do a dry run first:

```bash
./scripts/static-sync.sh --dry-run
./scripts/static-pull.sh --dry-run
```

Then, only when you’re happy nothing will be deleted, run the real thing:

```bash
./scripts/static-sync.sh
./scripts/static-pull.sh
```

## Quilt photo feed

Quilt photo records live in `src/content/photos/photos.json` in the `quilt` repo. The image files themselves should live in this repo's local `static/photos/` mirror and be published to R2 with `static-sync.sh`.

Use stable, date-prefixed paths:

```text
static/photos/2026/2026-05-28-waratah-mosaic.jpg
```

The matching Quilt content record should store the R2-relative path, without the local `static/` prefix:

```json
{
  "id": "waratah-mosaic",
  "title": "Waratah mosaic",
  "date": "2026-05-28",
  "images": [
    {
      "src": "photos/2026/2026-05-28-waratah-mosaic.jpg",
      "width": 2000,
      "height": 1500,
      "alt": "A mosaic that looks like a waratah"
    }
  ],
  "caption": "A mosaic that looks like a waratah.",
  "tags": ["patterns", "flowers"]
}
```

For now this is intentionally manual:

1. Add the exported image to `static/photos/<year>/`.
2. Run `./scripts/static-sync.sh --dry-run`.
3. If the dry run looks right, run `./scripts/static-sync.sh`.
4. Add or update the matching record in Quilt.
