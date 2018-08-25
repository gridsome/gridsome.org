<template>
  <nav class="main-nav flex gap-20">

    <Link to="/docs">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      <span>Docs</span>
    </Link>

    <Link to="/tutorial">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
      <span>Tutorial</span>
    </Link>

    <Link to="/plugins">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      <span>Plugins</span>
    </Link>


    <Link to="/blog">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-radio"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
      <span>Blog</span>
    </Link>
  </nav>
</template>

<style lang="scss">
  .main-nav a {
    letter-spacing: .5px;
    font-size: .9em;
    font-weight: 500;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-wrap: wrap;
    svg {
      margin: 3px 6px;
      opacity: .5;
    }
    &.active {
      svg {
        opacity: 1;
      }
    }
  }
  .main-nav a:not(.active):not(:hover) {
    color: currentColor;
    opacity: .7;
  }

  @media screen and (max-width: 750px) {
    .main-nav {
      position: fixed;
      bottom:0;
      left:0;
      right:0;
      background: #FFF;
      margin-right:0!important;
      justify-content: center;
      box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
      min-height: 60px;
      flex-wrap: nowrap!important;
      padding: 10px var(--space);
    }
  }
</style>
