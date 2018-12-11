<template>
  <header>
    <div class="header-inner container flex gap-30">
      <Logo />

      <Nav class="flex-fit" />
      
      <nav class="header-actions flex">

        <div class="has-dropdown">
          
          <g-link to="/ecosystem" class="hide-for-small">
            <span>Ecosystem</span>
            <svg style="margin-left:2px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </g-link>

          <div class="dropdown">
             
            <span class="dropdown__title">
              Community
            </span>

            <a href="http://github.com/gridsome/gridsome">GitHub</a>
            <a href="http://discord.gg/daeay6n">Discord Chat</a>
            <a href="https://twitter.com/gridsome">Twitter</a>
            <g-link to="/blog">Blog</g-link>

            <span class="dropdown__title">
              About
            </span>

            <g-link to="/logo">Logo & assets</g-link>

            <span class="dropdown__title">
              Friends
            </span>
            
            <a href="https://vuejs.org/">Vue.js docs</a>
            <a href="https://graphql.org/learn/">GraphQL docs</a>
          </div>
        </div>

        <a aria-label="Twitter" title="Follow us on Twitter" href="//twitter.com/gridsome">
          <twitter-logo />
        </a>

        <a aria-label="Discord"  title="Join our discord" href="//discord.gg/daeay6n">
          <discord-logo />
        </a>

        <a aria-label="github" title="Gridsome @ GitHub" href="//github.com/gridsome/gridsome">
          <github-logo width="20px" height="20px" />
          <span class="hide-for-small">0.3.3</span>
        </a>

      </nav>

    </div>
  </header>
</template>

<script>
import Logo from './Logo'
import Nav from './Nav'
import GithubLogo from '@/assets/images/github-logo.svg'
import TwitterLogo from '@/assets/images/twitter-logo.svg'
import DiscordLogo from '@/assets/images/discord-logo.svg'

export default {
  components: {
    Logo,
    GithubLogo,
    TwitterLogo,
    DiscordLogo,
    Nav,
  }
}
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top:0;
  background: var(--secondary-bg);
  color:#FFF;
  border-bottom: 1px solid transparent;
  flex-wrap: nowrap;
  position: sticky;

  .header-inner {
    min-height: var(--header-height);
  }
  
  .has-sidebar & {
    border-bottom: 1px solid var(--border-color);
  }
}


@media screen and (max-width: 750px) {
  header {
    .logo {
      margin-right: 0;
    }
  }
  .header-actions {
    margin-left: auto!important;
    font-size: .9rem;
  }
}
</style>
