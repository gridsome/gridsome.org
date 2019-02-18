<template>
  <Layout>
     <Section container="md" class="blog-posts">
      <div class="mb container-sm text-center">
        <h1>Gridsome blog</h1>
        
        <p>Want to contribute to Gridsome blog?
          <g-link to="/docs/how-to-contribute#contributing-to-the-blog"> Learn more here</g-link>
        </p>
    
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
        author {
          title
          path,
          avatar (width: 60)
        }
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