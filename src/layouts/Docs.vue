<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="container flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <transition-group name="menu-item">
          <template v-for="(group, i1) in links">
            <h3 class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>

            <template v-for="(item, i2) in group.items">
              <g-link class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
                {{ item.title }}
              </g-link>
              <ul v-if="item.link === currentPath && subtitles.length" :key="`submenu-${i1}-${i2}`" class="menu-item submenu">
                <li class="submenu__item" v-for="subtitle in subtitles">
                  <g-link class="submenu__link" :to="item.link + subtitle.anchor">
                    {{ subtitle.value }}
                  </g-link>
                </li>
              </ul>
            </template>
          </template>
        </transition-group>

      </div>
      <Section class="flex-fit" container="md">
        <slot />
      </Section>

    </div>
  </Layout>
</template>

<script>
export default {
  props: {
    subtitles: Array,
    links: Array
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path
    },
  }
}
</script>

<style lang="scss">
.docs-page .post {

  max-width: 100%;

  ul li {
    margin-bottom: .2rem;
  }
  
  h1, h2, h3 {
    padding-top: 6rem;
    margin-top: -5rem;
    position: relative;
    z-index: -1;

    a {
      float: left;
      position: relative;
      top: 0.12em;
      margin-left: -1.2em;
      font-size: 0.85em;
      text-align: center;
      width: 0.8em;
      opacity: 0.0;

      &::before {
        content: " ";
        position: absolute;
        top: 0;
        height: 100%;
        width: calc(100% + 0.5em);
      }

      &::after {
        display: none;
      }
    }
  }

  h2 {
    &::before {
      content: " ";
      display: block;
      margin-bottom: 1.5rem;
      border-top: 1px solid var(--border-color);
    }
  }
  
  h3 { opacity: .9 }

  h4, h5, h6 { opacity: .8 }

  ul > li > p {
    font-weight: 400;
  }
}
</style>