<template>
  <Section class="intro" dots="true" dark="true" sway="true" style="padding-top: 0; padding-bottom: 0;">
    <div class="intro__cols grid-cols grid-cols--2">
      <div class="intro__text text-center">    
        <h1>
          <span class="intro__title">
            Insanely fast websites & apps with Vue.js
          </span>
        </h1>

        <p class="intro__lead">
          Gridsome is a Vue-powered static site generator <br />for building modern web projects
        </p>

        <p class="intro__links">
          <g-link  to="/docs" class="button primary">
            Get started
          </g-link>
          <g-link  to="/learn" class="button">
            Tutorial
          </g-link>
        </p>
        <p class="intro__info">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank">
            <span>GitHub (v{{ $static.metaData.gridsomeVersion }})</span>
          </a>
        </p>
      </div>
      <div class="hide-for-small" style="padding-top: 3%;">
        <div class="home-anim">
          <div class="home-anim__source-logos"><g-image alt="Logos" blur="1" src="~/assets/images/cms-logos.png" /></div>
          <div class="home-anim__lines-in"> <lines-in /> </div>
          <div class="home-anim__lines-out"> <lines-out  /> </div>
          <div class="home-anim__logo"> <Logo /> </div>
        </div>
      </div>
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
import LinesOut from '~/assets/images/home-lines-out.svg'
import LinesIn from '~/assets/images/home-lines-in.svg'
import Logo from '~/assets/images/home-logo.svg'

export default {
  components: {
    LinesOut,
    LinesIn,
    Logo
  }
}
</script>

<style lang="scss">

@media screen and (max-width: 750px) {
 .intro .grid-cols{
    grid-template-columns: repeat(1, 1fr);
  }
}

.intro {
  &__cols {
    max-width: 1080px;
    margin: 0 auto;
  }

  &__text {
    padding-top: 22%;
    padding-bottom: 26%

  }

  &__title {
    line-height: 1.35;
    font-size: 2rem;
  }

  &__info {
    font-size: .85rem;
    opacity: .6;
  }
}



.home-anim {
  position: relative;
  transform: translateZ(0);

  img {
    display: block;
    position: relative;
    z-index: 1;
  }

  > div {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  &__lines-in svg path {
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-dasharray: 0 20;
    animation: stroke 800ms linear infinite;
  }

  &__lines-out path {
    stroke-width: 7px;
    stroke-linecap: round;
    stroke-dasharray: 0 20;
    animation: stroke-invert 400ms linear infinite;
  }

}
</style>
