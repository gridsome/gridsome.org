<template>
  <header>
    <div class="header-bar"></div>
    <div class="header-inner container flex gap-30">

      <Logo/>

      <Nav class="flex-fit"/>

      <SearchForm />

      <nav class="header-actions flex">
        <ToggleTheme />

        <a
          aria-label="Twitter"
          href="//twitter.com/gridsome"
          rel="noopener noreferrer"
          target="_blank"
          title="Follow us on Twitter"
        >
          <twitter-logo/>
        </a>

        <a
          aria-label="Discord"
          href="//discord.gg/daeay6n"
          rel="noopener noreferrer"
          class="hide-for-small"
          target="_blank"
          title="Join our discord"
        >
          <discord-logo/>
        </a>

        <div class="has-dropdown">
          <a
            aria-label="github"
            href="//github.com/gridsome/gridsome"
            rel="noopener noreferrer"
            target="_blank"
            title="Gridsome @ GitHub"
          >
            <github-logo
              height="20px"
              width="20px"
            />
            <span
              class="hide-for-small"
              style="margin-left:5px;"
            >v{{ $static.metadata.gridsomeVersion }}</span>
          </a>
          <div class="dropdown">
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
    </div>
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

export default {
  components: {
    Logo,
    GithubLogo,
    TwitterLogo,
    ToggleTheme,
    DiscordLogo,
    SearchForm,
    Nav,
    LazyHydrate
  }
}
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;
  transition: background-color .3s, border-color, .3s;
  backdrop-filter: blur(4px);


  .header-bar {
    background: linear-gradient(90deg, var(--primary-color) 0%,  #8ED6FB 50%, #D32E9D 100%);
    padding: 2px;
    text-align: center;
    color:#FFF;
    font-size: 1rem;

    a {
      color: currentColor;
    }
  }

  .header-inner {
    padding: 0 var(--space);
    min-height: var(--header-height);
  }
}
</style>
