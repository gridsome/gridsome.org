---
intro: true
---

# Break free from the monolithic CMS limits

> Gridsome lets you build websites using data from multiple sources such as modern Headless CMS, Content API's & Markdown-files. Gridsome takes your data and generates incredible fast, secure & static HTML files that can be deployed to any global CDN for better and cheaper hosting.

## Why Gridsome?

- **Vue.js for frontend** - The simplest & most approachable frontend framework.
- **Fast by default** - Gridsome builds performance into every page automatically.
- **Source any data** - Bring data from your favorite CMS, APIs or Markdown-files.
- **GraphQL data layer** - Centralized data management powered by GraphQL.
- **Built-in pagination & taxonomy support** - Super flexible data handling.
- **Local development with hot-reloading** - See code changes in real-time.
- **Gridsome Image** - A built-in component that resizes & optimizes images on-the-fly.
- **Gridsome Link** - A built-in component that lazy pre-fetches next pages in background.
- **Automatic Code Splitting** - Only load what's needed per page.
- **Static file generation** - Deploy fast & securely to any CDN or static web host.
- **File-based page routing** - Any `Page.vue` file in `src/pages` is a static route.
- **Dynamic routing** - Any `[param].vue` file in `src/pages` is a dynamic route
- **Plugin library** - Extend Gridsome with its rich plugin ecosystem.


## How it works
Gridsome **generates static html** that hydrates into a **Vue SPA once loaded in the browser. This means you can build both **static websites** & **dynamic apps** with Gridsome. It's perfect for your [JAMstack](/docs/jamstack) workflow. 

Gridsome builds one `.html` file and one `.json` file for every page. After first page load it only uses the `.json` files to prefetch and load data for the next pages. It also builds a `.js` bundle for each page that needs it (code splitting).

It uses [vue-router](https://router.vuejs.org/) for SPA routing, and [vue-meta](https://vue-meta.nuxtjs.org/) for managing `<head>`.

Gridsome adds a `57kB min gzip` JS bundle size by default.(vue.js, vue-router, vue-meta and some for image lazy loading).

[Learn more about how it works.](/docs/how-it-works)


## Example data sourcing

## Gridsome VS Nuxt
## Gridsome VS Gatsby
## Contributors
## Sponsors
## The Team