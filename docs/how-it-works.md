# How it works 核心原理

快速简介

Quick introduction to core Gridsome concepts

### The GraphQL layer 查询层

查询层仅在开发和服务模式下可用，使用内存数据库驱动。静态生成功能可以在读取数据源节点后，快速生成成百上千个网页。数据通过插件导入查询层。

The GraphQL layer is powered by a in-memory database and is only available in development & serve mode. Static generating uses the database to quickly generate hundreds to thousands of HTML pages in seconds. Data are pulled into the GraphQL layer with Source plugins.

![Git workflow](./images/graphql.png)

[Learn more about the GraphQL layer](/docs/graphql)


### Static site generation 静态站点生成

在编译阶段，通过`graphql`数据库，快速生成页面。

Gridsome generates all pages and endpoints at build time. It can generate big sites extremely fast thanks to the internal GraphQL database.

每个页面将有两个版本。一个是`html`页面，便于搜索引擎通过`SEO`技术查询。一个`js`文件，供首屏加载后使用单页面应用`SPA`功能。后续的页面通过`service worker`后台加载。上述技术保证了页面加载速度极快，并且网页可以被搜索引擎快速查找，还支持离线功能。

It creates two versions of every page. One HTML page that search engines can crawl for SEO-purpose, and one JavaScript file that Gridsome uses for SPA after first page load. Next pages are loaded in the background with Service workers. That makes browsing around extremely fast, and your site is 100%-SEO friendly. It even works offline.


### PRPL-pattern 设计范式

通过谷歌的`PRPL`设计范式自动优化网页。你无须成为性能测试专家，网站即可达到最优性能，在一下方面都可以自动优化。

Gridsome follows the [PRPL-pattern by Google.](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) and optimizes your site automatically. You don't need to be a performance expert to make fast websites with Gridsome. Your site gets almost perfect scores on Google lighthouse out-of-the-box. These are some of the performance steps that Gridsome takes care of:

- Image compressing & lazy-loading ⚡️ 
- CSS & JS minification ⚡️ 
- Code-splitting ⚡️ 
- HTML compressing ⚡️ 
- Critical CSS (Plugin) ⚡️ 
- Full PWA & Offline-support (plugin) ⚡️


## Alternatives 相似产品

-	**[VuePress.](//https://vuepress.vuejs.org/)** Another static site generator for Vue.js. It uses local markdown files for content and is perfect for documentation sites. It is possible to build anything in VuePress and Markdown (Like a blog f.ex), but it does not have the GraphQL layer that Gridsome has.

-	**[Nuxt.](https://nuxtjs.org/)**  A Universal Vue.js Framework that makes building Server side rendered (SSR) apps and websites easy. It also has a static site generator feature, but the main focus is SSR. It doesn't have a GraphQL layer like Gridsome.

-	**[Gatsby.js](https://www.gatsbyjs.org/)**  Gridsome is highly inspired by Gatsby.js (React.js based). Gridsome is the Vue.js alternative to this framework.
