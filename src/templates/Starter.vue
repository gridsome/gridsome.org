<template>
  <Starters class="starter">
      <div class="starter__header flex">
        <g-image class="starter__header-platform-logo" v-if="$page.starter.platforms" :src="$page.starter.platforms.logo" />
        <strong class="starter__header-title">{{ $page.starter.title }}</strong>
        <span class="starter__header-author">by {{ $page.starter.author.title }}</span>

        <div class="flex gap-20" style="margin-left: auto">
          <a class="button button--small button--blank hide-for-small">View on Github</a>
          <a class="button button--small button--blank hide-for-small">Live preview</a>
          
          <Popover name="Install" :closeOnContentClick="false">
            <div slot="face">
              <button class="button primary button--small">Install</button>
            </div>

            <div slot="content">
              <small style="margin-bottom: .5rem; display: block;">
              Install locally with <strong><g-link to="/docs/gridsome-cli">Gridsome CLI</g-link></strong>
              </small>
              <div class="mb">
                <code class="starter__command flex">
                  <span ref="command">gridsome create my-project {{ $page.starter.repo }}</span>
                  <button class="button button--blank button--xsmall" @click="copyCommand()">
                    <ClipboardIcon title="Copy to clipboard" width="16" height="16" />
                    <span> Copy </span>
                  </button>
                </code>
              </div>
              <hr />
              <div class="deploy-buttons flex">
                <a class="button button--small" :href="codeSandboxUrl">
                  <CodeSandboxLogo alt="CodeSandbox" height="16" /> Open in CodeSandbox
                </a>
                <a class="button button--small" :href="netlifyDeployUrl">
                  <NetlifyLogo alt="Netlify" /> Deploy to Netlify
                </a>
              </div>
            </div>
          </Popover>
        </div>
      </div>
   
  
      <div class="starter__image" style="order:2" v-if="$page.starter.screenshot">
        <g-image :src="$page.starter.screenshot" />
      </div>
      <hr v-else />

      <div class="starter__content">
        
        <div style="width: 80%;" v-if="isLoading">
          <Skeleton />
          <Skeleton style="height: 15px" />
          <Skeleton style="height: 15px; width: 80%; opacity: .6;" />
          <Skeleton style="height: 15px; width: 85%; opacity: 1;"  />
          <Skeleton style="height: 15px; width: 85%; opacity: 1;"  />
          <Skeleton style="height: 15px; width: 65%; opacity: 1;"  />
          <Skeleton style="height: 15px; width: 55%; opacity: 1;"  />
          <Skeleton style="height: 15px; width: 75%; opacity: 1;"  />
        </div>

        <div v-html="readme" />
      </div>
  </Starters>
</template>

<script>
import clipboard from 'clipboard-copy'
import markdown from '../utils/markdown'
import Starters from '~/layouts/Starters.vue'
import Skeleton from '~/components/Skeleton.vue'
import ClipboardIcon from '~/assets/images/icon-clipboard.svg'
import NetlifyLogo from '~/assets/images/logo-netlify.svg'
import CodeSandboxLogo from '~/assets/images/logo-codesandbox.svg'
import Popover from 'vue-popover'

const cache = {}

export default {
  components: {
    Starters,
    Skeleton,
    ClipboardIcon,
    NetlifyLogo,
    CodeSandboxLogo,
    Popover
  },

  data () {
    return {
      readme: '',
      isLoading: true
    }
  },

  computed: {
    siteName () {
      return this.$page.starter.repo.split('/')[1]
    },
    netlifyDeployUrl () {
      return `https://app.netlify.com/start/deploy?repository=https://github.com/${this.$page.starter.repo}`
    },
    codeSandboxUrl () {
      return `https://codesandbox.io/s/github/${this.$page.starter.repo}`
    }
  },

  async mounted () {
    const { repo } = this.$page.starter
    const url = `https://api.github.com/repos/${repo}/readme`

    if (cache[repo]) {
      this.readme = cache[repo]
      this.isLoading = false
      return
    }

    this.isLoading = true

    const res = await fetch(url)
    const json = await res.json()
    const readmeRes = await fetch(json.download_url)
    const markdownSource = await readmeRes.text()

    this.readme = cache[repo] = markdown(markdownSource)
    this.isLoading = false
  },

  methods: {
    copyCommand () {
      clipboard(this.$refs.command.textContent)
    }
  }
}
</script>

<page-query>
query Starters ($id: String!) {
  starter(id: $id) {
    title
    repo
    platforms {
      title
      logo (width: 30, height: 30)
    }
    author {
      title
      path
    }
    path
    screenshot (width: 900)
  }
}
</page-query>

<style lang="scss">
.starter {
  &__header {
    padding: 20px 0 15px;
    background-color: rgba(255,255,255,.95);
    margin-top: -30px;
    z-index: 20;

    @media screen and (min-width: 850px) {
      position: sticky;
      top: calc(var(--header-height) + 4px);
    }
  }
  &__header-title {
    margin-right: 1rem;
  }
  &__header-author {
    color: rgba(0,0,0,.5);
  }
  &__header-platform-logo {
    margin: 0 1rem 0 0;
  }
  &__command-intro {
    margin-right: .5rem;
    opacity: .7;
  }
  &__command {
    span {
      flex: 1;
    }
  }
  &__image {
    img {
      border-radius: 5px;
      box-shadow: var(--glow);
      border: 1px solid var(--border-color);
      width: 100%;
    }
  }
}

.deploy-buttons {
  .button {
    margin-bottom: 0;
    margin-right: 1rem;
    svg {
      width: 20px;
      height: 20px;
      margin-right: .3rem;
    }
  }
}

.popover {
  &__container {
    position: absolute;
    top: 90%;
    right: -15px;
    z-index: 999;
    width: 550px;
    padding: var(--space);
    background-color: #FFF;
    box-shadow: var(--glow);
    border-radius: 5px;
    border: 1px solid var(--border-color);
    
    &:after, &:before {
      bottom: 100%;
      right: 35px;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &:after {
      border-color: rgba(255, 255, 255, 0);
      border-bottom-color: #FFF;
      border-width: 10px;
      margin-left: -10px;
    }
    &:before {
      border-color: rgba(204, 204, 204, 0);
      border-bottom-color: var(--border-color);
      border-width: 11px;
      margin-left: -11px;
    }
  }
}
</style>
