<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">

        <div class="intro__message mb" hidden></div>

        <h1 class="intro__title post"> 
          A better way to build websites
        </h1>
        
        <p class="intro__lead lead post mb">
          Gridsome is a <strong>Vue.js-powered</strong> framework that helps developers build modern JAMstack websites that are <g-link to="/docs/fast-by-default">fast by default</g-link>
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
  padding: calc(2.5% + var(--space)) 0;

  &__title {
    font-size: 3.5rem;
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
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.4rem;
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
