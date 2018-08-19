<template>
  <nav class="main-nav flex-x flex-x--20 flex-no-wrap">
    <Link to="/docs">
      Docs
    </Link>
    
    <Link to="/tutorial">
      Tutorial
    </Link>


    <Link to="/benefits">
      Benefits
    </Link>

    <Link to="/integrations">
      Integrations
    </Link>

    <Link to="/plugins">
      Plugins
    </Link>

    <Link to="/showcase">
      Showcase
    </Link>

    <Link to="/blog">
      Blog
    </Link>
  </nav>
</template>

<style lang="scss">
  .main-nav a {
    text-transform: uppercase;
    font-size: .8em;
    letter-spacing: 1px;
    font-weight: 500;
  }
  .main-nav a:not(.active):not(:hover) {
    color: currentColor;
    opacity: .7;
  }
</style>
