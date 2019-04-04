<template>
  <Section dots="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Fun & easy local development</h3>
        <p>Enjoy modern development tools like <strong>Vue.js, GraphQL & webpack.</strong> Get instant <strong>hot-reloading</strong> for any code change. Gridsome makes building websites fun again.</p>
      </Feature>

      <Feature>
        <h3>JAMstack Made Simple</h3>
        <p>Gridsome makes it painlessly easy to build JAMstack websites using data from multiple sources such as Content API's, Headless CMSs and other web services.</p>
      </Feature>

      <Feature>
        <h3>Fast by Default</h3>
        <p>Gridsome loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible.  Once loaded, Gridsome prefetches resources for other pages so clicking around the site feels incredibly fast.
        </p>     
      </Feature>

      <Feature>
        <h3>PWAs with PRPL-pattern</h3>
        <p>Build beautiful, offline-ready, static PWAs with Gridsome. Gridsome builds ultra high performance into every page by following the <g-link to="/docs/how-it-works#the-prpl-pattern">PRPL-pattern</g-link>. A pattern for structuring and serving Progressive Web Apps.
        </p>
      </Feature>

      <Feature>
        <h3>Simple, Safe deployment</h3>
        <p><strong>No servers. No databases. Only files. </strong> Forget complicated deploys with databases and servers and their expensive, maintenance, and scaling fears. Deploy your entire site to a CDN and forget about it.</strong>
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
