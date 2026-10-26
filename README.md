# Saiman Silwal (202537200)

A lightweight, public course archive for Saiman Silwal (202537200). It links to nine weekly collections in the public `saimansilwal7-oss/WEB-PROGRAMMING` repository and includes a separate Group 4 project-proposal section. The site runs in a browser without account sign-in, a GitHub token, or a build step.

## Open the website

Open `index.html` in a browser, or serve this folder locally:

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000`.

## Use it

Use **Find an assignment** to search indexed filenames, or choose a weekly collection to browse its files. Select a file to preview it. HTML documents are detected from their contents even when their filenames have no extension, and render in an isolated sandbox with page scripts enabled. Markdown is formatted, images display directly, and other files appear as readable source. Previews are limited to 2 MB; use **Open raw** for larger files. The Group 4 proposal opens in a separate tab.

The GitHub public API has unauthenticated rate limits. The repository must be public. Private repositories are not supported. Non-HTML source files are preview-only and are not executed. To add another folder, add its GitHub `tree` URL and display name to `SHARED_FOLDERS` in `app.js`.

## Public website

The site is published through GitHub Pages at <https://saimansilwal7-oss.github.io/saiman-silwal-202537200/>. Its source is in the public repository <https://github.com/saimansilwal7-oss/saiman-silwal-202537200> and deploys from the `main` branch root.
