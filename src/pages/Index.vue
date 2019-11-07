<template>
  <Layout class="layout-homepage">

    <LazyHydrate when-idle>
      <home-intro-simple />
    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <home-how-it-work-simple />
    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <home-features />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-connect />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-examples />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-community />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-blog />
    </LazyHydrate>
    
  </Layout>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeHowItWorkSimple from '@/components/home/HomeHowItWorkSimple.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeExamples from '@/components/home/HomeExamples.vue'
import HomeCommunity from '@/components/home/HomeCommunity.vue'
import HomeConnect from '@/components/home/HomeConnect.vue'

export default {
  components: {
    LazyHydrate,
    HomeIntroSimple,
    HomeHowItWorkSimple,
    HomeExamples,
    HomeCommunity,
    HomeConnect,
    HomeFeatures,
    HomeBlog
  },
  
  metaInfo: {
    title: 'Modern Site Generator for Vue.js'
  }
}
</script>

<style>
@media screen and (min-width: 850px) {
  .layout-homepage header{
    border-color: transparent;  
  }
}
</style>


