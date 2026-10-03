# Badpoet edition

This is a tailored fork of [watsonbox/exportify](https://github.com/watsonbox/exportify), based on upstream revision `2c226ea246215688cf607910666c05e7ee4bd875`. Original copyright and MIT license are retained.

Changes for [Badpoet Studio](https://github.com/mastodonsharkgirl/badpoet-studio):

- UTF-8 BOM helps spreadsheet programs display multilingual song titles correctly.
- Absent metadata exports as empty cells instead of the literal words `null` or `undefined`.
- Provider text beginning with spreadsheet formula prefixes is escaped as text. A leading apostrophe in such a cell is intentional.
- Existing release-date precision and album image URL fields remain available to the Studio importer.
- Quoted fields retain embedded quotes, commas and newlines.
- This fork does not send Bugsnag telemetry to the upstream author's account.
- CI checks changes with read-only permissions. Upstream automatic Pages deployment is removed; no site is deployed by a push.

Run focused checks with Node 24: `node --test tests/badpoet-csv.test.mjs`.

The full Exportify browser app still requires Spotify application configuration and normal account authorization. No OAuth client IDs or account tokens are supplied by Badpoet. The integrated Studio CSV/ZIP importer works from an existing export without a login. This repository has not been deployed to a public website.

## Follow upstream

Keep `upstream` pointing to watsonbox/exportify. Put future changes in a branch and pull request; rerun both upstream tests and the Badpoet checks before deploying. This fork's code license does not grant rights to lyric text or music.
