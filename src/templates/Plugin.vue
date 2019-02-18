<template>
  <Layout class="plugins">
    <div class="container flex gap-60 flex-align-top">
      <div class="sidebar plugins__sidebar">
        <div class="plugins__search">
          <input type="search" placeholder="Search for Gridsome plugin" @input="search">
          <div>{{ plugins.length }} plugins</div>
        </div>
        <ul class="plugins__list">
          <li class="plugin" v-for="plugin in plugins" :key="plugin.name" :class="pluginClass(plugin)">
            <h4 class="plugin__name">{{ plugin.name }}</h4>
            <div class="plugin__description" v-html="plugin.description"></div>
            <g-link class="plugin__link" :to="{ name: 'plugin', params: plugin.params }">
              Read more about {{ plugin.name }}
            </g-link>
          </li>
        </ul>
      </div>
      <Section container="md">
        <template v-if="isSingle">
          <div v-if="isLoading">Loading...</div>
          <VueMarkdown v-if="current" :source="current.readme" />
        </template>
        <template v-else>
          <h1>Plugins</h1>
        </template>
      </Section>
    </div>
  </Layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { search, browseAll, browseSingle } from '~/utils/plugins'

export default {
  components: {
    VueMarkdown
  },

  data () {
    return {
      hits: [],
      isLoading: false,
      current: null
    }
  },

  computed: {
    isSingle () {
      return !!this.$route.params.namespace
    },

    plugins () {
      return this.hits.slice()
        .sort((a, b) => b.downloadsRatio - a.downloadsRatio)
        .map(hit => {
          const [ namespace, id ] = hit.name.split('/')
          
          return {
            ...hit,
            params: {
              namespace,
              id
            }
          }
        })
    }
  },

  watch: {
    $route: {
      handler: 'fetchCurrent',
      immediate: true
    }
  },

  async mounted () {
    this.hits = await browseAll()
  },

  methods: {
    async fetchCurrent () {
      const { namespace, id } = this.$route.params
      const name = id ? `${namespace}/${id}` : namespace

      this.isLoading = true
      this.current = name ? await browseSingle(name) : null
      this.isLoading = false
    },

    search (event) {
      clearTimeout(this.__search)
      this.__search = setTimeout(async () => {
        this.hits = await browseAll(event.target.value)
        this.__search = null
      }, 300)
    },

    pluginClass (plugin) {
      return {
        'plugin--active': this.current && this.current.name === plugin.name
      }
    }
  }
}
</script>

<style lang="scss">
.plugins {
  &__sidebar {
    padding-top: 0;
    min-width: 375px;
    max-width: 375px;
  }

  &__search {
    position: sticky;
    top: 0;
    margin: 0;
    padding-top: calc(var(--space) * 2);
    padding-right: var(--space);
    padding-bottom: calc(var(--space) / 2);
    background: #fff;
    z-index: 1;
  }

  &__list {
    margin: 0;
    list-style: none;
  }
}

.plugin {
  margin: 0;
  padding: calc(var(--space) / 2);
  padding-left: 0;
  position: relative;

  &:hover & {
    &__name {
      color: var(--primary-link-color);
    }
  }

  &--active & {
    &__name {
      color: var(--primary-color);
    }
  }

  &__name {
    margin: 0 0 5px;
  }

  &__link {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-indent: -1000px;
  }
}
</style>
