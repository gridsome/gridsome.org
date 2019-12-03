<template>
  <header 
    :class="transparent ? '-mb-header relative' : 'bg-light sticky'"
    class="top-0 z-50">
    <div 
      class="absolute top-0 w-full" 
      style="
      background: linear-gradient(90deg, var(--primary-color) 0%, #8ED6FB 50%, #D32E9D 100%);
      height: 3px;"
    />
    <div class="flex mx-auto container border-b border-seperator h-header items-center">
      <div class="w-sidebar flex items-center">
        
        <Logo />
        
        <Popover class="relative" name="Ecosystem">
          <div slot="face">
            <button title="Gridsome Ecosystem" class="font-mono flex items-center text-sm w-full border shadow-strong p-1 px-2 rounded">
              <span>Framework</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="-mr-1 w-4 h-4 opacity-50 feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>

          <div slot="content">
            <div class="absolute mt-2 left-0 w-sidebar border rounded shadow-xl bg-light" >
              <div class="px-5 py-3">
                <h3 class="font-bold mb-1">Framework <span class="text-xs opacity-75 font-thin ml-1">Open Source</span></h3>
                <p class="text-xs">Build modern JAMstack websites with Vue.js</p>
              </div>
              <hr class="opacity-25" />
              <div class="px-5 py-3">
                <h3 class="font-bold mb-1">Studio</h3>
                <p class="text-xs">Build modern JAMstack websites <strong>without coding</strong></p>
              </div>
              <hr class="opacity-25" />
              <div class="px-5 py-3 mb-1">
                <h3 class="font-bold mb-1">Styleguide</h3>
                <p class="text-xs">Build & manage Tailwind-powered Vue.js Components</p>
              </div>
            </div>
          </div>
        </Popover>
      
      </div>
      <SearchForm class="flex-1 px-20" />
      <nav class="flex items-center justify-end w-sidebar">
        <ToggleTheme class="mx-2" />
        <a
          aria-label="Twitter"
          href="//twitter.com/gridsome"
          rel="noopener noreferrer"
          class="mx-2"
          target="_blank"
          title="Follow us on Twitter"
        >
          <twitter-logo/>
        </a>
        <a
          aria-label="Discord"
          href="//discord.gg/daeay6n"
          rel="noopener noreferrer"
          class="hide-for-small mx-2"
          target="_blank"
          title="Join our discord"
        >
          <discord-logo/>
        </a>
        <div class="has-dropdown ml-2">
          <a
            aria-label="github"
            href="//github.com/gridsome/gridsome"
            rel="noopener noreferrer"
            target="_blank"
            title="Gridsome @ GitHub"
            class="font-mono flex items-center text-sm w-full border shadow-strong p-1 px-2 rounded"
          >
            <github-logo
              height="20px"
              width="20px"
              class="mr-2 opacity-75"
            />
            <span class="hide-for-small">v{{ $static.metadata.gridsomeVersion }}</span>
          </a>
          <div class="dropdown" hidden>
            <a href="//github.com/gridsome/gridsome" rel="noopener noreferrer" target="_blank">
              Core Repository
            </a>
            <a href="//github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md" rel="noopener noreferrer" target="_blank">
              Core Changelog
            </a>
            <a href="//github.com/gridsome/gridsome/issues" rel="noopener noreferrer" target="_blank">
              Core Issues
            </a>
             <a href="//github.com/gridsome/gridsome/projects/2" rel="noopener noreferrer" target="_blank">
              Gridsome Roadmap
            </a>
            <a href="//github.com/gridsome/gridsome.org" rel="noopener noreferrer" target="_blank">
              Website Repository
            </a>
          </div>
        </div>
      </nav>
    </div><!-- inner -->
  </header>
</template>

<static-query>
query {
  metadata {
    gridsomeVersion
  }
}
</static-query>

<script>
import Logo from './Logo'
import Nav from './Nav'
import SearchForm from '@/components/SearchForm.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
import GithubLogo from '@/assets/images/github-logo.svg'
import TwitterLogo from '@/assets/images/twitter-logo.svg'
import DiscordLogo from '@/assets/images/discord-logo.svg'
import LazyHydrate from 'vue-lazy-hydration'
import Popover from 'vue-popover'

export default {
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Logo,
    GithubLogo,
    TwitterLogo,
    ToggleTheme,
    DiscordLogo,
    SearchForm,
    Nav,
    LazyHydrate,
    Popover
  }
}
</script>