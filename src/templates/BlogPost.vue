<template>
  <GalleryLayout>
    <Section class="post" container="md" dots="true" >

      <div class="post-header container-sm text-center mb">
        <h1 v-html="$page.post.title"/>
      </div>

      <Card class="post-content">
                <PostMeta :post="$page.post"/>

        <g-image v-if="$page.post.poster" quality="1" width="600" :src="$page.post.poster" />

        <p class="lead" v-html="$page.post.excerpt"/>

        <div v-html="$page.post.content"/>

      </Card>
    </Section>
  </GalleryLayout>
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
 .card__inner {
    padding: var(--space-x2);
  }
}
</style>