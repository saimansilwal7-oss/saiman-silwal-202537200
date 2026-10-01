# Saiman Silwal (202537200)

A lightweight viewer for the shared folders in the public `saimansilwal7-oss/WEB-PROGRAMMING` GitHub repository, branded as Saiman Silwal (202537200). The site only lists WEEK 1, WEEK2, WEEK3, WEEK3.2, and WEEK4; it does not display the rest of the repository or the account's other repositories. It runs in a browser without account sign-in, a GitHub token, or a build step.

## Open the website

Open `index.html` in a browser, or serve this folder locally:

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000`.

## Use it

Choose a week at the top to browse only that linked folder. Open nested folders or select files to preview them. HTML files render in a sandbox with scripts disabled, Markdown is formatted, images display directly, and other files appear as readable text. Previews are limited to 2 MB; use **Open raw** for larger files.

The GitHub public API has unauthenticated rate limits. The repository must be public. Private repositories are not supported, and this site does not execute source code. To add another folder, add its GitHub `tree` URL and display name to `SHARED_FOLDERS` in `app.js`.

## Publish on GitHub Pages

Publishing must be completed while signed in to the GitHub account because this workspace has no GitHub publishing credentials.

1. Create a new **public** repository named `saiman-silwal-202537200` under `saimansilwal7-oss`.
2. Upload `index.html`, `styles.css`, and `app.js` from this folder to the repository root and commit them to `main`.
3. In the new repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. After Pages finishes deploying, the public site URL will be `https://saimansilwal7-oss.github.io/saiman-silwal-202537200/`.
