<template>
  <Layout transparent-header>

    <template slot="intro">
      <Intro />
    </template>

    <DocLinks slot="sidebar" />

    <template slot="toc">
      <ul>
        <li class="text-xs font-mono mb-1 block">Why Gridsome?</li>
        <li class="text-xs font-mono mb-1 block">How it works</li>
        <li class="text-xs font-mono mb-1 block">Use Cases</li>
        <li class="text-xs font-mono mb-1 block">The JAMstack</li>
        <li class="text-xs font-mono mb-1 block">Gridsome VS Nuxt</li>
        <li class="text-xs font-mono mb-1 block">Gridsome VS Gatsby</li>
        <li class="text-xs font-mono mb-1 block">Contributors</li>
        <li class="text-xs font-mono mb-1 block">Sponsors</li>
        <li class="text-xs font-mono mb-1 block">The Team</li>
      </ul>
    </template>

    <div class="rich-text">
      <h2 class="text-2xl font-bold mb-5 text-headline">Break free from the monolithic CMS limits</h2>
      <p class="text-xl mb-5">
        Gridsome makes it painlessly easy to build websites using data from multiple sources such as Content API's, Headless CMSs & Markdown-files. Gridsome pulls in data and generates static, secure HTML files that can be deployed to any global CDN or FTP.
      </p>

      <h2 class="text-2xl font-bold mb-5 text-headline">Why Gridsome?</h2>

      <h3 class="text-lg font-bold mb-3 text-headline">Modern development with Vue.js</h3>
      <p class="mb-5">Build websites with modern tools like Vue.js,  GraphQL & all the power of Node.js & the JavaScript ecosystem. Develop locally and get instant hot-reloading for any code change.</p>

      <h3 class="text-lg font-bold mb-3 text-headline">Speed past the competition</h3>
      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>

      <h3 class="text-lg font-bold mb-3 text-headline">Centralized data management with GraphQL</h3>
      <p class="mb-5">Gridsome pulls connected data sources into a local, unified GraphQL data layer, where it can be queried, filtered, paginated in any Vue Component by using the same syntax. With Gridsome you take full control of the data, no matter what CMS or source it's coming from.</p>

      <h3 class="text-lg font-bold mb-3 text-headline">Simple, safe deployments</h3>
      <p class="mb-5">No servers. No databases. Only files. Deploy your entire site to a CDN and forget about it. A Gridsome site can handle thousands to millions of hits without breaking - and no expensive server costs.</p>
      
      <h3 class="text-lg font-bold mb-3 text-headline">Work faster and build better websites</h3>

      <ul class="leading-loose mb-10">
        <li><strong>File-based page routing</strong> - Any Name.vue file in src/pages is a static route.</li>
        <li><strong>File-based dynamic routing</strong> - Any [param].vue file in src/pages is a dynamic route.</li>
        <li><strong>Automatic Image Optimization</strong>- Compress & Optimize images on-the-fly.</li>
        <li><strong>Automatic Page pre-fetching</strong>- Load next pages in background for faster browsing.</li>
        <li><strong>Automatic Code Splitting</strong> - Builds ultra performance into every page.</li>
        <li><strong>Plugin library</strong> - Extend Gridsome with a rich plugin ecosystem.</li>
      </ul>
    </div>

    <h2 class="text-2xl font-bold mb-5 text-headline">How Gridsome works</h2>

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

