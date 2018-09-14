<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <input type="search" placeholder="Search docs..." />

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

<style lang="scss">
  .sidebar h3 {
    font-size: .75rem;
    color: #7a9a8a;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 35px 0 15px;
  }
  .sidebar p {
    margin-bottom: 5px;
    font-size: .9rem;
  }

  .sidebar a {
    color: currentColor;
    opacity: 1;

    &:hover {
      opacity: .6;
    }

    &.active--exact {
      color: #000;
      opacity: 1;
      font-weight: 600;
    }
  }

</style>

<static-query>
query Docs {
  docs: allDocPage {
    edges {
      node {
        path
        title: headings (depth: h1) {
          value
        }
        headings (depth: h2) {
          value
          anchor
        }
      }
    }
  },
}
</static-query>

<script>
import links from '@/data/doc-links.yaml'

export default {
  computed: {
    links () {
      return links
    }
  }
}
</script>
