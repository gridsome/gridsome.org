# How it works

Quick introduction to core Gridsome concepts

### The GraphQL layer

The GraphQL layer is powered by a in-memory database and is only available in development & serve mode. Static generating uses the database to quickly generate hundreds to thousands of HTML pages in seconds. Data are pulled into the GraphQL layer with Source plugins.

![Git workflow](./images/graphql.png)

[Learn more about the GraphQL layer](/docs/graphql)

### Static site generation

Gridsome generates all pages and endpoints at build time. It can generate big sites extremely fast thanks to the internal GraphQL database.

It creates two versions of every page. One HTML page that search engines can crawl for SEO-purpose, and one JavaScript file that Gridsome uses for SPA after first page load. Next pages are loaded in the background with Service workers. That makes browsing around extremely fast, and your site is 100%-SEO friendly. It even works offline.

### PRPL-pattern

Gridsome follows the [PRPL-pattern by Google.](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) and optimizes your site automatically. You don't need to be a performance expert to make fast websites with Gridsome. Your site gets almost perfect scores on Google lighthouse out-of-the-box. These are some of the performance steps that Gridsome takes care of:

- Image compressing & lazy-loading ⚡️ 
- CSS & JS minification ⚡️ 
- Code-splitting ⚡️ 
- HTML compressing ⚡️ 
- Critical CSS (Plugin) ⚡️ 
- Full PWA & Offline-support (plugin) ⚡️

## Alternatives

-	**[VuePress.](https://vuepress.vuejs.org/)** Another static site generator for Vue.js. It uses local markdown files for content and is perfect for documentation sites. It is possible to build anything in VuePress and Markdown (Like a blog f.ex).

-	**[Nuxt.](https://nuxtjs.org/)** A Universal Vue.js Framework for server side rendered (SSR) apps and websites. It also has a static site generator feature, but the main focus is SSR.

-	**[Gatsby.js](https://www.gatsbyjs.org/)**  Gridsome is highly inspired by Gatsby.js (React.js based), which collects data sources and generates a static site from it. Gridsome is an alternative for Gatsby.js.
