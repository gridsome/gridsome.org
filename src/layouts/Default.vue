<template>
    <div id="app">
      <Header />
      <main id="main" :class="mainClass">
        <slot />
      </main>
      <Footer />
    </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'

export default {
  props: ['footer', 'primary-bg'],
  components: {
    Header,
    Footer,
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
    height: 66.66%;
    bottom:0;
    position: fixed;
    background: linear-gradient(#FFF, var(--primary-bg));
  }
}
.main--primary-bg {
  background-color: var(--primary-bg);
}
</style>
