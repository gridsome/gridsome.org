# Fast by default
> Gridsome builds ultra performance into every page automatically. You get code splitting, asset optimization, progressive images, and link prefetching out of the box. With Gridsome you get almost perfect page speed scores by default.

## What makes Gridsome sites fast?
1. [Pre-rendered HTML](#pre-rendered-html). Nothing beats static content in speed.
2. [Automatic Code Splitting](#the-prpl-pattern) so only what you need is loaded per page.
2. [Follows the PRPL-pattern](#the-prpl-pattern) for instant page loads.
3. [Smart link prefetching](#smart-link-prefetching) that uses Intersection Observer to load next pages.
4. [Progressive Images](#progressive-images) with automatic image compression and lazy loading.
5. [Vue.js SPA](#progressive-images) for fast browsing with no page refresh.

## Pre-rendered HTML

Gridsome pre-renders HTML at build time (Generates static files). Gridsome sites can be hosted anywhere, even on a CDN. There is no need for a Node.js server.

A static site gives you many benefits:

- ⚡️ **Better Performance.** Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.

- ⚡️ **Higher Security.** With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.

- ⚡️ **Cheaper, Easier Scaling.** When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.


## Automatic Code splitting
Every `import` you declare gets bundled and served with each page. That means pages never load unnecessary code while browsing around.


## The PRPL pattern

PRPL is a pattern for structuring and serving Progressive Web Apps (PWAs), with an emphasis on the performance of app delivery and launch. It stands for:

- **Push** critical resources for the initial URL route.
- **Render** initial route.
- **Pre-cache** remaining routes.
- **Lazy-load** and create remaining routes on demand.

Learn more about [PRPL pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)



## Smart link prefetching
Gridsome prefetches internal links in the background so browsing around goes insanely fast. It uses the built-in `<g-link>` component and **Intersection Observer** to prefetch when the link is in view.

Gridsome builds two files of every page. A static HTML and a small JavaScript file. When the website hydrates into a Vue.js-SPA, the link prefetching only loads the JavaScript to render the next page. This results in a faster and smoother browsing experience.

[Learn more about **g-link** here](/docs/linking/).

## Progressive Images
Gridsome has a built-in `<g-image>` component with automatic progressive image support. In **development** it lets you do real-time image processing, like resizing and cropping.

In production, the `<g-image>` is served as an ultra-compressed image before the image is lazy-loaded when in view by using **Intersection Observer**.


[Learn more about **g-image** here](/docs/images/)


## Vue.js SPA
The `gridsome build` command generates **SEO-friendly HTML files** that can be hosted anywhere. These HTML files are optimized to load as fast as possible. After the HTML is loaded Vue.js takes over the HTML and **hydrates into a fully Vue-powered SPA.**

**When SPA kicks in it only loads small code-splitted JS chunks for next pages.**

[Learn more about Vue.js and Client Side hydration](https://ssr.vuejs.org/guide/hydration.html)
