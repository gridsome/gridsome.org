<template>
  <Section id="top" dots="true">
    <div class="home-tabs container text-center">
      <nav class="home-tabs__tabs tabs flex gap-15 flex--no-wrap flex--center mb" style="margin-top:-3%">
        <a href="#" v-scroll-to="{ el: '#top' }"  @click="tab = 'graphql'" :class="{active: tab == 'graphql'}">
          Use GraphQL for data
        </a>
        <a href="#" v-scroll-to="{ el: '#top' }" @click="tab = 'pages'" :class="{active: tab == 'pages'}">
          Auto Page Routing
        </a>
        <a href="#" v-scroll-to="{ el: '#top' }" @click="tab = 'templates'" :class="{active: tab == 'templates'}">
          Smart template system
        </a>
        <a href="#" v-scroll-to="{ el: '#top' }" @click="tab = 'images'" :class="{active: tab == 'images'}">
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

export default {
  components: {
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


<style lang="scss">
.home-tabs {
  background-color: rgba(255,255,255,.9);
  position: sticky; 
  top:-1px;
  z-index: 100;

  &__tabs {
    padding: 10px 0;
  }
}
</style>
