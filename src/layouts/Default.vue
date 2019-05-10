<template>
  <div id="app">
    <Header />
    <main id="main" :class="mainClass">
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

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
  &:after {
    content: "";
    width: 100%;
    height: 500px;
    top:0;
    position: fixed;
    background: linear-gradient(var(--primary-bg), #FFF);
  }
}
.main--primary-bg {
  background-color: var(--primary-bg);
}
</style>
