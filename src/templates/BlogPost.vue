<template>
  <Layout>
    <Section container="md" dots="true" >

      <div class="post-header container-md text-center mb-x2">
        <h1 v-html="$page.post.title"/>
        <PostMeta :post="$page.post"/>
      </div>

      <div class="post-content post mb-x2">

        <g-image v-if="$page.post.poster" quality="1" width="600" :src="$page.post.poster" />

        <p class="lead" v-html="$page.post.excerpt"/>

        <div v-html="$page.post.content"/>

      </div>

      <Newsletter />
    </Section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: blogPost (id: $id) {
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
import Newsletter from '@/components/Newsletter.vue'
export default {
  components: {
    PostMeta,
    Newsletter
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
