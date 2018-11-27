<template>
  <Section dots="true" dark="true" dots-animation="true" class="text-center">
  <div class="container-md">
    
    <h1>
      <div class="home-title container-md">
        Build a faster, better web
      </div>
    </h1>

    <p class="home-lead lead  container-sm">
      Gridsome is a <strong>Vue.js-powered <vue-logo /> static site generator</strong> for building high-performance websites for any CMS or data API
    </p>

    <p class="home-links">
      <g-link  to="/docs" class="button primary">
        Get started
      </g-link>
    </p>  

    <p class="home-info">
      License: MIT. <a href="https://github.com/gridsome/gridsome">GitHub (0.3.3)</a> 
    </p>

  </div>

  </Section>
</template>

<style>
.home-title {
  line-height: 1.3;
}
.home-info {
  font-size: .85rem;
}
</style>

<script>
import VueLogo from '~/assets/images/vue-logo.svg'

export default {
  components: {
    VueLogo
  }
}
</script>