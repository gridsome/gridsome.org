<template>
  <Section dots="true" primary="true" class="post">

      <h5 class="text-center">
        How Gridsome Works
      </h5>

      <h2 class="text-center primary-color container-sm">
        01. Connect to data sources
      </h2>

      <p class="text-center container-mini mb">
        Bring your data into a local <strong>GraphQL <graph-ql-logo width="20px" height="20px" /> data layer</strong> for centralized management
      </p>

      <div class="cms-cols grid-cols grid-cols--3">
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
        02. Develop with Vue.js <vue-logo width="40" />
      </h2>

      <p class="text-center container-mini mb">
        Use <strong>Vue Components</strong> as building blocks and query data from the local GraphQL data layer.
      </p>

  </Section>
</template>

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

.well {
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: rgba(255,255,255,.7);
  width: 100%;
  padding: var(--space-x2);
  box-shadow: 1px 2px 5px rgba(0,0,0,.05);
  position: relative;
  flex:1;
  min-width: 280px;
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
