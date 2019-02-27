<template>
  <Section dots="true" primary="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Easy, local development</h3>
        <p>Enjoy modern dev tools like Vue.js<vue-logo width="28" height="28" />,<br> GraphQL <graph-ql-logo color="#E535AB" width="20" height="20" /> & webpack<webpack-logo width="28" height="28" />. Get instant <strong>hot-reloading</strong> for any data change while developing. Gridsome makes building websites fun again.
        </p>
      </Feature>

      <Feature>
        <h3>Bring your own data</h3>
        <p>Load data from any Headless CMS, APIs, static files, a database, or from multiple places at once. Gridsome combines them all into a simple, local <g-link to="/docs/how-it-works">GraphQL data layer</g-link> that pages and components can access.</p>
      </Feature>

      <Feature>
        <h3>Fast by default</h3>
        <p>Gridsome is a modern site generator for building the fastest possible websites. You get <strong>code-splitting & progressive image support</strong> built-in to get close to <strong>perfect page speed scores.</strong>
        </p>     
      </Feature>


      <Feature>
        <h3>PWA-ready</h3>
        <p>Gridsome is a <strong>static PWA generator</strong>. It pre-renders all pages to <strong>load as fast as possible</strong>. Once loaded, the next pages are prefetched in background so clicking around the site feels super fast.
        </p>
      </Feature>

      <Feature>
        <h3>Simple, safe deployment</h3>
        <p>Gridsome is a <a href="http://jamstack.org" target="_blank">JAMstack</a> framework. <strong>No servers. No databases. Only files. </strong> Deploy your entire site to a CDN and forget about it. Traffic or hacking will never break your site.</strong>
        </p>     
      </Feature>


      <Feature>
        <h3>SEO-friendly</h3>
        <p>Gridsome outputs static HTML before it hydrates into a fully <strong>Vue.js-powered SPA</strong>. This makes search engines able to crawl content and give <strong>better SEO ranking</strong> because of the fast loading.</p>
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
