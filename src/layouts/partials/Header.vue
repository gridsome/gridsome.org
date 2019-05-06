<template>
  <header>
    <div class="header-inner container flex gap-30">
      <Logo/>

      <Nav class="flex-fit"/>

      <nav class="header-actions flex">
        <SearchForm v-bind:class="{ 'hide-for-small': !currentlyInsideDocs }"/>

        <a
          aria-label="Twitter"
          href="//twitter.com/gridsome"
          rel="noopener noreferrer"
          target="_blank"
          title="Follow us on Twitter"
          v-bind:class="{ 'hide-for-small': currentlyInsideDocs }"
        >
          <twitter-logo/>
        </a>
        
        <a
          aria-label="Discord"
          href="//discord.gg/daeay6n"
          rel="noopener noreferrer"
          target="_blank"
          title="Join our discord"
          v-bind:class="{ 'hide-for-small': currentlyInsideDocs }"
        >
          <discord-logo/>
        </a>
        
        <a
          aria-label="github"
          href="//github.com/gridsome/gridsome"
          rel="noopener noreferrer"
          target="_blank"
          title="Gridsome @ GitHub"
          v-bind:class="{ 'hide-for-small': currentlyInsideDocs }"
        >
          <github-logo
            height="20px"
            width="20px"
          />
          <span
            class="hide-for-small"
            style="margin-left:5px;"
          >v{{ $static.metaData.gridsomeVersion }}</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<static-query>
query Header {
  metaData {
    gridsomeVersion
  }
}
</static-query>

<script>
import Logo from './Logo'
import Nav from './Nav'
import SearchForm from '~/components/SearchForm.vue'
import GithubLogo from '@/assets/images/github-logo.svg'
import TwitterLogo from '@/assets/images/twitter-logo.svg'
import DiscordLogo from '@/assets/images/discord-logo.svg'

export default {
  computed: {
    currentlyInsideDocs() {
      return this.$route.path.startsWith("/docs")
    },
  },
  components: {
    Logo,
    GithubLogo,
    TwitterLogo,
    DiscordLogo,
    SearchForm,
    Nav
  }
}
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background: var(--secondary-bg);
  color: #fff;
  border-bottom: 1px solid transparent;
  flex-wrap: nowrap;
  position: sticky;

  .header-inner {
    min-height: var(--header-height);
  }
}

@media screen and (max-width: 750px) {
  header {
    .logo {
      margin-right: 0;
    }
  }
  .header-actions {
    margin-left: auto !important;
    font-size: 0.9rem;
  }
  .algolia-autocomplete .ds-dropdown-menu {
    min-width: calc(100vw - 60px);
  }
}
</style>
