# How it works

> Gridsome is a static site generator that **pre-renders** all pages at build time. This means that your site does not require any back-end and can be entirely hosted on any CDN or FTP. 

### GraphQL for data
Gridsome pulls in content from **data sources** into a unified **GraphQL data layer**. You can add multiple data source plugins. Data are pulled in when you start dev project and at build time. **The GraphQL layer is not used in production. It's there to make it easier to work with data in development mode and for fast static site generation.**

### The build process (Pre-rendering)

**Gridsome builds two versions of every page**. One HTML page that search engines can crawl for SEO-purpose, and one JavaScript file that Gridsome uses for SPA after first page load. Next pages are loaded in the background with Service workers. That makes browsing around extremely fast, and your site is 100%-SEO friendly. It even works offline and can be entirely hosted on a CDN.


### Fast by default

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

-	**[Gatsby.js](https://www.gatsbyjs.org/)**  Gridsome is highly inspired by Gatsby.js (React.js based), which collects data sources and generates a static site from it. Gridsome is an alternative for Vue.js.
