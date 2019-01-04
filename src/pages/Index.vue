<template>
  <Layout>
    <home-intro />
    <home-features />
    <home-how-it-works />
    <home-tabs />
    <home-fast />
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
    title: 'Vue.js-powered static site generator',
    meta: [
      { name: 'description', content: 'Gridsome is a Vue-powered static site generator for building CDN-ready websites and apps for any headless CMS, local files or APIs'
      }
    ],
  }
}
</script>


