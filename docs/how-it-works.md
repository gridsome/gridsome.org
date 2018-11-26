# How it works
A quick walk-through of the core concepts of Gridsome

![Pre-rendering](./images/ssg-mode.png)

## Data sources
Connect to any data source with **source plugins** or **data store API** and get access to data in a local unified GraphQL data layer.


## The GraphQL data layer
This is where all the data in a Gridsome project is located. Gridsome pulls in content from **data sources** into a local unified **GraphQL data layer**. Data can be queried with GraphQL queries. Working with GraphQL in Gridsome is easy and you don't need to know much about GraphQL to get started.

[Learn more about Querying data here](/docs/data-query-data).

## Vue.js for front-end
Gridsome uses [Vue.js](https://vuejs.org/) for front-end framework. Vue is an approachable, simple & fun framework for building fast interfaces. Vue now has the most GitHub stars of any JavaScript UI library. This means developers like to work with it. Big companies like Alibaba, Adobe, GitLab is using Vue.js. Vue is famous for its intuitive design and shallow learning curve. This means it's easy to train staff in, even non-frontend devs and designers. Since developers will be up-and-running with Vue quickly, training costs will be kept to a minimum.


## Transformers
Transformers are **plugins** that transform nodes/content coming from data source plugins.    

## Progressive Images
Gridsome has a built-in `<g-image>` component with built-in **progressive image support**.
[Learn more here](/docs/images)

## Page pre-fetching
Gridsome pre-fetches next pages so browsing around goes fast. It uses the built-in `<g-link>` component to lazy-load prefetching when the link is in view. [Learn more here](/docs/linking).


## Deploying

**A Gridsome site is static when deployed**. That means there is no database connection when the site has been deployed - every connection happens at build time only. This makes Gridsome sites very secure. Gridsome builds two versions of every page. One HTML page that search engines can crawl for SEO-purpose, and one JavaScript file that Gridsome uses for SPA after the first page load. Next pages are lazy-loaded in the background. That makes clicking around extremely fast, and your site is 100%-SEO friendly. It even works offline and can be entirely hosted on a CDN.

**There is no connection to the GraphQL data layer when it is deployed**. To update a deployed site with the latest content you need to rebuild your site. This is how static site generators work. This can be done automatically with services like [Netlify](https://netlify.com).

- Learn more about [Deploying](/docs/deployment).

## PRPL-pattern

Gridsome follows the [PRPL-pattern by Google.](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) and optimizes your site automatically. You don't need to be a performance expert to make fast websites with Gridsome. Your site gets almost perfect scores on Google lighthouse out-of-the-box. These are some of the performance steps that Gridsome takes care of:

- Progressive Image support ⚡️ 
- CSS & JS minification ⚡️ 
- Code-splitting ⚡️ 
- HTML compressing ⚡️ 
- Critical CSS (Plugin) ⚡️ 
- Full PWA & Offline-support (plugin) ⚡️


## Alternatives

-    **[VuePress.](https://vuepress.vuejs.org/)** Another static site generator for Vue.js. It uses local markdown files for content and is perfect for documentation sites. It is possible to build anything in VuePress and Markdown (Like a blog f.ex).

-    **[Nuxt.](https://nuxtjs.org/)** A Universal Vue.js Framework for server-side rendered (SSR) apps and websites. It also has a static site generator feature, but the main focus is SSR.

-	**[Gatsby.js](https://www.gatsbyjs.org/)**  Gridsome is highly inspired by Gatsby.js (React.js based), which collects data sources and generates a static site from it. Gridsome is an alternative for Gatsby.js.
