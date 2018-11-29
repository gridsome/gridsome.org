<template>
  <Layout>
    <home-intro />
    <home-features />
    <home-fast />
    <home-how-it-works />
    <home-tabs />
    <home-blog />
  </Layout>
</template>

<script>

import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeTabs from '@/components/home/HomeTabs.vue'
import HomeFast from '@/components/home/HomeFast.vue'

import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'

export default {
  components: {
    HomeIntro,
    HomeFeatures,
    HomeTabs,
    HomeFast,
    HomeBlog,
    HomeHowItWorks,
  },

  metaInfo: {
    title: 'Gridsome - Build super fast, modern websites with Vue.js',
    titleTemplate: '%s',
    meta: [
      {
        name: 'description',
        content: 'Gridsome is a Vue-powered static site generator for building high-performance frontends for any CMS or data API'
      }
    ]
  }
}
</script>


