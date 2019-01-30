<template>
  <Layout>
    <Section container="md">
      <ul>
        <li v-for="{ name, namespace, id, version } in plugins" :key="name">
          <g-link :to="{ name: 'plugin', params: { namespace, id } }">
            {{ name }} {{ version }}
          </g-link>
        </li>
      </ul>
    </Section>
  </Layout>
</template>

<script>
import { browseAll } from '~/utils/plugins'

export default {
  data () {
    return {
      hits: []
    }
  },
  computed: {
    plugins () {
      return this.hits.slice()
        .sort((a, b) => b.downloadsRatio - a.downloadsRatio)
        .map(hit => {
          const [ namespace, id ] = hit.name.split('/')
          
          return {
            name: hit.name,
            version: hit.version,
            namespace,
            id
          }
        })
    }
  },
  async mounted () {
    this.hits = await browseAll('gridsome-plugin')
  }
}
</script>
