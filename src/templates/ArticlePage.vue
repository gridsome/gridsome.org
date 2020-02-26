<template>
  <Layout>
    <Section class="post" container="md" dots="true" >
      <h1 v-html="$page.article.title"/>
      <PostMeta :post="$page.article"/>
      <p class="lead" v-html="$page.article.fields.excerpt"/>
      <div v-html="$page.article.content"/>
    </Section>
  </Layout>
</template>

<page-query>
query ArticlePage ($path: String!) {
  article: articlePage (path: $path) {
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
import PostMeta from "@/components/PostMeta.vue";

export default {
  components: {
    PostMeta,
    editLink() {
      const path = this.$page.doc.path;
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`;
    }
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
