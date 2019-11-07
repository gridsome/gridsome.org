<template>
  <Layout :footer="false">
    <div class="plugins container flex flex-align-top" style="position: relative;">
      
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
              <div class="plugin-post__users">
                <span v-for="owner in owners" :key="owner.name">
                  <a :href="owner.link" target="_blank" rel="noopener">
                    <img class="plugin-post__users-image" v-if="owner.avatar" :src="owner.avatar" :title="owner.name" />
                    <span class="plugin-post__users-name" v-if="owners.length == 1">
                      {{ owner.name }}

                      <i v-if="owner.name == 'gridsome'" class="plugin-post__users-tag">Official Plugin</i>
                    </span>
                  </a>
                </span>
              </div>

            
            </div>
            <div class="plugin-post__meta_right">
              <a
                rel="noopener noreferrer"
                target="_blank"
                v-if="hit.repository" :href="hit.repository.url"
                title="View on Github"
                aria-label="View on Github"
                class="button button--blank">
                <div :is="repositoryIcon(hit.repository)" />
              </a>
              <span>Downloads last month: {{ hit.humanDownloadsLast30Days }}</span>
            </div>
          </div>

          <div class="plugin-post__content mb" v-if="hit" v-html="content" />

        </template>
        <template v-else>
          <div class="plugins-intro container-sm post">
            <Connect />
            <div class="plugins-intro__text">
              <h1>Gridsome Plugins</h1>
              <p class="lead">Gridsome plugins are NPM packages that you can install to any project. <span class="hide-for-small">Use the search bar to the left to find a plugin.</span></p>

              <p>Want to contribute to plugins library? <g-link to="/docs/how-to-create-a-plugin">Learn how to build a plugin</g-link></p>
            </div>
          </div>
        </template>
      </Section>
     </div>
  </Layout>
</template>

<script>
import markdown from '../utils/markdown'
import algoliasearch from 'algoliasearch/lite'
import GitLabLogo from '~/assets/images/gitlab.svg'
import GitHubLogo from '~/assets/images/github-logo.svg'
import BitbucketLogo from '~/assets/images/bitbucket.svg'
import Connect from '~/components/Connect.vue'

import {
  createInstantSearch,
  AisInstantSearchSsr,
  AisStateResults,
  AisInfiniteHits,
  AisHighlight,
  AisConfigure,
  AisSearchBox,
  AisPoweredBy
} from 'vue-instantsearch'

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
    Connect,
    AisPoweredBy,
    AisSearchBox,
    AisConfigure,
    AisHighlight,
    AisInfiniteHits,
    AisStateResults,
    AisInstantSearchSsr
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
      return Boolean(this.$route.params.id)
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
    },

    content () {
      return this.hit && this.hit.readme
        ? markdown(this.hit.readme)
        : ''
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

      this.hit = results.hits.find(hit => hit.name === name)
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
