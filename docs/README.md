# Introduction

> Gridsome is a free and open source [Vue.js-powered](https://vuejs.org/) framework for building websites & apps that are [fast by default](/docs/fast-by-default/).

### Get started

<div class="grid-cols mb">

<Card link="/docs/quick-start">

<h4>Quick start</h4>
<small>Get quickly up and running with Gridsome by using default starters</small>

</Card>

<Card link="/docs/tutorial" >

<h4>Tutorial</h4>
<small>Step-by-step instructions on how to install and use Gridsome</small>

</Card>

<Card link="/docs/core-concepts" >

<h4>Recipes</h4>
<small>Quick answers for how to accomplish common tasks with Gridsome</small>

</Card>

</div>


### Why Gridsome?

- **Vue.js for frontend** - The simplest & most approachable frontend framework.
- **Local development with hot-reloading** - See code changes in real-time.
- **File-based page routing** - Any `Name.vue` file in `src/pages` is a static route.
- **Dynamic routing** - Any `[param].vue` file in `src/pages` is a dynamic route.
- **Static file generation** - Deploy securely to any CDN or static web host.
- **Data sourcing** - Use any Headless CMSs, APIs or Markdown-files for data.
- **GraphQL data layer** - Simpler data management with a centralized data layer.
- **Automatic Code Splitting** - Builds ultra performance into every page.
- **Plugin ecosystem** - Find a plugin for any job.


### How it works
Gridsome **generates static html** that hydrates into a <strong>Vue SPA</strong> once loaded in the browser. This means you can build both **static websites** & **dynamic apps** with Gridsome. It's perfect for your [JAMstack](/docs/jamstack) workflow. 

Gridsome builds one `.html` file and one `.json` file for every page. After first page load it only uses the `.json` files to prefetch and load data for the next pages. It also builds a `.js` bundle for each page that needs it (code splitting).

It uses [vue-router](https://router.vuejs.org/) for SPA routing, and [vue-meta](https://vue-meta.nuxtjs.org/) for managing `<head>`.

Gridsome adds a `57kB min gzip` JS bundle size by default.(vue.js, vue-router, vue-meta and some for image lazy loading).

[Learn more about how it works.](/docs/how-it-works)


import Newsletter from '@/components/Newsletter.vue'

<div>
	<Newsletter/>
</div>

