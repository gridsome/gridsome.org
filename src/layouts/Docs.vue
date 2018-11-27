<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="container flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <!-- <input type="search" placeholder="Search docs..." /> -->

        <div class="menu-group" v-for="group in links">
          <h3>{{ group.title }}</h3>
          <ul class="menu">
            <li class="menu__item" v-for="item in group.items">
              <g-link class="menu__link" :to="item.link">{{ item.title }}</g-link>
              <ul class="submenu" v-if="item.link === $route.path && subtitles.length">
                <li class="submenu__item" v-for="subtitle in subtitles">
                  <g-link class="submenu__link" :to="item.link + subtitle.anchor">{{ subtitle.value }}</g-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

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
    links () {
      return links
    }
  }
}
</script>