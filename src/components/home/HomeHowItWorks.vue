<template>
  <Section dots="true" primary="true" class="post">

      <h5 class="text-center">
        How Gridsome Works
      </h5>

      <h2 class="text-center primary-color container-sm">
        01. Connect to data sources
      </h2>

      <p class="lead text-center container-sm mb">
        Bring your content into a local <strong>GraphQL <graph-ql-logo width="20px" height="20px" /> data layer</strong> for centralized data management
      </p>

      <div class="cms-cols grid-cols grid-cols--3 ">
        <div class="well">
          <div class="well__title">Any data</div>
          <p>Any APIs, Google Spreadsheet, AirTable, YAML, Json, etc</p>
        </div>
        <div class="well">
          <div class="well__title">CMS</div>
          <p>WordPress, Contentful, Drupal, CockpitCMS, DatoCMS, Shopify, WooCommerce etc.</p>
        </div>
        <div class="well">
          <div class="well__title">Markdown</div>
          <p>Use Markdown for content. Documentation, Blogs, Magazines, or any custom content type.</p>
        </div>
      </div>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>

      <div class="powered-by text-center">
        <gridsome-logo />
        <span>Powered by GraphQL</span>
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

      <p class="lead text-center container-sm">
        Use <strong>Vue Components</strong> as building blocks in a local development environment with hot-reloading.
      </p>

      <div class="well text-center container-md">
        <p>Vue.js, HTML, CSS, SASS, LESS</p>
        <div class="code-example" v-html="$static.example.content" />
      </div>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>

      <h2 class="text-center primary-color container-sm">
        03. Deploy to CDN
      </h2>

      <p class="text-center lead container-mini">
        Deploy to any <strong>Static Web Host</strong> for fast, scalable and secure hosting.
      </p>


      <div class="generate-html text-center">
        <div class="generate-html__logo">
          <gridsome-logo />
        </div>
        <span>Generate ultra optimized SEO-friendly static HTML</span>
      </div>

      <div class="dots-vertical">
        <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
          <path d="M0.5 0L0.500002 37"/>
        </svg>
      </div>

      <div class="well text-center container-mini">
        <p> Netlify, AWS Amplify, GitHub Pages, Surge.sh, Aerobatic, Now.sh & many more </p>
      </div>

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

.well {
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: rgba(255,255,255,.7);
  width: 100%;
  padding: 30px;
  box-shadow: 1px 2px 5px rgba(0,0,0,.05);
  position: relative;
  flex:1;
  z-index: 1;

  &__title {
    position: absolute;
    top:-16px;
    left:50%;
    transform: translateX(-50%);
    background: var(--primary-bg);
    border: 1px solid var(--border-color);
    padding: 4px 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 1px;
    font-weight: 600;
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
    line-height: 1.2;
    padding: 10px 0 0;
    color: #fff;
    opacity: .6;
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
