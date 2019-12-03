<template>
  <div class="overflow-hidden max-w-container-outer mx-auto relative">



    <svg class="absolute bottom-0 right-0 top-0 h-full w-full -mr-64" width="1231" height="648" viewBox="0 0 1231 648" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.39" d="M540 -3C540 -3 548.63 204.009 759.967 208.324C971.304 212.638 985.969 300.612 1013.58 400.669C1041.18 500.725 1132.62 551.614 1237 478.292V-3H540Z" fill="#00A672" fill-opacity="0.1"/>
    <path opacity="0.44" d="M1287.71 563.644C1287.71 563.644 1159.42 708.403 1043.68 618.658C927.935 528.912 1008 422.75 914.422 390.9C812.128 356.077 723.437 422.75 656.877 340.721C590.318 258.692 577.786 159.291 450.454 200.784C323.135 242.276 266.226 223.947 178.44 87.8744C90.6541 -48.1983 0 -2.86659 0 -2.86659V-82H1277.09C1277.09 -82 1290.09 561.266 1287.71 563.644Z" fill="#00A672" fill-opacity="0.1"/>
    </svg>


    <Section class="pt-header">
      <div class="flex items-center">
        <div class="w-2/5 z-20 relative">
            
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

              <g-link to="/docs/" class="py-3 px-5 rounded border border-dark bg-light shadow-strong ml-5" >
                <span class="font-mono">Tutorial</span>
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
          <test class="w-full h-auto mx-auto" style="max-width: 520px"/>
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
