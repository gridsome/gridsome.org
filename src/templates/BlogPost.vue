<template>
  <Layout primary-bg="true">
    <Section class="post" container="md" dots="true" >

      <div class="post-header container-md text-center mb">
        <h1 v-html="$page.post.title"/>
        <PostMeta :post="$page.post"/>
      </div>

      <div class="post-content">

        <g-image v-if="$page.post.poster" quality="1" width="600" :src="$page.post.poster" />

        <p class="lead" v-html="$page.post.excerpt"/>

        <div v-html="$page.post.content"/>

      </div>
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
.post-content {
  border: 1px solid var(--border-color-darker);
  border-radius: 4px;
  background-color: var(--light-bg);
  padding: var(--space-x2);
}
</style>