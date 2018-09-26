```html
<template>
  <div>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node._id">
        {{ edge.node.title }}
      </li>
    </ul>
  </div>
</template>

<page-query>
query Blog {
  posts: allWordPressPost (limit: 5) {
    edges {
      node {
        _id
        title
      }
    }
  }
}
</page-query>
```