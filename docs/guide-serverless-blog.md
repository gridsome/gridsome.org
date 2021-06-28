# Create Serverless CMS-Powered Blog

With this guide, we would create a Serveless CMS-Powered blog using the ButterCMS Api.

## What is ButterCMS

[Butter is a headless CMS](https://buttercms.com) that lets you manage content using our dashboard and integrate it into your gridsome website/blog with their content APIs. You can use ButterCMS for new projects as well as add it to existing codebases.
ButterCMS provides a user-friendly UI for managing marketing sites, blogging, and custom content scenarios. We can be used for SEO landing pages, customer case studies, company news & updates, events + webinar pages, education center, location pages, knowledgebases, and more.

## Prerequisites

To develop with Gridsome, you require **Node.js** and it's recommended to use **Yarn**. [How to setup](https://gridsome.org/docs/prerequisites)

## Create a new Gridsome Project

1. Use `gridsome create my-project-name` to create a new project
2. `cd my-project-name` to open folder
3. Use `gridsome develop` to run the development server

## Install the Butter Gridsome plugin

1. Using yarn `yarn add gridsome-source-buttercms`
2. Using npm `npm install gridsome-source-buttercms`

Head to [buttercms.com](https://buttercms.com) and register a new account. Butter gives you  a 30 days free trial to test out all features. You can also register for a Personal Developer account which is free by contacting the ButterCMS team.

Goto settings on your ButterCMS Dashboard and get your **Read API key**. This is what we would use to configure the gridsome-butter plugin.

You can create posts on your ButterCMS Dashboard for the purpose of this guide

## Configuration

Locate your `gridsome.config.js` file and add the butter-gridsome plugin configuration. It should look like this. Please note, you are to change the part that reads `<your AuthToken>` to the Read API token you got from your ButterCMS Dashboard
```js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-buttercms',
      options: {
        authToken: '<your AuthToken>',
        collections: [''],
        pages: '',
        pageTypes: '',
      },
    },
  ],
};
```

## Blog posts

Create a vue Component in the components folder called **PostMeta**. This component would include all the details of a post like the Published date and the Author's first name and  last name.

The content should look like
```html
<template>
  <div class="post-meta">
    <span>Posted {{ post.published }}</span>
    <span v-if="post.author">
      by {{ post.author.first_name }} {{ post.author.last_name }}</span
    >
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>

```

Also, create a new vue component called **PostCard.vue** in the components folder and add the following code

```html
<template>
  <div class="post-card__content-box">
    <g-link class="post-card__header" :to="`blog/${post.slug}`">
      <g-image
        alt="Cover image"
        v-if="post.featured_image"
        class="post-card__image"
        :src="post.featured_image"
      />
    </g-link>
    <div class="post-card__content">
      <h2 class="post-card__title">
        <g-link :to="`blog/${post.slug}`">{{post.title}}</g-link>
      </h2>
      <div>
        <small  class="post-card__category" v-for="category in post.categories" :key="category.slug">{{category.name}}</small>
      </div>
      <p class="post-card__description" v-html="post.summary" />
      <PostMeta class="post-card__meta" :post="post" />
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta"

export default {
  components: {
    PostMeta,
  },
  props: ["post"],
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;

  &__content-box {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    flex-basis: 25%;
    &:empty {
      display: none;
    }
  }
  &__content {
    flex-basis: 75%;
    box-sizing: border-box;
    padding: 0 10px;
  }
  &__image {
    width: 100%;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 0;
  }

  &__description {
    margin-top: 0;
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
  
  &__category {
    margin-right: 5px
  }
}
</style>
```

Now edit the `Index.vue` template in the **pages** folder. This page serves as the default page when you visit your gridsome website. Your index page should look like this
```html
<template>
  <Layout>
    <h1>Blog</h1>
    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allButterPosts(order: ASC) {
    edges {
      node {
        id
        title
        url
        published
        slug
        summary
        body
        featured_image
        tags {
          name
          slug
        }
        categories {
          name
          slug
        }
        author {
          first_name
          last_name
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: "Hello, ButterCMS!"
  }
};
</script>

<style></style>

```

When you visit the homepage, you should see a list of your blog posts well-defined.

To view all GraphQL queries available to you, you can go to [http://your-homepage/___explore](http://your-homepage/___explore). There you should see all queries you can make with Gridsome
