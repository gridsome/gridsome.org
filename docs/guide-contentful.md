# Gridsome Contentful Guide

## Create a Gridsome project

1. `gridsome create my-gridsome-site` to create a new project
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local development server

## Create Contentful Account

First you need to create an account with Contentful and select an example of blog space.

Also need API keys (Space ID, Content Delivery API, Content Preview API and Environments - the default should be `master`)

## Installing dependencies

First, install a plugin to link our site and Contentful:

- `yarn add @gridsome/source-contentful`

Then we need to install a markdown processor in our project, since Contentful serves us content in markdown format:

- `yarn add markdown-it`

## Configuration

To begin with, at the root of the project, we will create a `.env` file and fill it with the contents:

```js
CONTENTFUL_SPACE = "<YOUR_CONTENTFUL_SPACE>";
CONTENTFUL_TOKEN = "<YOUR_CONTENTFUL_TOKEN>";
CONTENTFUL_ENVIRONMENT = "<YOUR_CONTENTFUL_ENVIRONMENT>";
```

Also configure `gridsome.config.js`. Paste the following into the contents of this file:

```js
module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      }
    }
  ]
};
```

## Queries and data processing

Queries are generated using GraphQL.
For example:

```js
<page-query>
query Posts {
  posts: allContentfulBlogPost {
    edges {
      node {
        id,
        title,
        path
      }
    }
  }
}
</page-query>
```

To parse the markdown content, use the markdown-it previously installed. Example:

```js
<template>
  <Layout>
    <div v-html="body" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: contentfulBlogPost (path: $path) {
    body
  }
}
</page-query>

<script>
import MarkdownIt from "markdown-it";

export default {
  computed: {
    body() {
      const md = new MarkdownIt();

      return md.render(this.$page.post.body);
    }
  }
};
</script>
```

## Success

Our static site is fully integrated with contentful.
