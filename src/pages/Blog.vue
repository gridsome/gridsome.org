<template>
  <Layout transparent="true">
     <Section container="md" class="blog-posts">
      <div class="mb container-sm text-center">
          <h1>Gridsome Blog</h1>
          <p class="lead">Follow our mission to save the web from bloat and make building websites fun again.</p>
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
        content
        fields {
          author
          excerpt
        }
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
