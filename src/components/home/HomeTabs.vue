<template>
  <Section dots="true">


    <h2 class="text-center">Blazing-fast as Default</h2>

    <p class="lead text-center container-sm ">
      Build sites a that are optimized with the <strong>PRPL-pattern</strong> to get perfect Google Lighthouse scores.
    </p>

    <div class="homepage-features grid-cols grid-cols--2 container-md mb">
      <ul >
        <li><Bullet/> Fast Time to Interactive (TTI)</li>
        <li>No render-blocking assets</li>
        <li>Automatic code-splitting</li>
        <li>Automatic critical CSS</li>
        <li>Automatic next page prefetcing</li>
      </ul>
      <ul>
        <li>Navigate without page reloads (SPA)</li>
        <li>PWA-ready out-of-the-box</li>
        <li>Built-in Progressive Images support</li>
        <li>Pre-rendered SEO-friendly markup</li>
        <li>Can be entirely hosted on a CDN</li>
      </ul>
    </div>

    <div id="top" class="home-tabs container text-center">
      <nav class="home-tabs__tabs tabs flex gap-15 flex--no-wrap flex--center mb" style="margin-top:-3%">
        <a href="#" @click="tab = 'graphql'" :class="{active: tab == 'graphql'}">
          Use GraphQL for data
        </a>
        <a href="#" @click="tab = 'pages'" :class="{active: tab == 'pages'}">
          Auto Page Routing
        </a>
        <a href="#" @click="tab = 'templates'" :class="{active: tab == 'templates'}">
          Smart template system
        </a>
        <a href="#" @click="tab = 'images'" :class="{active: tab == 'images'}">
          Auto Optimized Images
        </a>
      </nav>
    </div>


    <transition name="rotate-x">
      <component :is="tab" />
    </transition>


    <div class="text-center">
      <g-link to="/docs" class="button primary">Get started</g-link>
      <a href="//github.com/gridsome/gridsome" class="button plain">GitHub</a>
    </div>

  </Section>
</template>

<script>
import TabGraphQL from './tabs/HomeTabGraphQL'
import TabPages from './tabs/HomeTabPages'
import TabSeo from './tabs/HomeTabSeo'
import TabTemplates from './tabs/HomeTabTemplates'
import TabImages from './tabs/HomeTabImages'
import Bullet from '~/assets/images/bullet.svg'

export default {
  components: {
    Bullet,
    'graphql' : TabGraphQL,
    'pages' : TabPages,
    'seo' :TabSeo,
    'templates' : TabTemplates,
    'images' : TabImages
  },

  data() {
    return {
      tab: 'graphql'
    }
  }
}

</script>
