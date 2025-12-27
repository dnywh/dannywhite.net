#!/usr/bin/env bash
set -euo pipefail

# Restore R2 -> local mirror (safe for a new machine).
# Usage:
#   ./scripts/static-pull.sh
#   ./scripts/static-pull.sh --dry-run
#   DRY_RUN=1 ./scripts/static-pull.sh

SCRIPT_DIR=$(cd -- "$(dirname -- "$0")" && pwd)
REPO_DIR=$(cd -- "${SCRIPT_DIR}/.." && pwd)

SRC="r2:static"
DEST="${REPO_DIR}/static"

mkdir -p "$DEST"

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
