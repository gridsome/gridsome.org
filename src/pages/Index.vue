<template>
  <Layout>
    <home-intro-simple />
    <home-how-it-works />
    <home-blog />
  </Layout>
</template>

<script>
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'

export default {
  components: {
    HomeIntroSimple,
    HomeBlog,
    HomeHowItWorks,
  },
  
  metaInfo: {
    title: 'Vue.js-powered static site generator',
    meta: [
      { name: 'description', content: 'Gridsome is an open-source, Vue-powered modern site generator that builds performance into every website automatically. Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert.'
      }
    ],
  }
}
</script>


