<template>
  <Layout>

    <Section dots="true" class="text-center">

      <div class="container-md">
        <h1 class="fade-up">Build faster, better websites with Vue.js</h1>
        
        <p class="container-sm lead">Gridsome is a blazing-fast <strong>static site generator</strong> for building PWA & SPA frontends for any CMS or data source with <strong>Vue.js</strong><vue-logo style="margin-top:-2px;margin-left:-5px;" width="30px" height="30px" /> and <strong>GraphQL</strong><graph-ql-logo style="margin-top:-5px; margin-left: 6px;" width="20px" height="20px" /></p>
        <Link to="/docs" class="button"> Get started </Link>
      </div>
    
      <div class="container">
        <Source-animation />
      </div>
      
    </Section>

    <Section dots="true" dark="true">
      <div class="container grid-cols">
        <Feature gradient="1">
          <h3>A static JAMstack framework</h3>
          <p>The future of the web is mobile, JavaScript and APIs <strong>— the JAMstack</strong>. Gridsome uses the power of blazing-fast <strong>static site generator</strong>, JavaScript and APIs to create stunning dynamic web experiences.
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
          <h3>PWA Mobile-first architecture</h3>
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

    <Section dots="true">
      <div class="container-md text-center">
        <h2>How Gridsome works</h2>
        <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
        <hr />
        <h3><span class="gradient-3" style="display:inline-block; vertical-align:middle; line-height: 80px; width: 80px; height: 80px; margin-right: 20px; border-radius: 999px; text-align:center;">1</span>Connect to any CMS or Data Source</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        
      <svg width="386" height="74" viewBox="0 0 386 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="stroke-anim" d="M1.69481 1.2182C41.8439 19.8865 129.224 40.2118 188.128 41.16C248.667 42.1345 334.969 43.4097 384.45 73.2535" stroke="black"/>
      </svg>




        <h3>Access and use data from GraphQL<span class="gradient-2" style="display:inline-block; vertical-align:middle; line-height: 80px; width: 80px; height: 80px; margin-left: 20px; border-radius: 999px; text-align:center;">2</span></h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
         <svg width="215" height="64" viewBox="0 0 215 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="stroke-anim" d="M213.721 1.01564C191.069 18.673 142.278 36.8063 109.706 36.282C76.2304 35.7431 28.511 34.8609 0.42388 63.456" stroke="black"/>
        </svg>


        <h3><span class="gradient-4" style="display:inline-block; vertical-align:middle; line-height: 80px; width: 80px; height: 80px; margin-right: 20px; border-radius: 999px; text-align:center;">3</span>Build websites with Vue.js</h3>
        <p>With clean and standard code syntax makes Vue.js very simple to understand for any web designers and web developers. Vue.js Single File Components lets you add HTML, CSS and JavaScript all in the same file</p>
        
      <svg width="124" height="50" viewBox="0 0 124 50" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path class="stroke-anim" d="M0.388268 0.76767C12.9278 13.0338 40.7333 26.6027 59.8012 27.5046C79.3978 28.4315 107.337 29.6792 122.618 49.216" stroke="black"/>
      </svg>

      <h3>Generate & Deploy<span class="gradient-5" style="display:inline-block; vertical-align:middle; line-height: 80px; width: 80px; height: 80px; margin-left: 20px; border-radius: 999px; text-align:center;">3</span></h3>
        <p>The powerful <strong>static site generator</strong> creates HTML files of all pages & content that SEO engines can crawl - ready to be deployed and hosted safely on any global CDN or FTP. You can also use CI service like <strong>Netlify</strong> that generates, deploy and host your websites from a selected Git-repo automatically. <Link to="docs/deploy"> Learn more about deploying here </Link></p>

        <Link to="/docs" class="button lead"> Get started </Link>
      </div>
    </Section>


    <Section dots="true">
      <div class="container-sm text-center">
        <h2>Signup for News</h2>
        <p>We're on a mission to change how designers, marketers & developers build websites together for the modern mobile web. <strong>Follow our journey 🙌</strong></p>
        <input placeholder="Sign up for newsletter" type="email" />
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

<style>
hr {
  opacity: .3;
  margin: 3rem 0;
}

.stroke-anim {
  stroke: #ccc;
  stroke-width: 5px;
  stroke-linecap: round;
  stroke-dasharray: 0 15;
  animation: stroke 300ms linear infinite;
}

</style>
