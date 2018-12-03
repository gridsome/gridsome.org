<template>
  <Layout class="has-sidebar" :footer="false">
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
import links from '@/data/doc-links.yaml'

export default {
  props: {
    subtitles: Array
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path
    },
    links () {
      return links
    }
  }
}
</script>
