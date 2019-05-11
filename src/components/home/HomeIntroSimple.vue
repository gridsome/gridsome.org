<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">

        <div class="intro__message mb" hidden></div>

        <h1 class="intro__title post"> 
          A Vue.js framework for the modern web
        </h1>
        
        <p class="intro__lead lead post mb">
          Gridsome helps developers build modern websites & PWAs that are <g-link to="/docs/fast-by-default">fast by default</g-link> for any Headless CMS, Content APIs or Markdown files.
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

<style lang="scss">
.intro {
  @media screen and (max-width: 850px) {
    & {
      text-align: center;
    }
  }

  &__title {
    font-size: 3rem;
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
    font-size: 1.4rem;
    max-width: 890px;
    margin-left: auto;
    margin-right: auto;


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
