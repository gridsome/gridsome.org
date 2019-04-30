<template>
  <Starters>
    <g-link to="/starters" class="mb" style="display:block;">← All Starters</g-link>
    <h1>Gridsome starter</h1>
  </Starters>
</template>

<script>
import Starters from '~/layouts/Starters.vue'

export default {
  components: {
    Starters
  }
}
</script>

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