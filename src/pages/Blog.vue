<template>
  <Layout transparent="true">
    
    <Section dark="true" class="text-center" dots="true" container="sm">
      <h1>Gridsome Blog</h1>
      <p class="lead">Follow our mission to save the web from bloat and make building websites fun again.</p>
    </Section>

    <div class="blog-posts">
      <g-link v-for="edge in $page.posts.edges" :key="edge.node._id" :to="edge.node.path">
        <Card class="blog-posts__post container container-md">
          <h2 v-html="edge.node.title"/>
          <PostMeta :post="edge.node"/>
          <p class="lead" v-html="edge.node.fields.excerpt"/>
          <p class="card__read-more"> Read more </p>
        </Card>
      </g-link>
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
import PostMeta from '@/components/PostMeta.vue'

export default {
  components: {
    PostMeta
  }
}
</script>

<style lang="scss">
.blog-posts {
  padding: 2rem 1rem;

  &__post {
    margin-bottom: 2rem;
  }
}
</style>
