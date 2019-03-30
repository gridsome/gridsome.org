# Getting started with Gridsome

> Gridsome is an open-source Vue.js-powered modern site generator that helps developers build [JAMstack](/docs/jamstack) websites and PWAs for any data source. Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert.

### Core features

- **Local development with hot-reloading** - See code changes in real-time.
- **Pull data from anywhere** - Use any Headless CMS, APIs or Markdown-files for data.
- **GraphQL data layer** - Query, filter, paginate from a local unified GraphQL data layer.
- **File-based page routing** - Quickly create and manage routes with files.
- **Follows [PRPL pattern](/docs/how-it-works#the-prpl-pattern)** - Gridsome builds ultra performance into every page automatically.
- **Progressive Images** - Auto image resizing, compressing & lazy loading of images.
- **Smart link prefetching** - Load next pages when link is in view for ultra fast browsing.
- **Static files generation** - Deploy securely to any CDN or static web host.


### Prerequisites
You should have basic knowledge about HTML, CSS, [Vue.js](https://vuejs.org) and how to use the [Terminal](https://www.linode.com/docs/tools-reference/tools/using-the-terminal/). Knowing how [GraphQL](https://www.graphql.com/) works is a plus, but not required. Gridsome is a great way to learn it.

Gridsome requires **Node.js** and recommends **Yarn**. [How to setup](/docs/prerequisites)


### 1. Install Gridsome CLI tool

Using **Yarn:**  `yarn global add @gridsome/cli`

Using **NPM:**  `npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to create a new project </li>
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

### 3. Next steps

1. Create `.vue` components in the `/pages` directory to create page routes.
2. Use `gridsome build` to generate static files in a `/dist` folder


- [How it works](/docs/how-it-works)
- [How Pages work](/docs/pages)
- [How to deploy](/docs/deployment)
