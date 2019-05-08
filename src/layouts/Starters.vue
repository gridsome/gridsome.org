<template>
  <Layout class="has-sidebar starter-page" :footer="false">
    <div class="container flex flex-align-top">
      
      <div class="sidebar-bg hide-for-small"></div>
      
      <div class="sidebar">

          <h3 class="menu-item" >Browse</h3>

          <g-link class="menu-item menu-link" to="/starters">
            All starters
          </g-link>

          <h3 class="menu-item" >Platforms</h3>

          <g-link class="menu-item platform-link" v-for="item in $static.platforms.edges"  :key="item.node.id" :to="item.node.path" >
           <g-image :src="item.node.logo" /> 
           {{ item.node.title }}
          </g-link>

      </div>
    
      <Section class="starters-content flex-fit">
          <slot />
      </Section>
    </div>
  </Layout>
</template>

<style lang="scss">
.starters-content {
  padding: var(--space-x2);
}
.platform-link{
  display: flex;
  align-items: center;
  padding: 7px 0;

  img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin: 0 10px 0 0;
  }
}
</style>

<static-query>
{
  platforms: allPlatform {
    edges {
      node {
        id
        title
        path
        logo
      }
    }
  }
}
</static-query>
