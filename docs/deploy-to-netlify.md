# Deploy to Netlify

Netlify is an excellent solution for deploying and hosting Gridsome sites. Netlify is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps. They provide continuous deployment (Git-triggered builds), an intelligent, global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and more.

Their free tier includes unlimited personal and commercial projects, HTTPS, continuous deployment from public or private repos and more.

To deploy your Gridsome site to Netlify, go to the create a new site page, select your project repo from GitHub, GitLab, or Bitbucket.

Add these build settings:
- **Build Command:** `gridsome build`
- **Publish directory:** `dist`

Alternatively, you can deploy using a `netlify.toml` file. Create a file in the root of your project called `netlify.toml`, with the following configuation.

```toml
  [build]
    publish = "dist"
    command = "gridsome build"
```

More information on `netlify.toml` files can be found in the [Netlify docs](https://www.netlify.com/docs/netlify-toml-reference/).

**Note:**

You do not need to setup any redirect rules for a Gridsome site to work with Netlify. Gridsome generates HTML files for every path on your site so rewrite rules aren't necessary (except for dynamic pages).
