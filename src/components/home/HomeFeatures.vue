<template>
  <Section dots="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Easy, local development</h3>
        <p>Enjoy modern development tools like <strong>Vue.js, GraphQL & webpack.</strong> Get instant <strong>hot-reloading</strong> for any code change. <strong>Gridsome makes building websites fun again.</strong>
        </p>
      </Feature>

      <Feature>
        <h3>Bring your own data</h3>
        <p>Load data from any Headless CMS, APIs, static files, a database, or from multiple places at once. Gridsome combines them all into a simple, local <g-link to="/docs/how-it-works">GraphQL data layer</g-link> that pages and components can access.</p>
      </Feature>

      <Feature>
        <h3>Fast by default</h3>
        <p>Gridsome loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible.  Once loaded, Gridsome prefetches resources for other pages so clicking around the site feels incredibly fast.
        </p>     
      </Feature>

      <Feature>
        <h3>Static Generated PWAs</h3>
        <p>Build beautiful, offline-ready, static PWAs with Gridsome. Gridsome builds ultra high performance into every page by following the <g-link to="/docs/how-it-works#the-prpl-pattern">PRPL-pattern</g-link>. A pattern for structuring and serving Progressive Web Apps.
        </p>
      </Feature>

      <Feature>
        <h3>Simple, safe deployment</h3>
        <p>Grisome makes it easy to build fast & secure <g-link to="/docs/jamstack">JAMstack</g-link> websites. <strong>No servers. No databases. Only files. </strong> Deploy your entire site to a CDN and forget about it. Traffic or hacking will never break your site.</strong>
        </p>     
      </Feature>

      <Feature>
        <h3>SEO-friendly SPA</h3>
        <p>Gridsome sites loads as static HTML before it hydrates into a fully Vue.js-powered SPA. This makes it possible for search engines able to crawl content and give better SEO ranking, and still have all the power of Vue.js.</p>
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
