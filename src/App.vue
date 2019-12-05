<template>
  <div class="antialiased relative bg-primary-strong">
    <router-view />
    <Bg class="fixed top-0 w-full h-auto" />
    <div class="fixed bottom-0 right-0 text-on-dark bg-background-dark py-1 px-2 rounded m-2 text-xs">Built with Gridsome</div>
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
import Bg from '@/components/Bg.vue'
export default {
  components: {
    Bg
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