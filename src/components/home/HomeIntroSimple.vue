<template>
  <Section class="intro" dark="true">
    <div class="intro__top text-center">
      <div class="intro__message" hidden>
        <g-link to="/blog/2019/02/19/gridsome-v05"><span>Introducing Gridsome Staging &rarr;</span></g-link>
      </div>

      <h1 class="intro__title post"> 
       Build awesomely fast JAMstack <br class="hide-for-small"/>websites for any data source
      </h1>

      <p class="intro__lead lead post mb">
        Gridsome is a free & open-source <strong>Vue.js-powered framework</strong> for building the fastest possible websites for <strong>any Headless CMS, Content APIs or Markdown-files</strong>. 
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
  background-color: var(--primary-color);
  padding: calc(3.33% + 50px) 0;


  &__title {
    font-size: 3.3rem;
    color: var(--primary-color);
    letter-spacing: -1px;
    font-weight: 600;
    @media screen and (max-width: 850px) {
      & {
        font-size: 2rem;
      }
    }
  }

  &__lead {
    max-width: 800px;
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
      background-color: var(--code-color);
      text-decoration: none;
      padding: 2px 15px;
      border: 1px solid var(--border-color-darker);
      border-radius: 99px;
      opacity: .75;
      transition: box-shadow .3s, opacity .3s;
      &:hover {
        opacity: 1;
        box-shadow: var(--glow);
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
    -webkit-mask-image: linear-gradient( -180deg,transparent, #000 20%);
    pointer-events: none;
    opacity: .2;

    &__grid {
      position: absolute;
      width: calc(100% + 1000px);
      height: 100%;
      left: -500px;
      transform: rotateX(42deg);
    }

    &__logos {
      position: absolute;
      width: 100%;
      height: 1000px;
      background-image: url(/logos.svg);
      background-position: 0;
      transform: translateY(-500px);
      animation: logos 10s linear infinite;
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
