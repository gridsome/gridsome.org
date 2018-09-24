<template>
  <Section dots="true" class="text-center">
  <div class="container-md mb">
    
    <h1 class="home-title">
      <span class="home-title__top">The Vue framework for</span>
      <transition name="rotate">
        <div v-if="currentText == 0" class="home-title__main gradient-text" key="0">
          Static Websites
        </div>
        <div v-else-if="currentText == 1" key="1" class="home-title__main gradient-text">
          any CMS
        </div>
        <div v-else-if="currentText == 2" key="2" class="home-title__main gradient-text">
          PWAs
        </div>
        <div v-else-if="currentText == 3" key="3" class="home-title__main gradient-text">
          the JAMstack
        </div>
        <div v-else-if="currentText == 4" key="4" class="home-title__main gradient-text">
          SEO-friendly sites
        </div>
        <div v-else-if="currentText == 5" key="5" class="home-title__main gradient-text">
          Markdown files
        </div>
      </transition>
    </h1>

    <p class="home-intro container-sm">
      Build blazing fast websites with <br class="hide-for-small" />
      <strong>Vue.js</strong><vue-logo/> & 
      <strong>GraphQL</strong><graph-ql-logo style="color:#E535AB;" />
    </p>

    <g-link  to="/docs" class="button">
      Get started
    </g-link>

    <a href="//github.com/gridsome/gridsome" class="button plain">
      GitHub
    </a>
  </div>

  </Section>
</template>

<script>
export default {
  data() {
    return {
      currentText: 0
    }
  },

  mounted () {
    this._counter = setInterval(() => {
      this.currentText = (this.currentText + 1) % 6
    }, 2500)
  },

  destroyed () {
    clearTimeout(this._counter)
  },
}
</script>

<style lang="scss">
.home-title {
  &__top {
    font-size: 75%;
  }
  &__main {
    font-size: 130%;
  }
}

.home-intro {
  font-size: 130%;
}

.rotate-enter-active {
  transition: all 1s ease;  
  transform: translateY(20px);
  opacity: 0;
}

.rotate-leave-active {
  transition: all 1s ease;  
}

.rotate-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.rotate-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.rotate-leave-active{
  left:0;
  right:0;
  position: absolute;
}

</style>