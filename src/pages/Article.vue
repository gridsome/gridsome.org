<template>
  <Layout transparent="true">

    <Section dark="true" class="text-center" dots="true" container="sm">
      <h1>Emacser & Vimer's Articles</h1>
      <p class="lead">Old articles, some with org some with md.</p>
    </Section>

    <div class="blog-posts container container-md">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node._id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query ArticlePage {
  articles: allArticlePage {
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
import PostCard from "@/components/PostCard.vue";

export default {
  components: {
    PostCard
  }
};
</script>

<style lang="scss">
.blog-posts {
  padding: 2rem 1rem;
}
</style>
