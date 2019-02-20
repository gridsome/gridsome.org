<template>
  <Layout>
    <Section container="md" class="blog-posts">
      <div class="mb container-sm text-center author-page">
        <g-image class="author-page__avatar" v-if="$page.author.avatar" :key="$page.author.id" :src="$page.author.avatar"/>
        <h1>{{ $page.author.title }}</h1>
        <p v-if="$page.author.bio" class="lead container-sm">
          {{ $page.author.bio }}
        </p>
      </div>

      <h3 class="text-center">Blog posts</h3>

      <PostCard v-for="edge in $page.author.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </Section>
  </Layout>
</template>

<page-query>
query Author ($path: String!) {
  author (path: $path) {
    id
    title
    bio
    avatar (width: 124)
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
</page-query>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo () {
    return {
      title: this.$page.author.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.author.bio
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.author-page {
  &__avatar {
    border-radius: 99px;
  }
}
</style>
