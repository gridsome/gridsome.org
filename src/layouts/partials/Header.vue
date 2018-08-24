<template>
  <header class="flex gap-30 container-full">
    <Logo/>

    <Nav class="flex-fit" />
    
    <div class="header-actions flex gap-15">
    
    <a href="https://github.com/gridsome/gridsome">
      <github-logo class="github-logo" />
    </a>

    <Link to="/docs" class="button small hide-for-small"> Get started </Link>
  
    </div>
  </header>
</template>

<script>
import Logo from './Logo'
import Nav from './Nav'
import GithubLogo from '@/components/logos/github'

export default {
  components: {
    Logo,
    Nav,
    GithubLogo
  }
}
</script>

<style lang="scss">
  header {
    z-index: 20;
    position: relative;
    top:0;
    min-height: var(--header-height);
    background-color: #FFF;
    border-bottom: 1px solid transparent;

    .has-sidebar & {
      border-bottom: 1px solid var(--border-color);
      position: sticky;
      top:0;
    }
  }

  @media screen and (max-width: 750px) {
    header {
      box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    }
  }

  .header-actions {
    margin-left: auto!important;
  }

  .github-logo {
    max-width: 20px;
    height: 20px;
    margin-top: -6px;
  }
</style>
