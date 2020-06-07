---
title: "Adding Scripts to Specific Pages with Gridsome / Vue"
slug: gridsome-page-scripts
author: [rasulkireev]
date: 2020-06-05
tags: [scripts, gridsome, vue]
excerpt: 'How do I add script tag to specific pages only? In this post I show how I integrated hypothes.is only on my article pages.'
---

Let's say you want to add an external library to your Gridsome website. In my case, I really wanted to add [hypothes.is](https://hypothes.is) to my website.

> Hypothes.is tries to enable a conversation over the world's knowledge. In Layman's terms, it allows users to comment, highlight, and annotate content on any site. Adding it to my site, I will help people explore this tool and will hopefully drive more conversation about my posts.

**TL;DR**
Add script tags to your site via the [Vue Meta](https://vue-meta.nuxtjs.org/) extension.

```javascript
export default {
  metaInfo: {
    script: [
      { src: 'https://hypothes.is/embed.js', body: true }
    ]
  }
...
}
```

I can add hypothes.is to my site by adding the following script tag to my index.html, right above the closing body tag.

```javascript
<script src="https://hypothes.is/embed.js" async></script>
```

This will add the hypothesis sidebar to all my pages. This can be a good enough solution. However, I don't want to crowd each page on my site with this sidebar. Well then, how can I add it to specific Pages only?

Given Gridsome's structure, it is very easy to isolate specific pages. For example, we could target `Post.vue` if I only want this script in articles. Or I could target `About.vue` if I wanted to add to about page only.

```
├── content
|  ├── articles
|  ├── notes
|  ├── now
├── gridsome.config.js
├── gridsome.server.js
├── src
|  ├── components
|  |  └── socialShareButtons.vue
|  ├── index.html
|  ├── layouts
|  |  ├── Default.vue
|  ├── main.js
|  ├── pages
|  |  ├── 404.vue
|  |  ├── About.vue
|  |  ├── Articles.vue
|  |  ├── Index.vue
|  └── templates
|     ├── BookNote.vue
|     └── Post.vue
```

Now the question is: "How do I add the script tag?". Well, the answer is simple. You can leverage metaInfo in your script. If you followed Gridsome instructions to add Meta info to your site then you would know that you just need to add metaInfo object (or function, if using GraphQL queries) to your export default function. This is exactly what you would use to add a script tag.

```javascript
export default {
  metaInfo: {
    script: [
      { src: 'https://hypothes.is/embed.js', body: true }
    ]
  }
...
}
```

or

```javascript
export default {
  metaInfo() {
    script: [
      { src: 'https://hypothes.is/embed.js', body: true }
    ]
  }
...
}
```

Now you have your desired external library only on pages you want.