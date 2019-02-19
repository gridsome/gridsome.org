<template>
  <Layout>
    <Section class="post" container="md" dots="true" >

      <div class="post-header container-sm text-center mb">
        <h1 v-html="$page.post.title"/>
        <PostMeta :post="$page.post"/>
      </div>

      <g-image v-if="$page.post.poster" quality="1" width="600" :src="$page.post.poster" />

      <p class="lead" v-html="$page.post.excerpt"/>

      <div v-html="$page.post.content"/>
    </Section>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    author {
      id
      title
      path,
      avatar (width: 60)
    }
    excerpt
  }
}
</page-query>

<script>
import PostMeta from '@/components/PostMeta.vue'

export default {
  components: {
    PostMeta,
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.excerpt
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 750px) {
  p > img {
    max-width: 120%;
    margin-left: -10%;
  }
}
</style>