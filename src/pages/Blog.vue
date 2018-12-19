<template>
  <Layout>
     <Section container="md" class="blog-posts">
      <div class="mb container-sm text-center">
          <h1>Gridsome Blog</h1>
      </div>
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node._id" :post="edge.node"/>
    </Section>
  </Layout>
</template> 

<page-query>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        _id
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        author
        excerpt
        content
      }
    }
  }
}
</page-query>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    PostCard
  }
}
</script>

<style>

</style>
