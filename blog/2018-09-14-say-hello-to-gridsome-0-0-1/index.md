---
title: Say hello to Gridsome 0.0.1 👶🎉💚
author: Tommy Vedvik
date: 2018-09-14
excerpt: "A new static site generator (SSG) baby is born. It's highly inspired by Gatsby.js (React based) but it's built on top of Vue.js. You can expect this baby to grow up really fast!"
---
#### There are so many SSGs. Why another one?

We think Gridsome is a missing piece to the Vue.js ecosystem. What Gatsby.js does for React.js is a game changer in how we build websites. The goal is to do this for Vue.js. With Gridsome you get an **universal GraphQL layer** where all your connected data sources is. Its like a single source of truth for your website data ready to be inserted anywhere. This and Vue.js makes it extremely fun and fast to build websites. You don't need to know GraphQL or Vue.js to get started with Gridsome - It's a great way to get introduced to both.

This is an example on how to query posts from the GraphQL layer in Gridsome:

```html
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node._id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<graphql>
query Blog {
  allWordPressPost (limit: 5) {
    edges {
      node {
        _id
        title
      }
    }
  }
}
</graphql>
```


The GraphQL layer and all the data can be explored in a local GraphQL playground. The playground can usually be opened by opening `https://localhost:8080/___explore`.




#### Top scores on any speed testing tool - automagically

One of the main goals with Gridsome is to make a framework that let you build websites that are optimized "out-of-the-box". It follows the [PRPL-pattern by Google.](https://developers.google.com/web/fundamentals/performance/prpl-pattern/). You don't need to be a performance export to make fast websites with Gridsome. Your site should get almost top scores on Google lighthouse as default. 

- Image compressing & lazy-loading ⚡️ 
- CSS & JS minification ⚡️ 
- Code-splitting ⚡️ 
- HTML compressing ⚡️ 
- Critical CSS (Plugin) ⚡️ 
- Full PWA & Offline-support (plugin) ⚡️  


#### A better way to build websites

Gridsome is a JAMstack framework - a new way to build websites that gives you better performance, higher security, cheaper hosting and better developer experience. While pages are static generated at build time, for SEO & speed purpose, you can add powerful dynamic functionality with Vue.js.

We believe the SSGs / JAMstack trend is just getting started. When you have first started to make websites this way there is no way back. You will feel almost "dirty" when going back to a traditional WordPress / CMS setup. 

Try run the new Chrome lighthouse (Audit) testing tool on a WordPress site - It is impossible to get good scores even with the best caching plugins and hosting. With Gridsome you don't even need caching plugins. Website optimsation is taken care of at build time.

This is what we think are really exiting and is why we are building Gridsome. It will be the **perfect SPA & PWA front-end solution** for any headless CMS or content APIs.

#### So whats next...

In the next couple of months we're going to continue to improve the docs, add more Source & transformer plugins and fix reported bugs.

The project is more mature than the version tells you, but we're starting here and will try to get to 1.0 as fast as possible.

#### Help this baby grow!

It's just me and my brother working on this now, so any contribution is very welcome!
