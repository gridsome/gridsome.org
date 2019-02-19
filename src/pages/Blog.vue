<template>
  <Layout>
     <Section container="md" class="blog-posts" dots="top">
      <div class="mb container-sm text-center">
        <h1>Gridsome blog</h1>
      </div>
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>

      <p class="text-center">
        Want to contribute to Gridsome blog?
        <g-link to="/docs/how-to-contribute#contributing-to-the-blog"> Learn more here</g-link>
      </p>

    </Section>
  </Layout>
</template> 

<page-query>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        author {
          title
          path
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
  },
  metaInfo: {
    title: 'Blog'
  }
}
</script>
