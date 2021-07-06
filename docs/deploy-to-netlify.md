# Deploy to Netlify

Netlify is an excellent solution for deploying and hosting Gridsome sites. Netlify is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps. They provide continuous deployment (Git-triggered builds), an intelligent, global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and more.

Their free tier includes unlimited personal and commercial projects, HTTPS, continuous deployment from public or private repos and more. Here are a few ways to deploy your Gridsome applications to Netlify:

## From your Git repository

To deploy your Gridsome site to Netlify, go to your [Netlify app](https://app.netlify.com/) and click `New site from Git`. Select your project repo from either GitHub, GitLab, or Bitbucket.

Add these build settings:

- **Build Command:** `gridsome build`
- **Publish directory:** `dist`

And click `Deploy Site` to deploy your application.

Alternatively, you can specify your deploy settings from a `netlify.toml` file. Create a file in the root of your project called `netlify.toml`, with the following configuation.

```toml
[build]
  publish = "dist"
  command = "gridsome build"
```

These commands will tell Netlify to prefill your build settings with the provided configuration when deploying your Gridsome application.
More infomation on `netlify.toml` files can be found in the [Netlify docs](https://www.netlify.com/docs/netlify-toml-reference/).

## From the terminal

Netlify also allows you to deploy Gridsome applications directly from the terminal.

Install the Netlify CLI.

```bash
npm install netlify-cli -g
```

Log in to your Netlify account via the CLI.

```bash
netlify login
```

In your project's folder run the deploy command.

```bash
netlify deploy
```

The default command `netlify deploy` will deploy a draft of the site. To deploy a live version, specify the prod flag.

```bash
netlify deploy --prod
```

**Note:**

You do not need to setup any redirect rules for a Gridsome site to work with Netlify. Gridsome generates HTML files for every path on your site so rewrite rules aren't necessary (except for dynamic pages).
