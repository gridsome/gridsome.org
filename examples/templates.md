```html
<!-- ~/pages/Blog.vue -->
<template>
  <Layout>
  	<h1>Our blog</h1>
   	<div v-for="post in $page.posts.edges.node" :key="post.id">
   		<h4> {{ post.title }} </h4>
   		<p> {{ post.excerpt }} </p>
   		<g-link :to="post.path"> Read more </g-link>
   	</div>
  </Layout>
</template>

<!-- Example GraphQL query -->
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
