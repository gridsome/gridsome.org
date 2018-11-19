<template>
  <Layout>
    <home-intro />
    <home-blog />
  </Layout>
</template>

<script>

import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'

export default {
  components: {
    HomeIntro,
  },


  metaInfo: {
    title: 'Gridsome - Build blazing fast websites with Vue.js and GraphQL',
    titleTemplate: '%s',
    meta: [
      {
        name: 'description',
        content: 'Gridsome is a blazing-fast static site generator for building PWA & SPA front-ends for any CMS or data source with Vue.js and GraphQL'
      }
    ]
  }
}
</script>
