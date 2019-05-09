<template>
  <Starters>
    <h1>{{ $page.platform.title }} starters</h1>

    <div class="grid-cols grid-cols--3 mb">
      <StarterCard v-for="starter in $page.platform.belongsTo.edges" :key="starter.node.id" :node="starter.node"  />

      <div v-if="$page.platform.belongsTo.edges.length == 0">
        <em>Nothing here yet...</em>
      </div>
    </div>

    <hr />
    <p>
      Feel free to join the 
      <a href="//discord.gg/daeay6n" rel="noopener noreferrer" target="_blank">
        #{{ $page.platform.title }}
      </a> 
      communiy channel in Gridsome Discord.
    </p>

  </Starters>
</template>

<page-query>
query Platform($id: String!) {
  platform(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Starter {
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
  }
}
</page-query>

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

