<template>
  <Layout>
    <home-intro-simple />
    <home-how-it-work-simple />
    <home-features />
    <home-blog />
  </Layout>
</template>

<script>
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorkSimple from '@/components/home/HomeHowItWorkSimple.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'

import HomeFast from '@/components/home/HomeFast.vue'
import HomeCommunity from '@/components/home/HomeCommunity.vue'

export default {
  components: {
    HomeIntroSimple,
    HomeBlog,
    HomeFeatures,
    HomeHowItWorkSimple,
    HomeFast,
    HomeCommunity
  },
  
  metaInfo: {
    title: 'Vue.js-powered modern static site generator'
  }
}
</script>


