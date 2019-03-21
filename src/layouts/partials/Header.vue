<template>
  <header>
    <div class="header-bar">
   
    </div>
    <div class="header-inner flex gap-30">
      <Logo/>
      
      <SearchForm class="hide-for-small"/>

      <Nav class="flex-fit"/>

      <nav class="header-actions flex">
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
            >v{{ $static.metaData.gridsomeVersion }}</span>
          </a>
          <div class="dropdown">
            <a href="//github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md" rel="noopener noreferrer" target="_blank">
              Change log
            </a>
            <a href="//github.com/gridsome/gridsome" rel="noopener noreferrer" target="_blank">
              Gridsome repository
            </a>
            <a href="//github.com/gridsome/gridsome.org" rel="noopener noreferrer" target="_blank">
              Website repository
            </a>
            <a href="//github.com/gridsome/gridsome/issues" rel="noopener noreferrer" target="_blank">
              Gridsome Issues
            </a>
          </div>
        </div>
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
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;
  background-color: rgba(255,255,255,.95);

  .header-bar {
    background-color: var(--primary-color);
    padding: 2px;
    text-align: center;
    color:#FFF;
    font-size: 1rem;
  }

  .header-inner {
    padding: 0 var(--space);
    min-height: var(--header-height);
  }
}

@media screen and (max-width: 850px) {
  header {
    .logo {
      margin-right: 0;
    }
  }
  .header-actions {
    margin-left: auto !important;
    font-size: 0.9rem;
  }
}
</style>
