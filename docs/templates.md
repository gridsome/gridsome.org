# Templates

Templates are used for single post views to **GraphQL collections**. Add a **.vue** file with the same name as a GraphQL collection to `src/templates` to create a template. For example, if you have a collection called "**WordPressPost**" you create a **WordPressPost.vue** file.

You can browse available collections in the **schema tab** inside the [GraphQL explorer](/docs/querying-data).

The example shows a **Blog.vue** in **/pages** where Blog posts will be listed and then a **BlogPost.vue** inside **/templates** that will show the single post view.

![Page structure](./images/dynamic-pages.png)


## Creating templates

Templates must have a `<page-query>` block which fetches the source node
for the current page. You can use the `$path` variable to get the node.


```html
<!-- src/templates/Post.vue -->

<template>
  <article>
    <h1 class="articleTitle">
       {{ $page.post.title }}
    </h1>
    <time datetime="{{ $page.post.date }}">{{ $page.post.date }}</time>
    <p class="articleDescription"> {{ $page.post.description }}</p>
    <div class="articleBody" v-html="$page.blogPost.content" />
  </article>
</template>

<page-query>
query Post ($path: String!) {
  post: post  (path: $path) {
    title
    content
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
```

### Content files

Here is an example of local `markdown` file named `my-first-post.md` located under `$page/content/posts` folder. 
We use this folder to store all of our blog posts.

Our posts format: A title, publish date, followed by an description.

`/content/posts/my-first-post.md`:

```md
---
title: My First post
date: 2018-09-15 07:42:34
description: "Aenean leo ligula, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet."
---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

```

`/content/posts/my-second-post.md`:

```md
---
title: My Second post
date: 2018-09-16 07:42:34
description: "Dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet."
---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

```

To include a variable in your template, wrap it in two sets of curly braces. Like this:

Under our template we use our `md` format to output data - For example

`src/templates/Post.vue`:
```html
  <h1 class="articleTitle">
     {{ $page.post.title }}
  </h1>
 ```
 

- Learn more about [@gridsome/transformer-remark plugin](/plugins/@gridsome/transformer-remark)
- [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [V-html](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)

### Linking content to template

Here is an example of the [file-system source plugin](/plugins/@gridsome/source-filesystem) added to config (`gridsome.config.js`).
We declare the path by `path: 'content/posts/*.md'`

```
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        index: ['README'],
        path: 'content/posts/*.md',
        typeName: 'DocPage',
      }
    },
    {
      // another data source
    },
  ]
}
```
Learn more about [Use data source plugins](/docs/fetching-data#use-data-source-plugins)


## Template layouts

The `<Layout>` component is an optional component used to **wrap pages and templates**. Layouts usually contain components like headers, footers or sidebars that will be used across the site. It should be imported to Pages & Templates like any other [Vue components](/docs/components).

** The page/template layout can be named anything. `<Layout>` is just an example. **

[Learn more about Layouts](/docs/layouts)


### More...

- [Query data in Templates](/docs/querying-data#query-data-in-templates)
- [Add head metadata to Templates](/docs/head#add-head-meta-data-to-pages--templates)
