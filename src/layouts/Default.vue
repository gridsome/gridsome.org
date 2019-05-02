<template>
  <div id="app">
    <Header />
    <main id="main" tabindex="-1" :class="mainClass">
      <slot />
    </main>
    <Footer v-if="footer !== false" />
  </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'

export default {
  props: ['footer', 'primary-bg'],
  components: {
    Header,
    Footer
  },
  computed: {
    mainClass() {
      let classes = []
      if(this.primaryBg) classes.push('main--primary-bg')
      return classes
    },
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
}
.main--primary-bg {
  background-color: var(--primary-bg);
}
</style>
