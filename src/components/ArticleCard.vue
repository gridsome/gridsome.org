<template>
  <Card class="articles__article">
    <h3 v-html="article.title"/>
    <ArticleMeta :article="article"/>
    <p v-html="article.fields.excerpt"/>
    <g-link class="articles__article-link" :to="article.path">
      Read more
    </g-link>
  </Card>
</template>

<script>
import ArticleMeta from "./ArticleMeta.vue";

export default {
  components: {
    ArticleMeta
  },
  props: {
    article: { type: Object, required: true }
  }
};
</script>

<style lang="scss">
.articles {
  &__article {
    position: relative;
    margin-bottom: 2rem;

    a:not(.articles__article-link) {
      position: relative;
      z-index: 1;
    }

    &-link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 0;
    }
  }
}
</style>
