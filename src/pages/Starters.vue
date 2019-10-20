<template>
  <Starters>
    <h1>Gridsome Starters</h1>
    <p class="mb-x2">Kickstart your Gridsome website with premade projects.</p> 
    
    <div class="grid-cols grid-cols--3 mb">
      <StarterCard v-for="starter in $page.defaultStarters.edges" :key="starter.node.id" :node="starter.node"  />
    </div>

    <hr />

    <h3>Recent</h3>
    <div class="grid-cols grid-cols--3">
      <StarterCard v-for="starter in $page.starters.edges" :key="starter.node.id" :node="starter.node"  />
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
query {
  defaultStarters: allStarter (
    sort: [{ by: "index", order: ASC }]
    filter: {
      featured: {
        eq: true
      }
    }
  ) {
    edges {
      node {
        id
        title
        path
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
      }
    }
  },
  starters: allStarter (
    sortBy: "index"
    order: ASC
    filter: {
      featured: {
        ne: true
      }
    }
  ) {
    edges {
      node {
        id
        title
        description
        preview
        repo
        path
        screenshot  (width: 840, height:840)
        platforms {
          title
          logo
        }
        author {
          title
          path
        }
      }
    }
  }
}
</page-query>


