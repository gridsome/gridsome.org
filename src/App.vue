<template>
  <div class="antialiased bg-light text-dark">
    <Header />
    <div>
      <router-view />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Header from '@/layouts/partials/Header.vue'
export default {
  components: {
    Header
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>
