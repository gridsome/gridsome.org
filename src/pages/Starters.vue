<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="container flex flex-align-top">
      <div class="sidebar-bg hide-for-small"></div>
      <div class="sidebar">asdf</div>
      
      <div class="starter-content">
          <h1>Gridsome Starters</h1>
       
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Starters {
  defaultStarters: allStarter (order: ASC, perPage: 4) {
    edges {
      node {
        id
        title
        description
        preview
        gitUrl
        platforms {
          title
          logo
        }
        author {
          title
          path
        }
        path
        screenshot (width: 560, height: 664)
      }
    }
  },
  starters: allStarter (order: ASC, skip: 4) {
    edges {
      node {
        id
        title
        description
        preview
        gitUrl
        author {
          title
          path
        }
        path
        screenshot (width: 560, height: 664)
      }
    }
  }
}
</page-query>

<script>
import IconStarters from '@/assets/images/icon-starters.svg'
import GitLogo from '@/assets/images/github-logo.svg'

export default {
  components: {
    IconStarters,
    GitLogo
  },
}
</script>

<style lang="scss">
.starter-content {
  padding: var(--space-x2);
}
</style>


