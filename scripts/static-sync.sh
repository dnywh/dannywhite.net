#!/usr/bin/env bash
set -euo pipefail

# Publish local mirror -> R2 (destructive on destination).
# Usage:
#   ./scripts/static-sync.sh
#   ./scripts/static-sync.sh --dry-run
#   DRY_RUN=1 ./scripts/static-sync.sh

SCRIPT_DIR=$(cd -- "$(dirname -- "$0")" && pwd)
REPO_DIR=$(cd -- "${SCRIPT_DIR}/.." && pwd)

SRC="${REPO_DIR}/static"
DEST="r2:static"

DRY_FLAG=""
if [[ "${1:-}" == "--dry-run" || "${1:-}" == "-n" ]]; then
  DRY_FLAG="--dry-run"
elif [[ "${DRY_RUN:-0}" == "1" ]]; then
  DRY_FLAG="--dry-run"
fi

rclone sync "$SRC" "$DEST" \
  --exclude ".DS_Store" \
  --exclude "**/.DS_Store" \
  --exclude "._*" \
  --exclude "**/._*" \
  --exclude "_drafts/**" \
  --progress \
  $DRY_FLAG
