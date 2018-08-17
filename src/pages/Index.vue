<template>
  <Layout>

    <Section dots="true" class="text-center">

      <div class="container-md">
        <h1 class="fade-up gradient-text">Build better, faster, mobile-first websites</h1>
        
        <p class="container-md lead">Gridsome is a <strong>static JAMstack framework</strong> for building blazing-fast <strong>PWA</strong> front-ends for any CMS with <strong>Vue.js</strong> <vue-logo style="margin-top:-4px;" width="30px" height="30px" /> and <strong>GraphQL</strong> <graph-ql-logo style="margin-top:-5px; margin-left: 5px;" width="20px" height="20px" /></p>
      </div>
      <div class="container">
        <Source-animation />
      </div>
      
    </Section>

    <Section dots="true" dark="true">
      <div class="container grid-cols">
        <Feature gradient="1">
          <h3>A static JAMstack framework</h3>
          <p>The future of the web is mobile, JavaScript and APIs—the JAMstack. Gridsome uses the power of blazing-fast <strong>static site generation</strong>, JavaScript and APIs to create stunning, fast & dynamic web experiences.
          </p>
        </Feature>
 
        <Feature gradient="2">
          <h3>Enjoy modern development tools</h3>
          <p>Build websites using latest web tech tools that you love.
            Vue.js, Webpack, Node. Hot-reloading, modern JavaScript & CSS tools are at your desposal. <strong>Gridsome makes building websites fun again.</strong>
          </p>     
        </Feature>

        <Feature gradient="3">
          <h3>Connect to any CMS or data source</h3>
          <p>Use any CMS or data source for content. Pull data from WordPress, Contentful, local Markdown, or any other headless CMS or APIs and access it with <strong>GraphQL</strong> in your components and pages
          </p>     
        </Feature>

        <Feature gradient="4">
          <h3>Mobile-first architecture</h3>
          <p>Only critical HTML, CSS and JavaScript are loaded at first, and then the next pages are prefetched in the background so users can click around extremely fast without page reloads and even when offline.
          </p>     
        </Feature>
        <Feature gradient="5">
          <h3>World-class web performance</h3>
          <p>Gridsome automatically optimises your frontend
            to load and perform extremely fast, so you don’t need any performance checklist.  You get code-splitting and lazy-loading out-of-the-box
          </p>     
        </Feature>
        <Feature gradient="6">
          <h3>Ready for global domination</h3>
          <p>Gridsome sites does not require any database and can be entirely hosted on a CDN. This makes the sites unhackable and can handle thousands to millions of hits without breaking - and no expensive server costs.
          </p>     
        </Feature>
      </div>
      <div class="container">
   
      </div>
    </Section>

  </Layout>
</template>

<script>
import SourceAnimation from '@/components/SourceAnimation.vue'
import VueLogo from '@/components/logos/vue'
import GraphQlLogo from '@/components/logos/graphql'

export default {
  components: {
    SourceAnimation,
    VueLogo,
    GraphQlLogo
  }
}
</script>
