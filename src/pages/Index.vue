<template>
<Layout showIntro>
    <LazyHydrate when-visible>
      <home-how-it-works />
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
import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeExamples from '@/components/home/HomeExamples.vue'
import HomeCommunity from '@/components/home/HomeCommunity.vue'
import HomeConnect from '@/components/home/HomeConnect.vue'
import Intro from '@/components/Intro.vue'

export default {
  components: {
    LazyHydrate,
    HomeIntro,
    HomeHowItWorks,
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

