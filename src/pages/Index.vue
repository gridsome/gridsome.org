<template>
  <Layout>
    <home-intro-simple />
    <home-how-it-work-simple />
    <home-connect />
    <home-features />
    <home-blog />
  </Layout>
</template>

<script>
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeHowItWorkSimple from '@/components/home/HomeHowItWorkSimple.vue'
import HomeConnect from '@/components/home/HomeConnect.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'

export default {
  components: {
    HomeIntroSimple,
    HomeHowItWorkSimple,
    HomeConnect,
    HomeFeatures,
    HomeBlog,
  },
  
  metaInfo: {
    title: 'Vue.js-powered modern static site generator'
  }
}
</script>


