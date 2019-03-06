<template>
  <Section dots="true" primary="true" class="post">

      <h5 class="text-center">
        How Gridsome Works
      </h5>

      <h2 class="text-center primary-color container-sm">
        01. Connect to data sources
      </h2>

      <p class="lead text-center container-sm mb">
        Bring your content into a local <strong>GraphQL <graph-ql-logo width="24px" height="24px" /> data layer</strong> with <g-link to="/plugins">Data Source plugins</g-link> or <g-link to="/docs/data-store-api">Data Store API</g-link>.
      </p>

      <div class="cms-cols grid-cols grid-cols--collapse grid-cols--3 ">
        <Card>
          <h4>Markdown</h4>
          <p>Any Git-based CMS, Forestry, Netlify CMS, Blogs, Documentation.</p>
        </Card>
      
        <Card style="border-radius: 0">
          <h4>CMSs</h4>
          <p>Any Headless CMS, WordPress, Contentful, Drupal, DatoCMS, Sanity.io, GraphCMS etc.</p>
        </Card>

        <Card>
          <h4>Data</h4>
          <p>Any APIs, Databases, Google Spreadsheet, AirTable, YAML, CSV, JSON etc.</p>
        </Card>

      </div>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>

      <div class="powered-by text-center">
        <gridsome-logo />
        <span>GraphQL powered data layer</span>
        <g-image src="~/assets/images/spark.png" />
      </div>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>

      <h2 class="text-center primary-color container-sm">
        02. Build with Vue.js
      </h2>

      <p class="lead text-center container-md">
        Use <strong>Vue Components</strong> as building blocks in a local development environment with instant hot-reloading on any code change.
      </p>

      <Card class="text-center container-md">
        <div class="code-example" v-html="$static.example.content" />
      </Card>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>

       <div class="generate-html text-center">
        <div class="generate-html__logo">
          <gridsome-logo />
        </div>
        <span>Generate ultra optimized SEO-friendly <strong>PWAs</strong>.</span>
      </div>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>

      <h2 class="text-center primary-color container-sm">
        03. Deploy
      </h2>

      <p class="text-center lead container-md">
        Deploy your entire site to a CDN and forget about it. <br>Traffic or hacking will never break your site.
      </p>


      <Card class="text-center container-mini mb">
        <h4>Static Web Hosts</h4>
        <p> <g-link to="/docs/deploy-to-netlify">Netlify</g-link>, <g-link to="/docs/deploy-to-amplify">AWS Amplify</g-link>, <g-link to="/docs/deploy-to-zeit-now">Zeit Now</g-link>, <g-link to="/docs/deploy-to-amazon-s3">Amazon S3</g-link>, Surge.sh, Aerobatic, Now.sh & many more </p>
      </Card>

      <p class="home-links text-center">
        <g-link  to="/docs" class="button primary button--large">
          Get started
        </g-link>

        <g-link  to="/why-gridsome" class="button button--large">
          Why Gridsome
        </g-link>
      </p>


  </Section>
</template>


<static-query>
query Example {
  example (path: "/examples/templates") {
    content
  }
}
</static-query>


<script>
import GraphQlLogo from '~/assets/images/graphql-logo.svg'
import VueLogo from '~/assets/images/vue-logo.svg'
import GridsomeLogo from '~/assets/images/gridsome-small-white.svg'

export default {
  components: {
    VueLogo,
    GridsomeLogo,
    GraphQlLogo
  }
}
</script>

<style lang="scss">

.cms-cols {
  max-width: 1050px;
  margin: 0 auto;
}

#app .code-example pre {
  background-color: transparent;
  border: 0;
  padding: 0;
  margin:0;
}

.generate-html {
  max-width: 200px;
  margin: 0 auto;
  font-size: .9rem;

  span {
    opacity: .8;
  }

  &__logo {
    background-color: var(--primary-color);
    width: 35px;
    height: 35px;
    padding: 3px;
    border-radius: 99px;
    margin: 0 auto;
    margin-bottom: 10px;
    animation: pulse 2s infinite;

    svg {
      height: 25px;
      width: 25px;
    }
  }
}


.powered-by {
  background-color: var(--primary-color);
  width: 130px;
  height: 130px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 100%;
  padding: 10px;
  z-index: 0;
  animation: pulse 2s infinite;

  img {
    position: absolute;
    pointer-events: none;
  }

  span {
    display: block;
    font-size: .8rem;
    line-height: 1.1;
    padding: 10px 0 0;
    color: #fff;
    opacity: .8;
  }
}

.dot {
  height: 50px;
  margin: 15px 0;
  text-align: center;
  stroke: var(--primary-color);
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 0 10;
  animation: stroke 600ms linear infinite;

  &--after {
    stroke: var(--primary-color);
  }
}
</style>
