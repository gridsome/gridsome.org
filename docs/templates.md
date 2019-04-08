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
  <Layout>
    <article>
      <header>
        <h1 class="post-title">
          {{ $page.post.title }}
        </h1>
      </header>
      <time>{{ $page.post.date }}</time>
      <p>{{ $page.post.description }}</p>
      <div class="post-content" v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    description
    content
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}
</style>

```

To include a variable in your template, wrap it in two sets of curly braces. Like this:

`src/templates/Post.vue`:
```html
<h1 class="articleTitle">
  {{ $page.post.title }}
</h1>
 ```
 

### Content files

Here is an example of adding data from local files using located under `/content/posts` folder. 
We use this folder to store all of our posts.

Our posts markdown format: A title, publish date, followed by an description.

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
Adding more posts entries:

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

- Learn more about [@gridsome/transformer-remark plugin](/plugins/@gridsome/transformer-remark)
- [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Linking content to template

Here is an example of the [file-system source plugin](/plugins/@gridsome/source-filesystem) added to config (`gridsome.config.js`).

```javascript
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post', /* vue file in src/templates must match the GraphQL typeName to have a template for it.*/
        path: 'content/posts/*.md', /* Where to look for files. Should be a glob path. */
        route: '/:slug', /* Define a dynamic route */
      }
    },
    {
      // another data source
    },
  ]
}
```
Learn more about [Use data source plugins](/docs/fetching-data#use-data-source-plugins)

Save and run `gridsome develop`, go to `http://localhost:8080/my-first-post` -or- `http://localhost:8080/my-second-post`.

## Create collection pagelist

`/pages/blog.vue`

```html
<template>
  <Layout>
    <!-- List posts -->
    <ul class="posts">
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <article>
          <h3>{{ edge.node.title }}</h3>
          <p>{{ edge.node.description }}</p>
        </article>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  {
    posts: allPost {
      edges {
        node {
          title
          date (format: "D. MMMM YYYY")
          description
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
```
- [Query data in Pages](/docs/querying-data#query-data-in-pages)

## Template layouts

The `<Layout>` component is an optional component used to **wrap pages and templates**. Layouts usually contain components like headers, footers or sidebars that will be used across the site. It should be imported to Pages & Templates like any other [Vue components](/docs/components).

** The page/template layout can be named anything. `<Layout>` is just an example. **

[Learn more about Layouts](/docs/layouts)


### More...

- [Query data in Templates](/docs/querying-data#query-data-in-templates)
- [Add head metadata to Templates](/docs/head#add-head-meta-data-to-pages--templates)
- [Starter: gridsome-starter-blog](https://github.com/gridsome/gridsome-starter-markdown-blog/blob/master/src/pages/Index.vue)
