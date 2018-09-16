<template>
  <Layout>
    <Section class="post" container="md" dots="true" >
      <h1 v-html="$page.post.title"/>
      <PostMeta :post="$page.post"/>
      <p class="lead" v-html="$page.post.fields.excerpt"/>
      <div v-html="$page.post.content"/>
    </Section>
  </Layout>
</template>

<graphql>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
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
</graphql>

<script>
import PostMeta from '@/components/PostMeta.vue'

export default {
  components: {
    PostMeta,
    editLink () {
      const path = this.$page.doc.path
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`
    }
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
