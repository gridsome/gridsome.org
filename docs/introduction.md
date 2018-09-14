# Introduction to Gridsome
<p class="lead">
	⚡️ A blazing fast static site generator powered by Vue.js
</p>

Gridsome is a static site generator powered by GraphQL and Vue.js. It uses GraphQL as a single source of truth for all the data connected to the website. You can add one or many sources that pulls data from any CMS, local Markdown or content APIs into the GraphQL layer. Data can be browsed in a local GraphQL interface (playground) and be inserted anywhere quickly. It also has Tranformer plugins that can manipulate the data coming from GraphQL. Gridsome is highly inspired by Gatsby (A React.js alternative).

Gridsome was built because there was no good Vue.js alternative to Gatsby.


## How it works
Gridsome is a static site generator that creates all pages and endpoints at build time. It creates two versions of every page. One HTML page that search engines can crawl for SEO-purpose, and one JavaScript file that Gridsome uses for SPA after first page load. Next pages are loaded in the background with Service workers. This makes browsing around extremely fast and your site is 100%-SEO friendly. It even works offline.

Gridsome takes automatically care of most website optimization check lists and you get almost perfect Lighthouse scores out-of-the-box.

Data from GraphQL are fetched at build time, so you need to re-deploy if you want your site to have the latest data live. This usually takes a couple of seconds, and there is services that does this automatically.


## The alternatives
-	**VuePress.** Another static site generator for Vue.js. It uses local markdown files as data source for content and is perfect for documentation sites. It is possible to build anything in VuePress and Markdown (Like a blog f.ex), but its does not have the GraphQL layer that Gridsome has.

-	**Nuxt.**  A Universal Vue.js Framework that makes building Server side rendered (SSR) apps and websites easy in Vue. It also has a static site generator feature. It does not have the GraphQL layer that Gridsome has.

-	**Gatsby (React.js).**  Gridsome is highly inspired by Gatsby.js. Gridsome is the Vue.js alternative to this framework.

