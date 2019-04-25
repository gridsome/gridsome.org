<template>
  <Section dots="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Modern development</h3>
        <p>Enjoy modern development tools like<br> <vue-logo width="24" height="24" /> Vue.js, <graph-ql-logo width="24" height="24" /> GraphQL & <webpack-logo width="28" height="28" />webpack. Get instant <strong>hot-reloading</strong> for any code change when developing. <strong>Gridsome makes building websites fun again.</strong>
        </p>
      </Feature>

      <Feature>
        <h3>Fast by default</h3>
        <p>Gridsome builds ultra performance into every page by using the <g-link to="/docs/how-it-works#the-prpl-pattern">PRPL pattern</g-link>. You get <strong>code splitting, asset optimization, progressive images, and page prefetching</strong> out of the box. Gridsome sites gets almost perfect page speed scores by default.
        </p>
      </Feature>

      <Feature>
        <h3>PWA-ready</h3>
         <p>Gridsome is a static PWA generator. It pre-renders all pages to load as fast as possible. Once loaded, the next pages are prefetched in background so clicking around the site feels super fast. It even works offline.
        </p>
      </Feature>

      <Feature>
        <h3>Fully extensible</h3>
        <p>Gridsome has powerful APIs that let you customize or build plugins for anything. <g-link to="/plugins/">Gridsome Plugins</g-link> is a fast growing library of NPM packages that can be installed to any Gridsome project.</p>
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
