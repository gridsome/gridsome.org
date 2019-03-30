<template>
  <Layout primary-bg="true">
    <Section container="md" class="blog-posts">
      
      <div class="mb container-sm text-center author-page">
        <g-image class="author-page__avatar" v-if="$page.contributor.avatar" :key="$page.contributor.id" :src="$page.contributor.avatar"/>
        <h1>{{ $page.contributor.title }}</h1>
        <p v-if="$page.contributor.bio" class="lead container-sm">
          {{ $page.contributor.bio }}
        </p>
      </div>

      <h3 class="text-center" v-if="$page.contributor.posts.edges.length">Blog posts</h3>

      <PostCard v-for="edge in $page.contributor.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </Section>
  </Layout>
</template>

<page-query>
query Contributor ($path: String!) {
  contributor (path: $path) {
    id
    title
    bio
    avatar (width: 124)
    posts: belongsTo(filter: {typeName: {eq: BlogPost}}) {
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
    starters: belongsTo(filter: {typeName: {eq: Starter}}) {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Starter {
            id
            title
            path
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
      title: this.$page.contributor.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.contributor.bio
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
