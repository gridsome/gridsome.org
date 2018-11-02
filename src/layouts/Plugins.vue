<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="container flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <template v-for="group in links">
          <h3>{{ group.title }}</h3>
          <p v-for="item in group.items">
            <g-link :to="item.link">
              {{ item.title }}
            </g-link>
          </p>
        </template>

      </div>
      <Section class="flex-fit" container="md">
        <slot />
      </Section>
    </div>
  </Layout>
</template>


<script>
import links from '@/data/plugin-links.yaml'

export default {
  computed: {
    links () {
      return links
    }
  }
}
</script>
