<template>
  <Layout class="plugins" :footer="false">
    <div class="container flex gap-60 flex-align-top">
      <div class="sidebar plugins__sidebar">
        <div class="plugins__search">
          <input type="search" placeholder="Search for Gridsome plugins" @input="search">
          <div class="plugins__total">{{ plugins.length }} plugins</div>
        </div>
        <ul class="plugins__list">
          <li class="plugin" v-for="plugin in plugins" :key="plugin.name" :class="pluginClass(plugin)">
            <span class="plugin__name">{{ plugin.name }}</span>
            <div class="plugin__description" v-html="plugin.description"></div>
            <g-link class="plugin__link" :to="`/plugins/${plugin.name}`">
              Read more about {{ plugin.name }}
            </g-link>
          </li>
        </ul>
        <div class="plugins__poweredBy">
          <AlgoliaLogo />
        </div>
      </div>
      <Section class="plugin-post" container="md">
        <template v-if="isSingle">
          <div v-if="isLoading">Loading...</div>
          <div class="plugin-post__meta" v-if="current">

            <div class="plugin-post__meta_left">
              <a v-if="current.repository" :href="current.repository.url" target="_blank" rel="noopener">
                <div :is="repositoryIcon(current.repository)" />
              </a>
              <div class="plugin-post__users">
                <span v-if="current.owners" v-for="owner in current.owners" :key="owner.name">
                  <a :href="owner.link" target="_blank" rel="noopener">
                    <img v-if="owner.avatar" :src="owner.avatar" :title="owner.name" />
                  </a>
                </span>
              </div>
            </div>
       
            <div class="plugin-post__meta_right">
              <span>Downloads this month: {{ current.humanDownloadsLast30Days }}</span>
            </div>
          </div>

          <VueMarkdown class="post plugin-post__content mb" v-if="current" :source="current.readme" />

        </template>
        <template v-else>
          <div class="plugins-intro post">
            <g-image class="plugins-intro__image" src="~/assets/images/plugins.svg" immediate />
            <div class="plugins-intro__text">
              <h1>Gridsome Plugins</h1>
              <p class="lead">Gridsome plugins are NPM packages that you can install to any project. This is currently a small, but growing library. Use the search bar to the left to find a plugin.</p>

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
import GitHubLogo from '~/assets/images/github-logo.svg'
import AlgoliaLogo from '~/assets/images/algolia.svg'
import BitbucketLogo from '~/assets/images/bitbucket.svg'
import GitLabLogo from '~/assets/images/gitlab.svg'

import { search, browseAll, browseSingle } from '~/utils/plugins'

export default {
  components: {
    VueMarkdown,
    AlgoliaLogo
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
      return !!this.$route.params.id
    },

    plugins () {
      return this.hits.slice()
        .sort((a, b) => b.downloadsRatio - a.downloadsRatio)
        .map(hit => {          
          return {
            ...hit,
            params: {
              id: hit.name
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
      const { id: name } = this.$route.params

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

<style lang="scss">
.plugins {
  &__sidebar {
    min-width: 375px;
    max-width: 375px;
    padding:0 10px 0 0;
  }

  &__search {
    position: sticky;
    top: 0;
    margin: 0;
    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) / 2);
    background: rgba(255,255,255,.95);
    z-index: 1;
  }

  &__poweredBy {
    position: sticky;
    bottom:0;
    padding: 2px 10px 15px;
    background: rgba(255,255,255,.95);
    svg {
      width: 130px;
      opacity: .6;
    }
  }

  &__list {
    margin: 0;
    list-style: none;
    padding-bottom: 20px;
  }

  &__total {
    font-size: .8rem;
    opacity: .6;
    padding: 5px;
  }
}

.plugin {
  padding: calc(var(--space) / 2);
  position: relative;
  border-top: 1px solid var(--border-color);
  margin-bottom: 0;

  &:hover & {
    &__name {
      color: var(--primary-link-color);
    }
  }

  &--active  {
    & .plugin__name {
      color: var(--primary-color);
    }
  }

  &__name {
    font-weight: bolder;
    display: block;
  }

  &__description {
    opacity: .8;
    font-size: .9rem;
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

.plugins-intro {
  text-align: center;

  &__text {
    margin: -20% auto 0;
    max-width: 550px;
  }

  &__image {
    margin: 0 auto;
  
  }
}

.plugin-post {
  &__meta {
    padding-bottom: var(--space);
    border-bottom: 1px solid var(--border-color);
    margin-bottom: var(--space);
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      opacity: .9;
    }
    svg {
      width: 28px;
      height: 28px;
      opacity: .4;
    }
  }

  &__users {
    display: inline-flex;
    align-items: center;
    margin-left: calc(var(--space) / 2);

    span {
      display: inline-flex;
      align-items: center;
    }

    img {
      width: 28px;
      height: 28px;
      margin: 0;
      border-radius: 99px;
    }
  }

  &__content {  }
}
</style>
