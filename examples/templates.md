```html
<!-- Example Page ~/pages/Blog.vue -->
<template>
  <Layout>
  	<h1>Our blog</h1>
   	<div v-for="node in $page.posts.edges" :key="node.id">
   		<h4> {{ node.title }} </h4>
   		<p> {{ node.excerpt }} </p>
   		<g-link :to="node.path"> Read more </g-link>
   	</div>
  </Layout>
</template>

<!-- Example query from GraphQL data layer -->
<page-query>
query Posts {
  posts: allPosts {
    edges {
      node {
      	id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

```
