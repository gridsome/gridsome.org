<template>
  <Layout>
    <Section class="post" container="md" dots="true" >
      <h1 v-html="$page.post.title"/>
      <PostMeta :post="$page.post"/>
      <div v-html="$page.post.content"/>
    </Section>
  </Layout>
</template>

<page-query>
query LowdbPost ($path: String!) {
  post: lowdbPost (path: $path) {
    title
    content
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
          name: 'content',
          content: this.$page.post.content
        }
      ]
    }
  }
}
</script>
