<template>
  <Card class="blog-posts__post">
    <h3 v-html="post.title"/>
    <PostMeta class="post" :post="post"/>
    <p v-html="post.excerpt"/>
    <g-link class="blog-posts__post-link" :to="post.path">
      Read more
    </g-link>
  </Card>
</template>

<script>
import PostMeta from './PostMeta.vue'

export default {
  components: {
    PostMeta
  },
  props: {
    post: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
.blog-posts {
  &__post {
    position: relative;
    margin-bottom: 2rem;
  
    a:not(.blog-posts__post-link) {
      position: relative;
      z-index: 1;
    }

    &-link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 0;
    }
  }
}
</style>
