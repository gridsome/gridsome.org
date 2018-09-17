<template>
  <Layout transparent="true">
    
    <Section dark="true" class="text-center" dots="true" container="sm">
      <h1>Gridsome Blog</h1>
      <p class="lead">Follow our mission to save the web from bloat and make building websites fun again.</p>
    </Section>

    <div class="blog-posts container container-md">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node._id" :post="edge.node"/>
    </div>
  </Layout>
</template> 

<graphql>
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
</graphql>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    PostCard
  }
}
</script>

<style lang="scss">
.blog-posts {
  padding: 2rem 1rem;
}
</style>
