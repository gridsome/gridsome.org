<template>
  <Layout>

    <template slot="sidebar">
      <div>
        <h3 class="menu-item">Browse</h3>
        <g-link class="menu-item menu-link" to="/starters/">
          All starters
        </g-link>
        <h3 class="menu-item" >Platforms</h3>
        <g-link class="menu-item platform-link" v-for="item in platforms"  :key="item.node.id" :to="item.node.path" >
          <g-image v-if="item.node.logo" :src="item.node.logo" />
          {{ item.node.title }}
          <span class="platform-count" :class="{'platform-count--fade-out': item.node.belongsTo.totalCount == 0}">
            {{ item.node.belongsTo.totalCount }}
          </span>
        </g-link>
      </div>
    </template>

    <template name="default">
      <slot />
    </template>
  </Layout>
</template>

<static-query>
{
  platforms: allPlatform (order: ASC) {
    edges {
      node {
        id
        title
        path
        logo
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    platforms () {
      return this.$static.platforms.edges.sort((a, b) => {
        return b.node.belongsTo.totalCount - a.node.belongsTo.totalCount
      })
    }
  }
}
</script>
