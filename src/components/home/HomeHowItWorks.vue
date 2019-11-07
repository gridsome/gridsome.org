<template>
  <Section dots="true" class="post"  dark="true">

      <h5 class="text-center">
        How Gridsome Works
      </h5>

      <h2 class="text-center primary-color container-sm">
        01. Bring your data
      </h2>

      <p class="text-center container-md mb">
        Pull data from anywhere into a local unified <strong>GraphQL </strong><graph-ql-logo width="24px" height="24px" color="#bf37ff" /> data layer.
      </p>

      <div class="cms-cols grid-cols grid-cols--collapse grid-cols--3 ">
        <Card>
          <h4>Markdown</h4>
          <p>Any Git-based CMS, Forestry, Netlify CMS, Blogs, Documentation.</p>
        </Card>

        <Card style="border-radius: 0">
          <h4>CMSs</h4>
          <p>Any Headless CMS, Contentful, WordPress, Drupal, DatoCMS, Sanity.io, GraphCMS etc.</p>
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
        <span>Powered by <strong>GraphQL</strong></span>
      </div>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>

      <h2 class="text-center primary-color container-sm">
        02. Build with Vue.js
      </h2>

      <p class="text-center container-md">
        <a href="https://vuejs.org/">Vue.js</a> is a very popular, performant and approachable JavaScript framework. Build websites with <strong>Vue Components</strong> as building blocks with instant hot-reloading for any code change.
      </p>

      <Card class="container-sm">
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
        <h4>Pre-render HTML</h4>
        <span>Generate SEO-friendly HTML using the <strong><g-link to="/docs/how-it-works/#the-prpl-pattern">PRPL pattern</g-link></strong></span>
      </div>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>


      <h2 class="text-center primary-color container-sm">
        03. Deploy
      </h2>

      <Card class="text-center container-mini mb">
        <h4>Static Web Hosts</h4>
        <p> <g-link to="/docs/deploy-to-netlify/">Netlify</g-link>, <g-link to="/docs/deploy-to-amplify/">AWS Amplify</g-link>, <g-link to="/docs/deploy-to-zeit-now/">Zeit Now</g-link>, <g-link to="/docs/deploy-to-amazon-s3/">Amazon S3</g-link>, Surge.sh, Aerobatic, Now.sh & many more.</p>
      </Card>

      <p class="home-links text-center">
        <g-link  to="/docs/how-it-works/">
          Learn more about how it works
        </g-link>
      </p>


  </Section>
</template>


<static-query>
query {
  example (path: "/examples/templates") {
    content
  }
}
</static-query>


<script>
import GraphQlLogo from '~/assets/images/graphql-logo.svg'
import VueLogo from '~/assets/images/vue-logo.svg'
import WebpackLogo from '~/assets/images/webpack-logo.svg'
import GridsomeLogo from '~/assets/images/gridsome-small-white.svg'
import Bullet from '~/assets/images/bullet.svg'

export default {
  components: {
    Bullet,
    VueLogo,
    GridsomeLogo,
    WebpackLogo,
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
  max-width: 230px;
  margin: 0 auto;
  font-size: .9rem;

  h4 {
    margin-bottom: .5rem;
  }

  span {
    opacity: .8;
  }

  &__logo {
    background-color: var(--primary-color-dark);
    width: 50px;
    height: 50px;
    padding: 0 10px;
    border-radius: 99px;
    margin: 0 auto;
    margin-bottom: 15px;

    svg {
      height: 100%;
      width: 100%;
      overflow: visible!important;

      path {
        transform-origin: 50% 50%;
      }

      path:nth-child(1) {
        display: none;
      }

      path:nth-child(3) {
        animation: spin 1s linear infinite;

      }
      path:nth-child(4) {
        animation: spin 1s linear infinite;
      }

    }
  }
}


.powered-by {
  background-color: var(--primary-color-dark);
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

  span {
    display: block;
    font-size: .85rem;
    line-height: 1.1;
    padding: 10px 0 0;
    color: #fff;
  }
}

.dot {
  height: 30px;
  margin: 15px 0;
  text-align: center;
  stroke: var(--primary-color);
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-dasharray: 0 10;
  animation: stroke 600ms linear infinite;

  &--after {
    stroke: var(--primary-color);
  }
}
</style>
