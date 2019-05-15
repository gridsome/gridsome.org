<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">

        <div class="intro__message mb" hidden></div>

        <h1 class="intro__title post"> 
          A Vue.js framework for<br />
          <VueTyper :text="words" :type-delay="30" initial-action="erasing" caret-animation="smooth" />
        </h1>
        
        <p class="intro__lead lead post mb">
          Gridsome helps developers build modern websites & PWAs that are <g-link to="/docs/fast-by-default">fast by default</g-link> for any data source.
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
const words = ['Static Websites', 'The JAMstack', 'the Headless CMS', 'Markdown files']

export default {
  components: {
    VueTyper: process.isServer
      ? { inheritAttrs: false, render: h => h('span', null, [words[0]]) }
      : () => import('vue-typer').then(({ VueTyper }) => VueTyper)
  },

  data () {
    return { words }
  }
}
</script>

<style lang="scss">

@keyframes Type {
  from  {
    color: var(--primary-color);
  }
}

.intro {
  padding: 5% 0;
  .vue-typer {
    display: inline-block;
    text-align: left;
    white-space: nowrap;

    .custom.char {
      color: var(--primary-color-dark);
    }
    
    .custom.char.typed {
      animation: Type 1s;
    }

    .custom.caret {
      background-color: rgba(255,255,255,.5);
      margin: 0 2px;
      width: 2px;
    }
  }

  @media screen and (max-width: 850px) {
    & {
      text-align: center;
    }
  }

  &__title {
    font-size: 3.2rem;
    color: var(--primary-color-dark);
    letter-spacing: -1px;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;

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

    @media screen and (max-width: 550px) {
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
