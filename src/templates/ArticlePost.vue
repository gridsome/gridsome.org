<template>
  <Layout>
    <Section class="article" container="md" dots="true" >
      <h1 v-html="$page.article.title"/>
      <ArticleMeta :article="$page.article"/>
      <p class="lead" v-html="$page.article.fields.excerpt"/>
      <div v-html="$page.article.content"/>
    </Section>
  </Layout>
</template>

<page-query>
query ArticlePost ($path: String!) {
  article: articlePost (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    fields {
      author
      excerpt
    }
  }
}
</page-query>

<script>
import ArticleMeta from "@/components/ArticleMeta.vue";

export default {
  components: {
    ArticleMeta,
    editLink() {
      const path = this.$page.doc.path;
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`;
    }
  },
  mouted() {
    console.log(this.$page);
  },
  metaInfo() {
    return {
      title: this.$page.article.title,
      meta: [
        {
          name: "description",
          content: this.$page.article.fields.excerpt
        }
      ]
    };
  }
};
</script>
