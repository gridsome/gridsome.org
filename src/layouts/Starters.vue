<template>
  <Layout class="starters-page" primary-bg="true" :footer="false">
      <div class="starters-header">
        <div class="flex gap-20 container">
          <g-link class="menu-item menu-link" to="/starters">
            All starters
          </g-link>
          <g-link class="menu-item platform-link" v-for="item in $static.platforms.edges"  :key="item.node.id" :to="item.node.path" >
           <g-image :src="item.node.logo" /> 
           {{ item.node.title }}
          </g-link>
        </div>
      </div>
    
      <Section class="starters-content flex-fit">
          <slot />
      </Section>
    </div>
  </Layout>
</template>

<style lang="scss">
.starters-header {
  background-color: #FFF;
  border-bottom: 1px solid var(--border-color);
  font-size: .9rem;

  .flex {
    min-height: 50px;
  }

  a {
    color: currentColor;
    text-decoration: none;
    &:hover {
      color: var(--primary-color);
    }
    &.active--exact {
      color: var(--primary-color-dark);
    }
  }
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
