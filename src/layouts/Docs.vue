<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="container flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <!-- <input type="search" placeholder="Search docs..." /> -->

        <template v-for="group in links">
          <h3>{{ group.title }}</h3>
          <ul class="menu" v-for="item in group.items">
            <g-link class="menu__item" tag="li" :to="item.link">
              <a class="menu__link">{{ item.title }}</a>
              <ul class="submenu" v-if="item.link === $route.path" v-for="subtitle in subtitles">
                <g-link class="submenu__item" tag="li" :to="item.link + subtitle.anchor">
                  <a class="submenu__link">{{ subtitle.value }}</a>
                </g-link>
              </ul>
            </g-link>
          </ul>
        </template>

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
