<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="container container-main flex gap-60 flex-align-top">
      <div class="sidebar">
        
        <transition-group name="menu-item">
          <template v-for="(group, i1) in links">
            <h3 class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>

            <template v-for="(item, i2) in group.items">
              <g-link class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
                {{ item.title }}
              </g-link>
              <ul v-if="item.link === currentPath && subtitles && subtitles.length" :key="`submenu-${i1}-${i2}`" class="menu-item submenu">
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
        <p>
          <a :href="editLink" target="_blank" class="github-edit-link">
            <Github />
            <span>Edit this page on GitHub</span>
          </a>
        </p>
        <nav class="docs-nav">
          <div class="docs-nav__previous">
            <g-link v-if="previousPage" class="docs-nav__link" :to="previousPage.link">
              {{ previousPage.title }}
            </g-link>
          </div>
          <div class="docs-nav__next">
            <g-link v-if="nextPage" class="docs-nav__link" :to="nextPage.link">
              {{ nextPage.title }}
            </g-link>
          </div>
        </nav>
      </Section>
    </div>
  </Layout>
</template>

<script>
import Github from '~/assets/images/github-logo.svg'

export default {
  components: {
    Github
  },
  props: {
    subtitles: Array,
    links: Array
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path
    },
    editLink () {
      let path = this.currentPath
      if((path.match(new RegExp("/", "g")) || []).length == 1) path = path + '/README'
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`
    },
    items () {
      return this.links.reduce((acc, group) => (acc.push(...group.items), acc), [])
    },
    currentIndex () {
      return this.items.findIndex(item => item.link === this.$route.path)
    },
    nextPage () {
      return this.items[this.currentIndex + 1]
    },
    previousPage () {
      return this.items[this.currentIndex - 1]
    }
  }
}
</script>
