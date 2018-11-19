<template>
  <Layout>
    <home-intro />
    <home-features />
    <home-how-it-works />
    <home-fast />
    <home-tabs />
    <home-blog />
  </Layout>
</template>

<script>

import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeFast from '@/components/home/HomeFast.vue'
import HomeTabs from '@/components/home/HomeTabs.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'


export default {
  components: {
    HomeIntro,
    HomeFeatures,
    HomeFast,
    HomeTabs,
    HomeBlog,
    HomeHowItWorks,
  },


  metaInfo: {
    title: 'Gridsome - Build blazing fast websites for any CMS or data with Vue.js',
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
