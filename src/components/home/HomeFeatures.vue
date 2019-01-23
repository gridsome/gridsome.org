<template>
  <Section dots="true" primary="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Bring your own data</h3>
        <p>Load data from any CMS, APIs, static files, a database, or from multiple places at once. Gridsome combines them all into a simple, centralized <g-link to="/docs/how-it-works">GraphQL data layer</g-link> that pages and components can access.</p>
      </Feature>



      <Feature>
        <h3>Fast by default</h3>
        <p>Gridsome automatically optimizes your website to load and perform fast. You get <strong>code-splitting & progressive image support</strong> built-in to get close to <strong>perfect Lighthouse scores.</strong>
        </p>     
      </Feature>

      <Feature>
        <h3>PWA offline-ready</h3>
        <p>Gridsome loads only the critical HTML, CSS, so your site <strong>loads as fast as possible</strong>. Once loaded, the next pages are prefetched so clicking around the site feels incredibly fast. <strong>It even works offline.</strong>
        </p>
      </Feature>

      <Feature>
        <h3>Simple, safe deployment</h3>
        <p>Gridsome sites are pre-rendered at build time and can be <strong>entirely hosted on a CDN</strong>. It can handle thousands to millions of hits without breaking - and at <strong>no expensive server costs.</strong>
        </p>     
      </Feature>


      <Feature>
        <h3>SEO-friendly SPA</h3>
        <p>Gridsome sites render as pure HTML before Vue.js is loaded and SPA kicks in. This makes search engines able to crawl content and give <strong>better SEO ranking</strong> because of the super fast loading.</p>
      </Feature>

      <Feature>
        <h3>Instant hot-reloading</h3>
        <p>Enjoy modern dev tools like Vue.js<vue-logo width="28" height="28" />,<br> GraphQL <graph-ql-logo color="#E535AB" width="20" height="20" /> & webpack<webpack-logo width="28" height="28" />. Get instant <strong>hot-reloading</strong> for any data change while developing. Gridsome makes building websites fun again.
        </p>
      </Feature>

    </div>
    
  </Section>
</template>

<script>
import VueLogo from '~/assets/images/vue-logo.svg'
import GraphQlLogo from '~/assets/images/graphql-logo.svg'
import WebpackLogo from '~/assets/images/webpack-logo.svg'
export default {
  props: ['icon'],
  components: {
    VueLogo,
    GraphQlLogo,
    WebpackLogo
  },
  computed: {
    iconClasses() {
      let classes = []
      return classes
    }
  }
}
</script>
