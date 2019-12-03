<template>
  <div class="overflow-hidden max-w-container-outer mx-auto relative">

    <svg class="absolute top-0 left-0 -ml-16 opacity-75" width="795" height="493" viewBox="0 0 795 493" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="273" cy="-29" r="522" fill="#00A672" fill-opacity="0.06"/>
    </svg>

    <svg class="absolute top-0 right-0 opacity-75" width="355" height="303" viewBox="0 0 355 303" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.1" cx="545.5" cy="-242.5" r="545.5" fill="#B02FA3"/>
    </svg>

    <svg class="absolute top-0 right-0 -mr-24" width="232" height="550" viewBox="0 0 232 550" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.05" d="M735 182.5C735 385.465 570.465 550 367.5 550C164.535 550 0 385.465 0 182.5C0 -20.4646 164.535 -185 367.5 -185C570.465 -185 735 -20.4646 735 182.5Z" fill="#00C6FF"/>
    </svg>

    <Section class="pt-header">
      <div class="flex">
        <div class="w-2/5 z-20 relative py-12">
            
            <h1 class="text-4xl leading-tight font-bold mb-5 text-label-secondary">
              <span>Build fast, modern JAMstack<br/> websites with Vue.js</span>
            </h1>

            <p class="text-xl mb-10">
              Gridsome makes it easy for developers to build modern websites, apps & PWAs that are <g-link to="/docs/fast-by-default/">fast by default</g-link>
            </p>

            <p class="mb-10">
              <g-link to="/docs/" class="py-3 px-5 rounded border border-dark hover:bg-tint-secondary shadow-strong bg-tint text-light" >
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
        <div class="w-3/5">
          <test class="w-full h-auto mx-auto" style="max-width: 510px"/>
        </div>
      </div>
    </Section>

  </div>
</template>

<static-query>
query {
  metadata {
    gridsomeVersion
  }
}
</static-query>

<script>
import test from './test.vue'
export default {
  components: {
    test
  }
}
</script>
