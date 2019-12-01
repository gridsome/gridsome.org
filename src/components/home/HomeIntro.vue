<template>
  <Section class="intro" dots="true">
    <div class="container">

        <h1 class="text-4xl leading-tight font-bold mb-5 text-label-secondary">
          <span>Build modern JAMstack<br/> websites with Vue.js</span>
        </h1>

        <p class="text-xl">
          Gridsome makes it easy for developers to build modern websites, apps & PWAs that are <g-link to="/docs/fast-by-default/">fast by default</g-link> 🚀
        </p>

        <p>
          <g-link to="/docs/">
            <span>Get started</span>
          </g-link>
        </p>

        <p class="intro__info">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener noreferrer">
            <span>GitHub (v{{ $static.metadata.gridsomeVersion }})</span>
          </a>
        </p>
    </div>
  </Section>
</template>

<static-query>
query {
  metadata {
    gridsomeVersion
  }
}
</static-query>
