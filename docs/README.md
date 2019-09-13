# Getting started
> Gridsome is an open source [Vue.js-powered](https://vuejs.org/) modern site generator for building [JAMstack](/docs/jamstack/) websites, apps & PWAs that are [fast by default](/docs/fast-by-default/) 🚀.

### Why Gridsome?

- **Local development with hot-reloading** - See code changes in real-time.
- **Data source plugins** - Connect to any popular Headless CMSs, APIs or Markdown-files.
- **File-based page routing** - Quickly create and manage routes with files.
- **Centralized data management** - Pull data into a local, unified GraphQL data layer.
- **Vue.js for front-end** - A lightweight and approachable front-end framework.
- **Auto-optimized code** - Get code-splitting and asset optimization out-of-the-box.
- **Static files generation** - Deploy securely to any CDN or static web host.

## Prerequisites
You should have basic knowledge about HTML, CSS, [Vue.js](https://vuejs.org) and how to use the [Terminal](https://www.linode.com/docs/tools-reference/tools/using-the-terminal/). Knowing how [GraphQL](https://www.graphql.com/) works is a plus, but not required. Gridsome is a great way to learn it.

Gridsome requires [Node.js](https://nodejs.org/) (v8.3+) and recommends [Yarn](https://yarnpkg.com).

## How to install

### 1. Install Gridsome CLI tool

- Using **YARN:**  `yarn global add @gridsome/cli`
- Using **NPM:**  `npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to create a new project </li>
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

### 3. Next steps

1. Create `.vue` components in the `/pages` directory to create page routes.
2. Use `gridsome build` to generate static files in a `/dist` folder



#### Learn more

- [Core concepts (Pages, Collections etc.)](/docs/core-concepts/)
- [How to deploy](/docs/deployment/)

## Alternatives

-    **[VuePress.](https://vuepress.vuejs.org/)** Another static site generator for Vue.js. It uses local markdown files for content and is perfect for documentation sites. It is possible to build anything in VuePress and Markdown (Like a blog f.ex).

-    **[Nuxt.](https://nuxtjs.org/)** A Universal Vue.js Framework for server-side rendered (SSR) apps and websites. It also has a static site generator feature, but the main focus is SSR.

-	**[Gatsby.js](https://www.gatsbyjs.org/)**  Gridsome is highly inspired by Gatsby.js (React.js based), which collects data sources and generates a static site from it. Gridsome is an alternative for Gatsby.js.


