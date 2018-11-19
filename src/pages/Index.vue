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
    HomeBlog
  },


  metaInfo: {
    title: 'Emacser & Vimer Gridsome Blog',
    titleTemplate: '%s',
    meta: [
      {
        name: 'description',
        content: 'Emacser and Vimer Development Map'
      }
    ]
  }
}
</script>
