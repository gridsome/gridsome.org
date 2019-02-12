<template>
  <Layout>
    <Section container="md" class="blog-posts">
      <div class="mb container-sm text-center">
        <span>Blog Posts by:</span>
        <h1>{{ $page.author.title }}</h1>
      </div>

      <!-- <PostCard v-for="edge in $page.author.belongsTo.edges" :key="edge.node.id" :post="edge.node"/> -->
    </Section>
  </Layout>
</template>

<page-query>
query Author ($path: String!) {
  author (path: $path) {
    title
  }
}
</page-query>

query Author ($path: String!) {
  author (path: $path) {
    title
    belongsTo {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on BlogPost {
            id
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            author {
              id
              title
              path
            }
            excerpt
            content
          }
        }
      }
    }
  }
}

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    PostCard
  }
}
</script>
