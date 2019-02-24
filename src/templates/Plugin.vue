<template>
  <Layout :footer="false">
    <div class="plugins container container-main flex gap-60 flex-align-top">
      <AisInstantSearchSsr class="sidebar plugins__sidebar">
        <AisConfigure
          :hitsPerPage="hitsPerPage"
          :analyticsTags="['gridsome']"
          :filters="filters"
        />

        <div class="plugins__search">
          <div class="plugins__search-box">
            <AisSearchBox placeholder="Search for Gridsome plugins" />
          </div>
          <div class="flex flex-space-between">
            <AisStateResults v-slot="{ nbHits }">
              <span class="plugins__count small">{{ nbHits }} plugins</span>
            </AisStateResults>
            <ClientOnly>
              <AisPoweredBy />
            </ClientOnly>
          </div>
        </div>

        <AisInfiniteHits class="plugins__list">
          <template v-slot:item="{ item }">
            <li class="plugin" :class="hitClasses(item)">
              <AisHighlight class="plugin__name" :hit="item" attribute="name" />
              <AisHighlight class="plugin__description" :hit="item" attribute="description" />
              <g-link class="plugin__link" :to="`/plugins/${item.name}`">
                Read more about {{ item.name }}
              </g-link>
            </li>
          </template>
          <template v-slot:loadMore="{ refine, isLastPage }">
            <button v-if="!isLastPage" class="plugins__more button" @click="refine">
              Show more plugins
            </button>
          </template>
        </AisInfiniteHits>
      </AisInstantSearchSsr>

      <Section class="plugin-post" container="md">
        <template v-if="isSingle">
          <div class="plugin-post__meta" v-if="hit">
            <div class="plugin-post__meta_left">
              <a v-if="hit.repository" :href="hit.repository.url" target="_blank" rel="noopener">
                <div :is="repositoryIcon(hit.repository)" />
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
              <span>Downloads last month: {{ hit.humanDownloadsLast30Days }}</span>
            </div>
          </div>

          <VueMarkdown class="post plugin-post__content mb" v-if="hit" :source="hit.readme" />

        </template>
        <template v-else>
          <div class="plugins-intro post">
            <g-image class="plugins-intro__image" blur="10" src="~/assets/images/plugins.png" />
            <div class="plugins-intro__text">
              <h1>Gridsome Plugins</h1>
              <p class="lead">Gridsome plugins are NPM packages that you can install to any project. This is hitly a small, but growing library. <span class="hide-for-small">Use the search bar to the left to find a plugin.</span></p>

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
import GitLabLogo from '~/assets/images/gitlab.svg'
import GitHubLogo from '~/assets/images/github-logo.svg'
import BitbucketLogo from '~/assets/images/bitbucket.svg'
import { createInstantSearch } from 'vue-instantsearch'

const searchClient = algoliasearch(
  'OFCNCOG2CU',
  'e0925566b9cfa7d0d21586a0b365d78c'
)

const { instantsearch, rootMixin } = createInstantSearch({
  indexName: 'npm-search',
  searchClient
})

export default {
  components: {
    VueMarkdown
  },

  mixins: [rootMixin],

  data () {
    return {
      hit: null,
      hitsPerPage: 50,
      filters: 'keywords:gridsome-plugin AND deprecated:false'
    }
  },

  serverPrefetch () {
    return instantsearch.findResultsState({
      hitsPerPage: this.hitsPerPage,
      filters: this.filters
    })
  },

  computed: {
    isSingle () {
      const { id } = this.$route.params
      return id && id !== '1' // the dummy id
    },

    owners () {
      return this.hit
        ? this.hit.owners.map(owner => {
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

    if (this.hit) {
      meta.title = this.hit.name

      if (this.hit.description) {
        meta.meta.push({
          key: 'description',
          name: 'description',
          content: this.hit.description
        })
      }
    }

    return meta
  },

  methods: {
    async fetchCurrent () {
      if (!this.isSingle) {
        return
      }

      const { id: name } = this.$route.params
      const { results: [results] } = await searchClient.search([{
        indexName: 'npm-search',
        query: name
      }])

      this.hit = results.hits.length && results.hits[0].name === name
        ? results.hits[0]
        : null
    },

    hitClasses (hit) {
      return {
        'plugin--active': this.hit && this.hit.name === hit.name
      }
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
