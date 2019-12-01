<template>
  <Section class="works">
    <div class="grid-cols grid-cols--gap-large grid-cols--full-md">

      <Card title="Bring your data">
        <h4>CMSs</h4>
        <p>Any Headless CMS, Contentful, WordPress, Drupal, Sanity.io, etc.</p>
        <h4>Data</h4>
        <p>Any APIs, Databases, AirTable, YAML, CSV, JSON, etc.</p>
        <h4>Markdown</h4>
        <p>Any Git-based CMS, Forestry, Netlify CMS, Blogs, Documentation.</p>

        <template slot="outer">
          <Dots class="hide-for-small"/>
          <Dots class="dots--vertical show-for-small"/>
        </template>
      </Card>

      <Card title="Build" class="text-center flex-align-middle">

        <div class="works__logo">
          <gridsome-logo />
          <div class="works__pulse-bg"></div>
          <div class="works__pulse-bg"></div>
        </div>

        <p class="works__powered-by">
          Powered by <br/><strong>GraphQL </strong>
          <graph-ql-logo width="15" height="18" />
        </p>

        <ul class="works__tools flex gap-15 text-center flex--center">
          <li>HTML</li>
          <li><vue-logo width="28" height="28" alt="Vue" /> Vue.js</li>
          <li>CSS</li>
        </ul>

        <template slot="outer">
          <Dots class="hide-for-small"/>
          <Dots class="dots--vertical show-for-small"/>
        </template>
      </Card>

      <Card title="Deploy">
        <h4>Static Web Hosts & CDNs</h4>
        <p>
          <g-link to="/docs/deploy-to-netlify/">Netlify</g-link>, <g-link to="/docs/deploy-to-amplify/">AWS Amplify</g-link>, <g-link to="/docs/deploy-to-zeit-now/">Zeit Now</g-link>, <g-link to="/docs/deploy-to-amazon-s3/">Amazon S3</g-link>, Surge.sh, Aerobatic & many more.
        </p>

        <ul class="bullet-list mb">
          <li><Bullet /><g-link to="/docs/fast-by-default/#pre-rendered-html">Pre-rendered HTML</g-link></li>
          <li><Bullet /><g-link to="/docs/fast-by-default/#automatic-code-splitting">Automatic Code Splitting</g-link></li>
          <li><Bullet /><g-link to="/docs/fast-by-default/#the-prpl-pattern">Follows PRPL-pattern</g-link></li>
          <li><Bullet /><g-link to="/docs/fast-by-default/#smart-link-prefetching">Smart link prefetching</g-link></li>
          <li><Bullet /><g-link to="/docs/fast-by-default/#progressive-images">Progressive Images</g-link></li>
        </ul>
      </Card>

    </div>
  </Section>
</template>

<script>
import GraphQlLogo from '~/assets/images/graphql-logo.svg'
import VueLogo from '~/assets/images/vue-logo.svg'
import WebpackLogo from '~/assets/images/webpack-logo.svg'
import GridsomeLogo from '~/assets/images/gridsome-small-white.svg'
import Bullet from '~/assets/images/bullet.svg'
import Dots from '~/components/Dots.vue'

export default {
  components: {
    Bullet,
    VueLogo,
    GridsomeLogo,
    WebpackLogo,
    GraphQlLogo,
    Dots
  }
}
</script>
