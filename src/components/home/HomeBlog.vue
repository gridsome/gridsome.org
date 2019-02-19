<template>
  <Section dots="true" primary="true">
    <div class="container text-center container-sm mb">
      <h2>Latest posts</h2>
    </div>
    <div class="blog-posts container container-md">
      <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
    <div class="container text-center container-sm md">
      <Newsletter />
    </div>
  </Section>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import Newsletter from '~/components/Newsletter'

export default {
  components: {
    PostCard,
    Newsletter
  }
}
</script>

<static-query>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        content
        author {
          id
          title
          path
          avatar (width: 60)
        }
        excerpt
      }
    }
  }
}
</static-query>
