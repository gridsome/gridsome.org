<template>
  <Layout transparent="true">

    <Section dark="true" class="text-center" dots="true" container="sm">
      <h1>Emacser & Vimer's Articles</h1>
      <p class="lead">Old articles, some with org some with md.</p>
    </Section>

    <div class="articles container container-md">
      <ArticleCard v-for="edge in $page.articles.edges" :key="edge.node._id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query ArticlePosts {
  articles: allArticlePost {
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
import ArticleCard from "@/components/ArticleCard.vue";

export default {
  components: {
    ArticleCard
  },
  mouted() {
    console.log(this.$page);
  }
};
</script>

<style lang="scss">
.articles {
  padding: 2rem 1rem;
}
</style>
