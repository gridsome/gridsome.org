<template>
  <Layout>
    <home-intro-simple />
    <home-how-it-works />
    <home-fast />
    <home-community />
    <home-blog />
  </Layout>
</template>

<script>
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'
import HomeFast from '@/components/home/HomeFast.vue'
import HomeCommunity from '@/components/home/HomeCommunity.vue'

export default {
  components: {
    HomeIntroSimple,
    HomeBlog,
    HomeHowItWorks,
    HomeFast,
    HomeCommunity
  },
  
  metaInfo: {
    title: 'Vue.js-powered static site generator',
    meta: [
      { name: 'description', content: 'Gridsome is a Vue.js-powered JAMstack framework for building incredible fast websites & apps for any CMS, APIs or Markdown-files.'
      }
    ],
  }
}
</script>


