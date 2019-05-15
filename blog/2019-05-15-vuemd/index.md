---
title: MDVue - Vue Components in Markdown
slug: gridsome-v06
author: [tommyvedvik]
date: 2019-05-15
excerpt: "Introducing MDVue for Gridsome. A plugin that let you use Vue Components inside Markdown posts, and build pages with Markdown. Perfect for building Documentation, Design Systems, Portfolios, Blogs etc."
---

![MDVue](./mdvue.png)

## How to use

1. Install `@gridsome/plugin-mdvue` with Yarn or NPM.
2. Add to `gridsome.config.js`

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/plugin-mdvue',
      options: {
        baseDir: './content/docs', // Where files are located
        pathPrefix: '/docs', // Route prefix
        layout: './src/layouts/Doc.vue' // What layout to use
        remark: {
          // optional remark options and plugins
        }
      }
    }
  ]
}
```

💥 **@gridsome/plugin-mdvue** is designed to be as a drop-in replacement for **@gridsome-filesystem**. If you're already using *filesystem-source* you can just change out the **use** and add **layout** and **pathPrefix** options.

In this example any `.md` file in `./content/docs` will be a page.

- `/content/docs/index.md` will be  **/docs**
- `/content/docs/how-to-use.md` will be **/docs/how-to-use**
- `/content/docs/folder/index.md` will be **/docs/folder**


## Example `.md` file

 ```jsx
---
title: A cool title
excerpt: Lorem Ipsum is simply dummy text.
---

# {{ $frontmatter.title }}
## {{ $frontmatter.excerpt }}

Add **Markdown content** here...

// Import Vue Components
import Youtube from '~/components/Youtube.vue'

// Import .md files as components
import Message from '~/components/Message.md'

<Message>Lorem ipsum dolor sit amet...</Message>
<Youtube id="xyxyxy">

... Add some more Markdown content here.

```
All **front-matter** fields are available in `$frontmatter` and in the **GraphQL data layer** if you want to query data from other pages.


## What about MDX for Vue?
MDX will have Vue.js support (https://mdxjs.com/guides/vue), but the problem is that it's still JSX. Under the hood **MDX** converts `.mdx` files into `JSX`, but **MDVue**  simply converts `.md` files into `.vue` files. That's a lot better and efficient for Vue projects. 

The MDX project is still great, so Gridsome will probably have a MDX source plugin at some point also.
