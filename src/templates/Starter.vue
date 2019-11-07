<template>
  <Starters class="starter">
      <div class="starter__header flex">
        <g-image class="starter__header-platform-logo" v-if="$page.starter.platforms" :src="$page.starter.platforms.logo" />
        
        <strong class="starter__header-title">{{ $page.starter.title }}</strong>
       
        <g-link
          v-if="$page.starter.author.path"
          :to="$page.starter.author.path"
          class="starter__header-author">
            by {{ $page.starter.author.title }}
        </g-link>

        <div class="flex gap-20 hide-for-small" style="margin-left: auto">
          <a
            rel="noopener noreferrer"
            target="_blank"
            :href="githubUrl"
            title="View on Github"
            aria-label="View on Github"
            class="button button--blank">
            <github-icon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            v-if="$page.starter.preview"
            :href="$page.starter.preview"
            title="Live preview"
            aria-label="Live preview"
            class="button button--blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </a>

          <Popover name="InstallThis" :closeOnContentClick="false">
            <div slot="face">
              <button class="button primary button--small">Install now  </button>
            </div>

            <div slot="content">
              <p style="margin-bottom: .5rem; display: block;">
              Install locally with <strong><g-link to="/docs/gridsome-cli/">Gridsome CLI</g-link></strong>
              </p>
              <div class="mb">
                <code class="starter__command flex">
                  <span ref="command">gridsome create my-project {{ $page.starter.repo }}</span>
                  <button class="button button--xsmall" @click="copyCommand()">
                    <ClipboardIcon title="Copy to clipboard" width="16" height="16" />
                    <span style="margin-left: 0"> Copy </span>
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
import GithubIcon from '~/assets/images/github-logo.svg'
import NetlifyLogo from '~/assets/images/logo-netlify-small.svg'
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
    Popover,
    GithubIcon
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
    githubUrl () {
      return `https://github.com/${this.$page.starter.repo}`
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
query ($id: ID!) {
  starter(id: $id) {
    title
    repo
    path
    preview
    screenshot(width: 1680, quality: 80)
    platforms {
      title
      logo(width: 25, height: 25)
    }
    author {
      title
      path
    }
  }
}
</page-query>

<style lang="scss">
.starter {
  &__header {
    padding: 20px 10px 15px;
    font-size: .9rem;
    background-color: var(--bg-transparent);
    margin-top: -30px;
    margin-left: -10px;
    margin-right: -10px;
    z-index: 20;
    backdrop-filter: blur(4px);


    @media screen and (min-width: 850px) {
      position: sticky;
      top: calc(var(--header-height) + 4px);
    }
  }
  &__header-title {
    margin-right: .3rem;
  }
  &__header-author {
    color: currentColor;
    opacity: .5;
  }
  &__header-platform-logo {
    margin: 0 .5rem 0 0;
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
    top: 87%;
    right: -15px;
    z-index: 999;
    width: 500px;
    padding: var(--space);
    background-color: var(--bg);
    box-shadow: var(--glow);
    border-radius: 5px;
    border: 2px solid var(--border-color);
    animation: slideDown .3s;

    &:after, &:before {
      bottom: 100%;
      right: 57px;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &:after {
      border-color: rgba(255, 255, 255, 0);
      border-bottom-color: var(--bg);
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
