<template>
  <Section dots="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Faster, modern development</h3>
        <p>Enjoy modern development tools like<br> <vue-logo width="24" height="24" /> Vue.js, <graph-ql-logo width="24" height="24" /> GraphQL & <webpack-logo width="28" height="28" />webpack. Get instant <strong>hot-reloading</strong> for any code change when developing. <em>Gridsome makes building websites fun again.</em>
        </p>
      </Feature>

      <Feature>
        <h3>Build on a future-ready stack</h3>
        <p>The future of the web is JavaScript, API's, and Markup - the <g-link to="/docs/jamstack">JAMstack</g-link>. Gridsome uses the power of a blazing fast static site generator, JavaScript and APIs to create stunning modern web experiences.</p>
      </Feature>

      <Feature>
        <h3>Performance-first architecture</h3>
        <p>Gridsome automatically optimises your frontend to load and perform extremely fast. You get code-splitting, image optimisation, lazy-loading, and almost <strong>perfect lighthouse scores</strong> out-of-the-box.
        </p>     
      </Feature>

      <Feature>
        <h3>PWAs with PRPL-pattern</h3>
         <p>Gridsome builds performance into every page by following the <g-link to="/docs/how-it-works#the-prpl-pattern">PRPL-pattern</g-link>.  After page load it prefetches resources for other pages with <strong>IntersectionObserver</strong> so clicking around the site feels incredible fast.
        </p>
      </Feature>

      <Feature>
        <h3>Simple, safe deployment</h3>
        <p><strong>No servers. No databases. Only files.</strong> Deploy your entire site to a CDN and forget about it. A Gridsome site can handle thousands to millions of hits without breaking - and no expensive server costs.
        </p>     
      </Feature>

      <Feature>
        <h3>SEO-friendly SPAs</h3>
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
