<template>
  <Layout class="plugins" :footer="false">
    <div class="container container-main flex gap-60 flex-align-top">
      <div class="sidebar plugins__sidebar">
        <ClientOnly>
          <AisInstantSearch :search-client="searchClient" index-name="npm-search">
            <AisConfigure
              :hitsPerPage="50"
              :analyticsTags="['gridsome']"
              filters="keywords:gridsome-plugin AND deprecated:false"
            />

            <div class="plugins__search">
              <AisSearchBox placeholder="Search for Gridsome plugins" />
              <div class="flex flex-space-between">
                <AisStateResults v-slot="{ nbHits }">
                  <span class="small">{{ nbHits }} plugins</span>
                </AisStateResults>
                <AisPoweredBy />
              </div>
            </div>

            <AisInfiniteHits class="plugins__list">
              <template v-slot:item="{ item }">
                <li class="plugin" :class="pluginClass(item)">
                  <AisHighlight class="plugin__name" :hit="item" attribute="name" />
                  <AisHighlight class="plugin__description" :hit="item" attribute="description" />
                  <a class="plugin__link" href="javascript:void(0)" @click.prevent="showPlugin(item)">
                    Read more about {{ item.name }}
                  </a>
                </li>
              </template>
              <template v-slot:loadMore="{ refine, isLastPage }">
                <button v-if="!isLastPage" class="plugins__more button" @click="refine">
                  Show more plugins
                </button>
              </template>
            </AisInfiniteHits>
          </AisInstantSearch>
        </ClientOnly>
      </div>

      <Section class="plugin-post" container="md">
        <template v-if="isSingle">
          <div class="plugin-post__meta" v-if="current">
            <div class="plugin-post__meta_left">
              <a v-if="current.repository" :href="current.repository.url" target="_blank" rel="noopener">
                <div :is="repositoryIcon(current.repository)" />
              </a>
              <div class="plugin-post__users">
                <span v-for="owner in owners" :key="owner.name">
                  <a :href="owner.link" target="_blank" rel="noopener">
                    <img v-if="owner.avatar" :src="owner.avatar" :title="owner.name" />
                  </a>
                </span>
              </div>
            </div>
            <div class="plugin-post__meta_right">
              <span>Downloads last month: {{ current.humanDownloadsLast30Days }}</span>
            </div>
          </div>

          <VueMarkdown class="post plugin-post__content mb" v-if="current" :source="current.readme" />

        </template>
        <template v-else>
          <div class="plugins-intro post">
            <g-image class="plugins-intro__image" blur="10" src="~/assets/images/plugins.png" />
            <div class="plugins-intro__text">
              <h1>Gridsome Plugins</h1>
              <p class="lead">Gridsome plugins are NPM packages that you can install to any project. This is currently a small, but growing library. <span class="hide-for-small">Use the search bar to the left to find a plugin.</span></p>

              <p>Want to contribute to plugins library? <g-link to="/docs/how-to-create-a-plugin">Learn how to build a plugin</g-link></p>
            </div>
          </div>
        </template>
      </Section>
     </div>
  </Layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import algoliasearch from 'algoliasearch/lite'
import GitHubLogo from '~/assets/images/github-logo.svg'
import AlgoliaLogo from '~/assets/images/algolia.svg'
import BitbucketLogo from '~/assets/images/bitbucket.svg'
import GitLabLogo from '~/assets/images/gitlab.svg'
// import { history as historyRouter } from 'instantsearch.js/es/lib/routers'
// import { simple as simpleMapping } from 'instantsearch.js/es/lib/stateMappings'

export default {
  components: {
    VueMarkdown,
    AlgoliaLogo
  },

  data () {
    return {
      current: null,
      searchClient: algoliasearch(
        'OFCNCOG2CU',
        'e0925566b9cfa7d0d21586a0b365d78c'
      )
      // routing: {
      //   router: historyRouter(),
      //   stateMapping: simpleMapping()
      // }
    }
  },

  computed: {
    isSingle () {
      const { id } = this.$route.params
      return id && id !== '1' // the dummy id
    },

    owners () {
      return this.current
        ? this.current.owners.map(owner => {
            if (owner.name === 'hjvedvik') {
              return {
                ...owner,
                name: 'gridsome',
                link: 'https://www.npmjs.com/org/gridsome',
                avatar: 'https://avatars0.githubusercontent.com/u/17981963?s=200&v=4'
              }
            }

            return owner
          })
        : []
    }
  },

  watch: {
    $route: {
      handler: 'fetchCurrent',
      immediate: true
    }
  },

  metaInfo () {
    const meta = {
      title: 'Plugins',
      meta: []
    }

    if (this.current) {
      meta.title = this.current.name

      if (this.current.description) {
        meta.meta.push({
          key: 'description',
          name: 'description',
          content: this.current.description
        })
      }
    }

    return meta
  },

  methods: {
    async fetchCurrent () {
      const { id: name } = this.$route.params

      const { results: [results] } = await this.searchClient.search([{
        indexName: 'npm-search',
        query: name
      }])

      this.current = results.hits.length && results.hits[0].name === name
        ? results.hits[0]
        : null
    },

    pluginClass (hit) {
      return {
        'plugin--active': this.current && this.current.name === hit.name
      }
    },

    showPlugin (hit) {
      this.$router.push({
        path: `/plugins/${hit.name}`
      })
    },

    repositoryIcon (repository) {
      switch (repository.host) {
        case 'github.com': GitHubLogo; break
        case 'gitlab.com': GitLabLogo; break
        case 'bitbucket.com': BitbucketLogo; break
      }

      return GitHubLogo
    }
  }
}
</script>
