<template>
  <Section dots="true" primary="true" class="post">
    <h2 class="container text-center">
      How Gridsome Works
    </h2>
    <p class="text-center container-md">
     <strong>Pull data</strong> from any CMS or data source into a unified <strong>GraphQL interface</strong>, and use <strong>Vue.js</strong> for front-end. Deploy to any <strong>static web host</strong> for blazing fast and secure hosting.
    </p>
    <div class="grid-cols grid-cols--gap-large grid-cols--full-md how-it-works mb">

      <Card title="Data sources">
        <h4>CMSs</h4>
        <p>Any Headless CMS, Contentful, WordPress, Drupal, DatoCMS, etc.</p>      
        <h4>Data</h4>
        <p>Any APIs, Databases, AirTable, YAML, CSV, JSON, etc.</p>
        <h4>Markdown</h4>
        <p>Any Git-based CMS, Forestry, Netlify CMS, Blogs, Documentation.</p>

        <template slot="outer">
          <svg width="100%" height="37" viewBox="0 0 1 37" class="dot show-for-small">
            <path d="M0.5 0L0.500002 37"/>
          </svg>

          <svg width="100%" height="37" viewBox="0 0 1 37" class="dot dot--horizontal hide-for-small">
            <path d="M0.5 0L0.500002 37"/>
          </svg>
        </template>
      </Card>

      <Card title="Build" class="text-center flex-align-middle">
        
        <div class="spark-rotate">
          <g-image alt="Spark" src="~/assets/images/spark.png" />
        </div>

        <div class="logo-pulse">
          <gridsome-logo />
        </div>

        <p class="powered-by">
          Powered by <br/><strong>GraphQL </strong>
          <graph-ql-logo width="18" height="18" />
        </p>

        <ul class="tools flex gap-15 text-center flex--center">
          <li>HTML</li>
          <li><vue-logo width="28" height="28" alt="Vue" /> Vue.js</li>
          <li>CSS</li>
        </ul>
  
        <template slot="outer">
          <svg width="100%" height="37" viewBox="0 0 1 37" class="dot show-for-small">
            <path d="M0.5 0L0.500002 37"/>
          </svg>

          <svg width="100%" height="37" viewBox="0 0 1 37" class="dot dot--horizontal hide-for-small">
            <path d="M0.5 0L0.500002 37"/>
          </svg>
        </template>
      </Card>

      <Card title="Deploy">
        <h4>Static Site Generation</h4>
        
        <ul class="bullet-list">
          <li><Bullet /><g-link to="/docs/how-it-works#the-prpl-pattern">PRPL-pattern</g-link></li>
          <li><Bullet /><g-link to="/docs/how-it-works#smart-link-prefetching">Smart link prefetching</g-link></li>
          <li><Bullet /><g-link to="/docs/how-it-works#progressive-images">Progressive Images</g-link></li>
          <li><Bullet /><g-link to="/docs/how-it-works#client-side-hydration">HTML → Vue.js Hydration</g-link></li>
        </ul>

        <h4>Static Web Hosts</h4>
        <p>
          <g-link to="/docs/deploy-to-netlify">Netlify</g-link>, <g-link to="/docs/deploy-to-amplify">AWS Amplify</g-link>, <g-link to="/docs/deploy-to-zeit-now">Zeit Now</g-link>, <g-link to="/docs/deploy-to-amazon-s3">Amazon S3</g-link>, Surge.sh, Aerobatic, Now.sh & many more.
        </p>
      </Card>

    </div>

    <p class="home-links text-center">
      <g-link  to="/docs/how-it-works">
        Learn more about how it works
      </g-link>
    </p>

    <Ecosystem />

  </Section>
</template>


<script>
import GraphQlLogo from '~/assets/images/graphql-logo.svg'
import VueLogo from '~/assets/images/vue-logo.svg'
import WebpackLogo from '~/assets/images/webpack-logo.svg'
import GridsomeLogo from '~/assets/images/gridsome-small-white.svg'
import Bullet from '~/assets/images/bullet.svg'
import Ecosystem from '@/components/Ecosystem.vue'

export default {
  components: {
    Bullet,
    VueLogo,
    GridsomeLogo,
    WebpackLogo,
    GraphQlLogo,
    Ecosystem
  }
}
</script>

<style lang="scss">
.how-it-works {

  line-height: 1.6;

  .bullet-list {
    margin: 1rem 0 1.5rem;
  }

  .bullet-list li {
    margin-bottom: .3rem;
  }

  @media screen and (max-width: 850px) {
    .card {
      margin-bottom: 40px;
    }
  }

  .card__inner {
    padding: 40px;
  }

  .spark-rotate {
    position: absolute;
    top:-12%;
    left:50%;
    transform: translateX(-50%);
    width: 100%;
    pointer-events: none;
    user-select: none;
    z-index: -1;
    margin: 0;

    img {
      animation: spin 20s infinite linear;
    }
  }

  .tools {
    font-weight: 500;
    background-color: rgba(255,255,255,.9);
    border: 1px solid rgba(0,0,0,.1);
    max-width: 230px;
    border-radius: 4px;
    z-index: 9;
    margin: 0 auto;
    padding: 10px;

    li {
      margin-bottom: 0;
    }
  }

  .logo-pulse {
    background-color: var(--primary-color);
    width: 100px;
    z-index: 1;
    position: relative;
    height: 100px;
    margin: 0 auto;
    margin-top: 18%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 100%;
    z-index: 0;
    animation: pulse 2s infinite;
    margin-bottom: 1rem;

    svg {
      width: 70px;
      height: 70px;
    }
  }

  .powered-by {
    opacity: .8;
    line-height: 1.3;
    padding-bottom: 1.2rem;
  }

  .description {
    opacity: .8;
    font-size: .8rem;
  }

}
.dot {
  height: 30px;
  margin: 15px 0;
  text-align: center;
  position: absolute;
  top: 100%;
  left: 0;
  stroke: var(--primary-color);
  stroke-width: 5px;
  stroke-linecap: round;
  stroke-dasharray: 0 10;
  animation: stroke 600ms linear infinite;

  &--horizontal {
    left: 100%;
    top: 40%;
    z-index: 999;
    width: 50px;
    height: 50px;
    margin-top: -30px;
    transform: rotate(-90deg);
  }
}
</style>
