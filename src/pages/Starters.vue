<template>
  <Starters>
    <h1>Gridsome Starters</h1>    
    <hr />
    <h3>Default starters <small>Barebone starters with minimal boilerplate</small></h3>

    <div class="grid-cols grid-cols--3 mb">
      <StarterCard v-for="starter in $page.defaultStarters.edges" :node="starter.node"  />
    </div>

    <hr />

    <h3>Recent</h3>
    <div class="grid-cols grid-cols--3">
      <StarterCard v-for="starter in $page.starters.edges" :node="starter.node"  />
    </div>
  </Starters>
</template>

<script>
import Starters from '~/layouts/Starters.vue'
import StarterCard from '~/components/StarterCard.vue'

export default {
  components: {
    Starters,
    StarterCard
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
        repo
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
        repo
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
  }
}
</page-query>


