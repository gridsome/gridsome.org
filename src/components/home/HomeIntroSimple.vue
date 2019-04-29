<template>
  <Section class="intro" dark="true">
    <div class="intro__top text-center">
      <div class="intro__message mb" hidden>
        <g-link to="/blog/2019/02/19/gridsome-v05"><span>🌟 Introducing <strong>Gridsome Staging</strong>. Preview changes and content before deploying →</span></g-link>
      </div>

      <h1 class="intro__title post"> 
        Build awesomely fast JAMstack<br class="hide-for-small"/>websites & apps with Vue.js
      </h1>

      <p class="intro__lead lead post mb">
        Gridsome is a <strong>Vue.js-powered Modern Website Generator</strong> that connects to any Headless CMS, Content APIs or Markdown files
      </p>

      <p class="intro__links text-center">
        <g-link  to="/docs" class="button primary button--large">
          Get started
        </g-link>
      </p>

    </div>

    <template slot="outer">
      <div class="logo-grid">
        <div class="logo-grid__grid">
          <div class="logo-grid__logos"></div>
        </div>
      </div>
   </template>

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
import Examples from '~/components/Examples.vue'

export default {
  components: {
    Examples
  }
}
</script>

<style lang="scss">
.intro {
  border-top:0;
  padding: calc(3.33% + 50px) 0;
  background: var(--primary-color);
  background: linear-gradient(353.71deg, var(--primary-color) 7.47%, var(--primary-color-dark) 90.48%);

  &__title {
    font-size: 3.3rem;
    color: var(--primary-color);
    letter-spacing: -1px;
    font-weight: 600;
    @media screen and (max-width: 850px) {
      & {
        font-size: 3rem;
      }
    }

    @media screen and (max-width: 550px) {
      & {
        font-size: 2.5rem;
      }
    }
  }

  &__lead {
    max-width: 740px;
    font-size: 1.3rem;
    margin: 0 auto;
  }

  &__examples {
    max-width: 1100px;
    margin: 0 auto;
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

.logo-grid {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 500px;
    bottom: 0;
    perspective: 550px;
    -webkit-mask-image: linear-gradient( -180deg,transparent, #000 35%);
    pointer-events: none;
    opacity: .2;
    transform: translateZ(0);

    &__grid {
      position: absolute;
      width: calc(100% + 1000px);
      height: 100%;
      left: -500px;
      transform: rotateX(33deg) translateZ(0);

    }

    &__logos {
      position: absolute;
      width: 100%;
      height: 1000px;
      background-image: url(/logos.svg);
      background-position: 0;
      transform: translateY(-500px);
      animation: logos  7s linear infinite;
      will-change: transform;
    }
}

@keyframes logos {
  0% {
    transform: translateY(0)
  }

  100% {
    transform: translateY(-500px)
  }
}
</style>
