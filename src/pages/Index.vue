<template>
  <Layout>
    <home-intro-simple />
    <home-how-it-works />
    <home-fast />
    <home-blog />
  </Layout>
</template>

<script>
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'
import HomeFast from '@/components/home/HomeFast.vue'

export default {
  components: {
    HomeIntroSimple,
    HomeBlog,
    HomeHowItWorks,
    HomeFast
  },
  
  metaInfo: {
    title: 'Vue.js-powered static site generator',
    meta: [
      { name: 'description', content: 'Gridsome is a Vue.js-powered, modern site generator for building the fastest possible websites for any Headless CMS, APIs or Markdown-files. Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert.'
      }
    ],
  }
}
</script>


