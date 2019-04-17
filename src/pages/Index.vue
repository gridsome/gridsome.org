<template>
  <Layout>
    <home-intro-simple />
    <home-how-it-work-simple />
    <home-features />
    <home-connect />
    <home-blog />
  </Layout>
</template>

<script>
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeHowItWorkSimple from '@/components/home/HomeHowItWorkSimple.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeConnect from '@/components/home/HomeConnect.vue'

export default {
  components: {
    HomeIntroSimple,
    HomeHowItWorkSimple,
    HomeFeatures,
    HomeBlog,
    HomeConnect
  },
  
  metaInfo: {
    title: 'Vue.js-powered Modern Website Generator'
  }
}
</script>


