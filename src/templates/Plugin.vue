<template>
  <Layout>
    <Section v-if="pkg" container="md">
      <p>Version: {{ pkg.version }}</p>
      <p>Downlaods last month: {{ pkg.humanDownloadsLast30Days }}</p>
      <VueMarkdown :source="pkg.readme" />
      <pre>{{ pkg }}</pre>
    </Section>
  </Layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { browseSingle } from '~/utils/plugins'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return {
      pkg: null
    }
  },
  computed: {
    name () {
      const { namespace, id } = this.$route.params
      return id ? `${namespace}/${id}` : namespace
    }
  },
  async mounted () {
    this.pkg = await browseSingle(this.name)
  }
}
</script>
