# Getting started
> Gridsome is a Vue.js-powered, modern site generator for building the fastest possible websites for any Headless CMS, APIs or Markdown-files. Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert. 

## Why Gridsome?

- **Local development with hot-reloading** - See code changes in real-time.
- **Data source plugins** - Use it for any popular Headless CMSs, APIs or Markdown-files. 
- **File-based page routing** - Quickly create and manage pages with files.
- **Vue.js for frontend** - A lightweight and approachable front-end framework.
- **Auto-optimized code** - Get code-splitting and asset optimization out-of-the-box.
- **Static files generation** - Deploy securely to any CDN or static web host.

[Learn more about how Gridsome works](/docs/how-it-works)

## Install Gridsome

### Prerequisites
Gridsome requires **Node.js** and recommends **Yarn**. [How to setup](/docs/prerequisites)

### 1. Install Gridsome CLI tool

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to create a new project </li>
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

### 3. Next steps

1. Create `.vue` components in the `/pages` directory to create page routes.
2. Use `gridsome build` to generate static files in a `/dist` folder

[Learn more about Pages here](/docs/pages)


## Basic concepts

### The GraphQL data layer
This is where all the data in a Gridsome project is located. Add data from any **data sources** with [Source plugins](/plugins) or with the [Data Store API](/docs/data-store-api). Data can be queried with GraphQL queries. 

The GraphQL data layer makes it very easy to work with data, and you don't need to deal with rest APIs. **You don't need to know much about GraphQL to get started.**


[Learn more about Querying data here](/docs/data-query-data).

### Vue.js for templating
Gridsome uses [Vue.js](https://vuejs.org/) as frontend framework. Vue is an approachable, simple & fun framework for building fast interfaces. Vue now has the most GitHub stars of any JavaScript UI library. Big companies like Alibaba, Adobe, GitLab is using Vue.js. Vue is famous for its intuitive design and shallow learning curve. This means it's easy to train staff in, even non-frontend devs and designers. Since developers will be up-and-running with Vue quickly, training costs will be kept to a minimum.


### Built-in Progressive Image support
Gridsome has a built-in `<g-image>` component with built-in **progressive image support**.
[Learn more here](/docs/images)

### Page pre-fetching for fast browsing
Gridsome pre-fetches next pages so browsing around goes fast. It uses the built-in `<g-link>` component to lazy-load prefetching when the link is in view. [Learn more here](/docs/linking).


### Deploying

**A Gridsome site is static when deployed**. That means there is no database connection when the site has been deployed - every connection happens at build time only. This makes Gridsome sites very secure. Gridsome builds two versions of every page. One HTML page that search engines can crawl for SEO-purpose, and one JavaScript file that Gridsome uses for SPA after the first page load. Next pages are lazy-loaded in the background. That makes clicking around extremely fast, and your site is 100%-SEO friendly. It even works offline and can be entirely hosted on a CDN.

> To update a live site with the latest content you need to redeploy your site. This is how static site generators work. This can be done automatically with services like [Netlify](https://netlify.com) & [AWS Amplify](https://aws.amazon.com/amplify/console).

- Learn more about [Deploying](/docs/deployment).

### Built-in performance optimization

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


### Learn more...

- [How it works](/docs/how-it-works)
- [How to deploy](/docs/deployment)
