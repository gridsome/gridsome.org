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
        <li class="text-xs font-mono mb-1 block">Static & Dynamic</li>
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
      <p class="text-lg mb-8">Gridsome lets you build websites using data from multiple sources such as modern Headless CMS, Content API's & Markdown-files. Gridsome takes your data and generates incredible fast, secure & static HTML files that can be deployed to any global CDN for better and cheaper hosting.
      </p>

      <h2 class="text-xl font-bold mb-5 text-headline">Why Gridsome?</h2>

      <ul class="leading-loose mb-10">
        <li><strong>Vue.js for frontend</strong> - The simplest & most approachable frontend framework.</li>
        <li><strong>Local development with hot-reloading</strong> - See code changes in real-time.</li>
        <li><strong>Source any data</strong> - Bring data from your favorite CMS, APIs or Markdown-files.</li>
        <li><strong>GraphQL data layer</strong> - Centralized data management powered by GraphQL.</li>
        <li><strong>Fast by default</strong> - Gridsome builds performance into every page automatically.</li>
        <li><strong>Static file generation</strong> - Deploy fast & securely to any CDN or static web host.</li>
        <li><strong>File-based page routing</strong> - Any Name.vue file in src/pages is a static route.</li>
        <li><strong>Dynamic routing</strong> - Any [param].vue file in src/pages is a dynamic route.</li>
        <li><strong>Automatic Image Optimization</strong>- Compress & Optimize images on-the-fly.</li>
        <li><strong>Automatic Page pre-fetching</strong>- Load next pages in background for faster browsing.</li>
        <li><strong>Automatic Code Splitting</strong> - Only load what's needed per page.</li>
        <li><strong>Plugin library</strong> - Extend Gridsome with a rich plugin ecosystem.</li>
      </ul>

      <h2 class="text-xl font-bold mb-6 text-headline">How Gridsome works</h2>

      <div class="relative border border-primary shadow-strong p-4 pt-6 mb-8">
        <span class="block font-mono text-xs absolute bg-primary text-on-dark p-1 px-2 -mt-3 ml-3 rounded shadow-strong top-0 left-0">01. Bring your data</span>
        <p class="text-sm"><strong>Source data from anywhere</strong> Any Headless CMS, Contentful, WordPress, Drupal, Sanity.io, etc. Data Any APIs, Databases, AirTable, YAML, CSV, JSON, etc. Markdown Any Git-based CMS, Forestry, Netlify CMS, Blogs, Documentation.</p>
      </div>

      <div class="relative border border-primary shadow-strong p-4 pt-6 mb-5">
        <span class="block font-mono text-xs absolute bg-primary text-on-dark p-1 px-2 -mt-3 ml-3 rounded shadow-strong top-0 left-0">02. Build</span>
        <p class="text-sm"><strong>Build with modern tools</strong> Vue.js, GraphQL, HTML, CSS.</p>
      </div>

      <div class="relative p-3 mb-5">
        <p class="text-xs"><strong>Store your Gridsome project on Git</strong>. Changes will be automatically be deployed.</p>
      </div>

      <div class="relative border border-primary shadow-strong p-4 pt-6 mb-5">
        <span class="block font-mono text-xs absolute bg-primary text-on-dark p-1 px-2 -mt-3 ml-3 rounded shadow-strong top-0 left-0">03. Deploy</span>
        <p class="text-sm"><strong>Generate & deploy static HTML files - </strong> Netlify, Zeit, AWS</strong></p>
      </div>

      <p class="mb-5">Gridsome generates static html that hydrates into a Vue SPA once loaded in the browser. This means you can build both static websites & dynamic apps with Gridsome. It's perfect for your JAMstack workflow.</p>

      <p class="mb-5">Gridsome builds one .html file and one .json file for every page. After first page load it only uses the .json files to prefetch and load data for the next pages. It also builds a .js bundle for each page that needs it (code splitting).</p>

      <p class="mb-5">It uses vue-router for SPA routing, and vue-meta for managing </p>

      <p class="mb-5">Gridsome adds a 57kB min gzip JS bundle size by default.(vue.js, vue-router, vue-meta and some for image lazy loading).</p>


      <h2 class="text-xl font-bold mb-6 text-headline">Static & dynamic data in Gridsome</h2>

      <p>By default Gridsome takes data and generates static HTML files, but that does not mean you can build dynamic apps & features with Gridsome. A Gridsome site is hydrated into a Vue.js application, so you can do everything a Vue.js app can do.</p>

      <div class="relative border border-secondary bg-secondary-tint shadow-strong pl-10 py-2 my-5">
        <span class="block font-mono text-xs absolute bg-secondary text-on-dark p-1 px-2 -ml-5 mt-2 rounded shadow-strong top-0 left-0" style="transform: rotate(-5deg);">Tip!</span>

        <p class="text-sm">Data pulled in to GraphQL data layer is always generated as static, SEO readable HTML. <strong>Dynamic data</strong> needs to be fetched client-side inside <strong>mounted()</strong> and is not a part of the generated HTML.</p>
      </div>

      <p>What you can do with dynamic data in Gridsome</p>

      <ul>
        <li>Fetch data to a Vue.js component from API if a user is logged in.</li>
        <li>Redirect to another page if user is not logged in.</li>
      </ul>

      <p>What you can NOT do with dynamic data in Gridsome</p>

      <ul>
        <li>Protect static data for only logged in users</li>
        <li>Protect routes for only logged in users.</li>
      </ul>

    </div>

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
    title: 'A Vue.js powered Modern Website Generator'
  }
}
</script>

