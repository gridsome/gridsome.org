<template>
    <div id="app" dark>
      <Header />
      <main id="main" :class="mainClass">
        <slot />
      </main>
      <LazyHydrate ssr-only v-if="footer !== false">
        <Footer />
      </LazyHydrate>
    </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  props: ['footer', 'primary-bg'],
  components: {
    Header,
    Footer,
    LazyHydrate
  },
  computed: {
    mainClass() {
      let classes = []
      if(this.primaryBg) classes.push('main--bg-teritary')
      return classes
    },
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
}
.main--bg-teritary {
  background-color: var(--bg-teritary);
}
</style>
