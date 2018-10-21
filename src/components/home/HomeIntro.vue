<template>
  <Section dots="true" class="text-center">
  <div class="container-md mb">
    
    <h1 class="home-title">
      <span class="home-title__top">A Vue framework for</span>
      <transition name="rotate">
        <div v-if="currentText == 0" class="home-title__main gradient-text" key="0">
          Static Websites
        </div>
        <div v-else-if="currentText == 1" key="1" class="home-title__main gradient-text">
          any CMS or data
        </div>
        <div v-else-if="currentText == 2" key="2" class="home-title__main gradient-text">
         PWAs
        </div>
        <div v-else-if="currentText == 3" key="3" class="home-title__main gradient-text">
          the #JAMstack
        </div>
        <div v-else-if="currentText == 4" key="4" class="home-title__main gradient-text">
          Markdown files
        </div>
        <div v-else-if="currentText == 5" key="5" class="home-title__main gradient-text">
          SEO-friendly SPAs
        </div>
      </transition>
    </h1>

    <p class="home-intro container-sm">
      Build blazing fast websites for any CMS<br class="hide-for-small" /> or data with 
      <strong class="no-wrap">Vue.js<vue-logo/></strong>
    </p>

    <g-link  to="/docs" class="button primary">
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
    }, 1500)
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
    color: var(--primary-color);
  }
}

@media screen and (max-width: 650px) {
  .home-title__top {
    font-size: 55%;
  }
  .home-title__main {
    font-size: 80%;
  }
}


.home-intro {
  font-size: 130%;
}

</style>
