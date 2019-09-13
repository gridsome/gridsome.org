<template>
  <Section dots="true">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Easy, local development</h3>
        <p>Build websites with modern tools like <br class="hide-for-small" /><vue-logo width="24" height="24" /> Vue.js, <graph-ql-logo width="24" height="24" /> GraphQL & all the power of Node.js & the JavaScript ecosystem. Develop locally and get instant <strong>hot-reloading</strong> for any code change.
        </p>
      </Feature>

      <Feature>
        <h3>Fast by default</h3>
        <p>Gridsome builds ultra performance into every page by using the <g-link to="/docs/fast-by-default/#the-prpl-pattern">PRPL pattern</g-link>. You get <strong>code splitting, asset optimization, progressive images, and link prefetching</strong> out of the box. Gridsome sites get almost perfect page speed scores by default.
        </p>
      </Feature>

      <Feature>
        <h3>PWA-ready</h3>
         <p>Gridsome generates static PWAs. Only critical HTML, CSS, and JavaScript get loaded first. The next pages are then prefetched so users can click around incredibly fast without page reloads, even when offline.
          </p>
      </Feature>

      <Feature>
        <h3>Build on the JAMstack</h3>
        <p>The future of the web is JavaScript, APIs, and Markup - <g-link to="/docs/jamstack/">the JAMstack</g-link>. Gridsome uses the power of blazing fast static site generation, JavaScript and APIs to create stunning modern web experiences.</p>
      </Feature>


      <Feature>
        <h3>Simple, safe deployment</h3>
        <p><strong>No servers. No databases. Only files.</strong> Deploy your entire site to a CDN and forget about it. A Gridsome site can handle thousands to millions of hits without breaking - and no expensive server costs.
        </p>
      </Feature>

      <Feature>
        <h3>SEO-friendly</h3>
        <p>Gridsome sites loads as static HTML before it hydrates into a fully Vue.js-powered SPA. This makes it possible for search engines able to crawl content and give better SEO ranking, and still have all the power of Vue.js.</p>
      </Feature>

    </div>

  </Section>
</template>

<script>
import VueLogo from '~/assets/images/vue-logo.svg'
import GraphQlLogo from '~/assets/images/graphql-logo.svg'
export default {
  props: ['icon'],
  components: {
    VueLogo,
    GraphQlLogo,
  },
  computed: {
    iconClasses() {
      let classes = []
      return classes
    }
  }
}
</script>
