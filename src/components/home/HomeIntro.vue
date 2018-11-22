<template>
  <Section dots="true" dark="true" dots-animation="true" class="text-center">
  <div class="container-md mb">
    
    <h1>
      <div class="home-title">
        Build modern websites with Vue.js
      </div>
    </h1>

    <p class="home-lead lead  container-sm">
      Gridsome is a <strong>Vue-powered static site generator</strong> for building extremely fast front-ends for any headless CMS or data
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

  <logo-row style="margin-bottom: -40px; " />


  </Section>
</template>

<script>
import LogoRow from '~/components/logos/LogoRow.vue'

export default {
  components: {
    LogoRow
  }
}
</script>

<style>
.home-info {
  font-size: .85rem;
}
</style>