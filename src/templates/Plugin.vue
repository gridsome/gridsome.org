<template>
  <Layout class="plugins" :footer="false">
    <div class="container flex gap-60 flex-align-top">
      <div class="sidebar plugins__sidebar">
        <div class="plugins__search">
          <input type="search" placeholder="Search for Gridsome plugin" @input="search">
          <div class="plugins__total">{{ plugins.length }} plugins</div>
        </div>
        <ul class="plugins__list">
          <li class="plugin" v-for="plugin in plugins" :key="plugin.name" :class="pluginClass(plugin)">
            <span class="plugin__name">{{ plugin.name }}</span>
            <div class="plugin__description" v-html="plugin.description"></div>
            <g-link class="plugin__link" :to="{ name: 'plugin', params: plugin.params }">
              Read more about {{ plugin.name }}
            </g-link>
          </li>
        </ul>
      </div>
      <Section class="plugin-post" container="md">
        <template v-if="isSingle">
          <div v-if="isLoading">Loading...</div>
          <div class="plugin-post__meta" v-if="current">

            <div class="plugin-post__meta_left">
              <a v-if="current.repository" :href="current.repository.url">
                <git-hub-logo />
              </a>
              <div class="plugin-post__users">
                <span v-if="current.owners" v-for="owner in current.owners">
                  <a :href="owner.link">
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

          <div v-if="current" class="plugin-post__edit">
            <a class="github-edit-link" v-if="current.repository" :href="current.repository.url + '/README.md'"> 
              <git-hub-logo /> Edit this page on GitHub
            </a>
          </div>

        </template>
        <template v-else>
          <div class="plugins-intro post">
            <g-image class="plugins-intro__image" src="~/assets/images/plugins.svg" />
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
import { search, browseAll, browseSingle } from '~/utils/plugins'
import GitHubLogo from '~/assets/images/github-logo.svg'

export default {
  components: {
    VueMarkdown,
    GitHubLogo
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
    min-width: 375px;
    max-width: 375px;
    padding:0 10px 50px 0;
  }

  &__search {
    position: sticky;
    top: 0;
    margin: 0;
    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) / 2);
    background: #fff;
    z-index: 1;
  }

  &__list {
    margin: 0;
    list-style: none;
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
      opacity: .6;
    }
    svg {
      width: 28px;
      height: 28px;
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
