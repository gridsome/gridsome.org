<template>
  <Layout transparent-header>

    <template slot="intro">
      <Intro />
    </template>

    <DocLinks slot="sidebar" />

    <template slot="toc">
      <h3>On this page</h3>
      <ul>
        <li>Why Gridsome?</li>
        <li>How it works</li>
        <li>What is JAMstack</li>
        <li>The API Economy</li>
        <li>Gridsome VS Nuxt</li>
        <li>Gridsome VS Gatsby</li>
        <li>Contributors</li>
        <li>Newsletter</li>
      </ul>
    </template>
    <div class="rich-text">
      <h2 class="text-2xl font-bold mb-3">Break free from the CMS limits</h2>
      <p class="text-xl mb-5">
        The modern web is decoupled and modular. Gridsome makes it painlessly easy to build websites using data from multiple sources such as Content API's, Headless CMSs & Markdown files. Gridsome pulls in data and generates static, secure HTML files that can be deployed to any global CDN or FTP.
      </p>

      <h2 class="text-2xl font-bold mb-3">Why Gridsome?</h2>

      <h3 class="text-lg font-bold mb-3">Enjoy modern development tools</h3>
      <p class="mb-5">Build websites with modern tools like Vue.js,  GraphQL & all the power of Node.js & the JavaScript ecosystem. Develop locally and get instant hot-reloading for any code change.</p>

      <h3 class="text-lg font-bold mb-3">Fast by default</h3>
      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>


      <h3 class="text-lg font-bold mb-3">Centralized data management</h3>
      <p class="mb-5">Gridsome pulls connected data sources into a local, unified GraphQL data layer, where it can be queried, filtered, paginated in any Vue Component by using the same syntax. With Gridsome you take full control of the data, no matter what CMS or source it's coming from.</p>

      <h3 class="text-lg font-bold mb-3">Simple, safe deployments</h3>
      <p class="mb-5">No servers. No databases. Only files. Deploy your entire site to a CDN and forget about it. A Gridsome site can handle thousands to millions of hits without breaking - and no expensive server costs.</p>
  
    </div>

    <h2 class="text-2xl font-bold mb-5">How Gridsome works</h2>

  </Layout>
</template>

<script>
import links from '@/data/doc-links.yaml'
import LazyHydrate from 'vue-lazy-hydration'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeExamples from '@/components/home/HomeExamples.vue'
import HomeCommunity from '@/components/home/HomeCommunity.vue'
import HomeConnect from '@/components/home/HomeConnect.vue'
import Intro from '@/components/Intro.vue'
import DocLinks from '@/components/DocLinks.vue'

export default {
  components: {
    LazyHydrate,
    HomeHowItWorks,
    HomeExamples,
    HomeCommunity,
    HomeConnect,
    HomeFeatures,
    HomeBlog,
    Intro,
    DocLinks
  },
  
  metaInfo: {
    title: 'Modern Site Generator for Vue.js'
  }
}
</script>

