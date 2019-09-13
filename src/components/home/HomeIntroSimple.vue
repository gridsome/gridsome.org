<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">

        <div class="intro__message mb" hidden></div>

        <h1 class="intro__title">
          <span>A Vue.js framework for</span>
          <transition name="rotate">
            <div v-if="currentText == 0" key="0">
              Static Websites
            </div>
            <div v-else-if="currentText == 1" key="1">
              The JAMstack
            </div>
            <div v-else-if="currentText == 2" key="2">
              Headless CMSs
            </div>
            <div v-else-if="currentText == 3" key="3">
              Markdown files
            </div>
            <div v-else-if="currentText == 4" key="4">
              Modern PWAs
            </div>
            <div v-else-if="currentText == 5" key="5">
              Serverless Apps
            </div>
          </transition>
        </h1>

        <p class="intro__lead lead post mb">
          Gridsome makes it easy for developers to build modern websites, apps & PWAs that are <g-link to="/docs/fast-by-default/">fast by default</g-link> 🚀
        </p>

        <p class="intro__links">
          <g-link  to="/docs/" class="button primary button--large">
            <span>Get started</span>
          </g-link>
        </p>

        <p class="intro__info">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener noreferrer">
            <span>GitHub (v{{ $static.metadata.gridsomeVersion }})</span>
          </a>
        </p>
    </div>
  </Section>
</template>

<static-query>
query HomeIntro {
  metadata {
    gridsomeVersion
  }
}
</static-query>

<script>
export default {
  data () {
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

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

.intro {
  padding: calc(3.333% + var(--space)) 0;

  &__title {
    font-size: 3rem;
    color: var(--dark-bg);
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 850px) {
      & {
        font-size: 2.6rem;
      }
    }
  }

  &__lead {
    max-width: 610px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;
  }

  &__info {
    font-size: .9rem;
    color: rgba(0,0,0,.7);
  }

  &__message {
    margin-bottom: 1.5rem;
    a {
      display: inline-block;
      background-color: var(--primary-color-dark);
      text-decoration: none;
      padding: 4px 15px;
      border-radius: 99px;
      &:hover {
        background-color: rgba(0,0,0,.3);
      }
    }
  }
}
</style>
