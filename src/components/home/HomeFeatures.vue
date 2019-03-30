<template>
  <Section dots="true" class="post">
    <div class="homepage-features grid-cols grid-cols--gap-large">

      <Feature>
        <h3>Easy, local development</h3>
        <p>Gridsome makes building websites fun again. Enjoy modern dev tools like <strong>Vue.js, GraphQL & webpack.</strong> Get instant <strong>hot-reloading</strong> for any data change while developing locally.
        </p>
      </Feature>

      <Feature>
        <h3>Bring your own data</h3>
        <p>Load data from any Headless CMS, APIs, static files, a database, or from multiple places at once. Gridsome combines them all into a simple, local <g-link to="/docs/how-it-works">GraphQL data layer</g-link> that pages and components can access.</p>
      </Feature>

      <Feature>
        <h3>Fast by default</h3>
        <p> Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert. It follows the <g-link to="/docs/how-it-works#the-prpl-pattern">PRPL-pattern</g-link> to get close to perfect page speed scores.
        </p>     
      </Feature>


      <Feature>
        <h3>PWA-ready</h3>
        <p>Gridsome is a <strong>static PWA generator</strong>. It pre-renders all pages to <strong>load as fast as possible</strong>. Once loaded, the next pages are prefetched in background so clicking around the site feels super fast.
        </p>
      </Feature>

      <Feature>
        <h3>Simple, safe deployment</h3>
        <p>Grisome makes it easy to build fast & secure <g-link to="/docs/jamstack">JAMstack</g-link> websites. <strong>No servers. No databases. Only files. </strong> Deploy your entire site to a CDN and forget about it.</strong>
        </p>     
      </Feature>


      <Feature>
        <h3>SEO-friendly SPA</h3>
        <p>Gridsome outputs static HTML before it hydrates into a fully <strong>Vue.js-powered SPA</strong>. This makes search engines able to crawl content and give <strong>better SEO ranking</strong>.</p>
      </Feature>

    </div>


    <p class="home-links text-center">
      <g-link  to="/docs" class="button primary button--large">
        Get started
      </g-link>
    </p>
    
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
