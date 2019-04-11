# Deploy to GitHub pages

GitHub Pages allows you to deploy your site to GitHub's free static site hosting service.

There's a few steps to complete:

1. Install `gh-pages` using `yarn add gh-pages` or `npm i gh-pages`

2. Add the following to `gridsome.config.js`:

```js
  siteUrl: 'https://<your-github-username>.github.io',
  pathPrefix: '/<your-gridsome-repo-name>',
```

3. Add the following scripts to your `package.json`:

```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
```

4. Run the command `npm run deploy`

5. Go to GitHub's website and make sure your Repo's settings under "GitHub Pages" show the `gh-pages` branch under "Source".

**Notes**

GitHub Pages allows you to have a "Github user page" that acts as a profile/main page on `<your-github-username>.github.io` by having a repo named `<your-github-username>.github.io`.
* If you are deploying to your GitHub user page (your main site on `<username>.github.io`):
  * Make the following adjustments to your `package.json`:
    ```json
    - "deploy": "gh-pages -d dist",
    + "deploy": "gh-pages -b master -d dist",
    ```
  * And Remove this line from `gridsome.config.js`:
    ```js
    - pathPrefix: '/<your-gridsome-repo-name>',
    ```
* If you are using a custom URL such as `www.yourname.com` you will need to change `gridsome.config.js` to:
  ```js
  siteUrl: 'https://www.yourname.com',
  ```
* If you are using an apex domain for your GitHub user page (ie. `https://yourname.com` points to all of your GitHub Pages sites), and your Gridsome project is *not* your GitHub user page (not on the root `https://yourname.com` page, but a separate repo), then you will need to make sure `pathPrefix` matches your gridsome project's repo name in `gridsome.config.js`:
  ```js
  pathPrefix: '/<your-gridsome-repo-name>',
  ```