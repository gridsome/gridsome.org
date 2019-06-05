<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">

        <div class="intro__message mb" hidden></div>

        <h1 class="intro__title post"> 
          <span>A Vue.js framework for</span>
          <transition name="rotate">
            <div v-if="currentText == 0" key="0">
              Static Websites
            </div>
            <div v-else-if="currentText == 1" key="1">
              Headless CMSs
            </div>
            <div v-else-if="currentText == 2" key="2">
              Markdown Files
            </div>
            <div v-else-if="currentText == 3" key="3">
              Modern PWAs
            </div>
            <div v-else-if="currentText == 4" key="4">
              Serverless Apps
            </div>
            <div v-else-if="currentText == 5" key="5">
              Documentation
            </div>
          </transition>
        </h1>
        
        <p class="intro__lead lead post mb">
          Gridsome makes it easy for developers to build modern JAMstack websites & PWAs that are <g-link to="/docs/fast-by-default">fast by default</g-link>
        </p>

        <p class="intro__links">
          <g-link  to="/docs" class="button primary button--large">
            <span>Get started</span>
          </g-link>
        </p>

        <p class="intro__info">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener noreferrer">
            <span>GitHub (v{{ $static.metaData.gridsomeVersion }})</span>
          </a>
        </p>
    </div>
  </Section>
</template>

<static-query>
query HomeIntro {
  metaData {
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

.intro {
  padding: calc(2.5% + var(--space)) 0;

  &__title {
    font-size: 3.5rem;
    color: var(--primary-color-dark);
    letter-spacing: -1px;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;

    div {
      color: var(--primary-color);
    }

    @media screen and (max-width: 850px) {
      & {
        font-size: 2rem;
      }
    }
  }

  &__lead {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.4rem;
    @media screen and (max-width: 850px) {
      & {
        font-size: 1.2rem;
      }
    }
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
