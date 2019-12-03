<template>
  <Section class="pt-header" style="background-color: var(--bg)">
    <div class="flex py-16">
      <div class="w-5/12">
        <h1 class="text-4xl leading-tight font-bold mb-5 text-label-secondary">
          <span>Build fast, modern JAMstack<br/> websites with Vue.js</span>
        </h1>

        <p class="text-xl mb-5">
          Gridsome makes it easy for developers to build modern websites, apps & PWAs that are <g-link to="/docs/fast-by-default/">fast by default</g-link> 🚀
        </p>

        <p class="mb-5">
          <g-link to="/docs/">
            <span class="font-mono">Get started</span>
          </g-link>
        </p>

        <p class="intro__info font-mono text-xs">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener noreferrer">
            <span>GitHub (v{{ $static.metadata.gridsomeVersion }})</span>
          </a>
        </p>
      </div>
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
