<template>
  <Layout>

    <Section dots="true" class="text-center">

      <div class="container-md">
        <h1 class="fade-up">ABOUT</h1>
        
        <p class="container-sm lead">Gridsome is a <strong>static JAMstack framework</strong> for building blazing-fast, offline-ready, PWA front-ends with <strong>Vue.js</strong> and <strong>GraphQL</strong></p>
      </div>
      <div class="container">
        <Source-animation />
      </div>
      
    </Section>

    <Section dots="true" dark="true">
      <div class="container">
        DARK SECTIONGridsome is a static JAMstack framework for building blazing fast, offline-ready, PWA frontends with Vue.js and GraphQL
      </div>
      <div class="container">
        DARK SECTIONGridsome is a static JAMstack framework for building blazing fast, offline-ready, PWA frontends with Vue.js and GraphQL
      </div>
    </Section>

  </Layout>
</template>

<script>
import SourceAnimation from '@/components/SourceAnimation.vue'

export default {
  components: {
    SourceAnimation
  }
}
</script>

<style>

</style>
