<template>
  <Layout>

    <Section dots="true" class="text-center">

      <div class="container-md fade-up mb">
        <h1 class="fade-up">Build faster, better websites with <span class="gradient-text">Vue.js</span></h1>
        
        <p class="container-sm lead">Gridsome is a blazing fast <strong>static site generator</strong> for building <strong><small>PWA</small> & <small>SPA</small></strong> front-ends for any CMS or data source with <strong class="no-wrap">Vue.js<vue-logo/> </strong> and <strong class="no-wrap">GraphQL<graph-ql-logo /></strong></p>
        <g-link to="/docs" class="button"> Get started </g-link>
        <a href="//github.com/gridsome/gridsome" class="button plain">GitHub</a>

      </div>
    
      <div class="container hide-for-small">
        <SourceAnimation />
      </div>
      
    </Section>

    <Section dots="true" dark="true" class="post">
      <div class="container grid-cols">
        <Feature gradient="1">
          <h3>A static JAMstack framework</h3>
          <p>The future of the web is mobile, JavaScript, and APIs <strong>— the JAMstack</strong>. Gridsome uses the power of blazing-fast <strong>static site generator</strong>, JavaScript and APIs to create stunning dynamic web experiences.
          </p>
        </Feature>
 


        <Feature gradient="3">
          <h3>Pull data from any CMS or data source</h3>
          <p>Use any CMS or data source for content. Pull data from WordPress, Contentful, local Markdown, or any other headless CMS or APIs and access it with <strong>GraphQL</strong> in your components and pages.
          </p>     
        </Feature>


        <Feature gradient="5">
          <h3>Perfect page speed scores out-of-the-box</h3>
          <p>Gridsome automatically optimises your frontend to load and perform blazing fast. You get code-splitting, asset optimisation, lazy-loading, and almost perfect Lighthouse scores out-of-the-box.
          </p>     
        </Feature>
    

        <Feature gradient="2">
          <h3>Enjoy modern development tools</h3>
          <p>Build websites using the latest web tech tools that you love.
            Vue.js, Webpack, Node. Hot-reloading, modern JavaScript & CSS tools are at your disposal.
          </p>     
        </Feature>


        <Feature gradient="4">
          <h3>PWA Mobile-first architecture</h3>
          <p>Only critical HTML, CSS, and JavaScript are loaded at first, and then the next pages are prefetched so users can click around without page reloads and even when offline.
          </p>     
        </Feature>

        <Feature gradient="6">
          <h3>Ready for global domination</h3>
          <p>Gridsome sites do not require any database and can be hosted entirely on a global CDN. It can handle thousands to millions of hits without breaking - and no expensive server costs.
          </p>     
        </Feature>
      </div>
      <div class="container">
   
      </div>
    </Section>

    <Section dots="true" container="md" class="post">
      <div class="container-md text-center">
        <p class="uppercase">How Gridsome works</p>

        <h3>Connect to any CMS or Data Source <span class="gradient-3" style="display:inline-block; vertical-align:middle; line-height: 60px; width: 60px; height: 60px; margin-left: 20px; border-radius: 999px; text-align:center;">1</span></h3>
        <p>Use Gridsome source plugins to get data from local Markdown files, WordPress, Contentful or any headless CMS & content APIs. Data are pulled into a <g-link to="docs/sources"><span class="no-wrap"><strong>GraphQL</strong> <graph-ql-logo style="margin-left:0" /></span></g-link> layer that any Components, <g-link to="docs/layouts-pages-templates">Pages, Layouts or Templates</g-link> can access.</p>

         <svg width="255" height="80" viewBox="0 0 215 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="stroke-anim" d="M213.721 1.01564C191.069 18.673 142.278 36.8063 109.706 36.282C76.2304 35.7431 28.511 34.8609 0.42388 63.456" stroke="black"/>
        </svg>


      <h3><span class="gradient-4" style="display:inline-block; vertical-align:middle; line-height: 60px; width: 60px; height: 60px; margin-right: 20px; border-radius: 999px; text-align:center;">2</span>Build websites with Vue.js</h3>
        <p>With clean and standard code syntax makes Vue.js very approachable for any web designers and web developers. Vue Single File Components lets you edit Markup, CSS, and JavaScript all in the same file. <g-link to="docs/vue">Learn more about Vue</g-link></p>
        
      <svg width="154" height="70" viewBox="0 0 124 50" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path class="stroke-anim" d="M0.388268 0.76767C12.9278 13.0338 40.7333 26.6027 59.8012 27.5046C79.3978 28.4315 107.337 29.6792 122.618 49.216" stroke="black"/>
      </svg>

      <h3>Generate & Deploy<span class="gradient-5" style="display:inline-block; vertical-align:middle; line-height: 60px; width: 60px; height: 60px; margin-left: 20px; border-radius: 999px; text-align:center;">3</span></h3>
        <p>The blazing fast <strong>static site generator</strong> creates HTML files of all pages & content that SEO engines can crawl - ready to be deployed and hosted safely on any global CDN or FTP. You can also use CI service like <strong>Netlify</strong> that generates, deploy and host your websites from a selected Git-repo automatically. <g-link to="docs/deployment"> Learn more about deployment</g-link></p>

        <g-link to="/docs" class="button lead"> Get started </g-link>
      </div>
    </Section>

    <Section dots="true" primary="true">

      <div class="container text-center container-sm mb">
        <h2>Latest posts</h2>
      </div>
      <div class="blog-posts container container-md">
        <g-link v-for="edge in $page.posts.edges" :key="edge.node._id" :to="edge.node.path">
          <Card class="blog-posts__post post">
            <h3 v-html="edge.node.title"/>
            <PostMeta :post="edge.node"/>
            <p v-html="edge.node.fields.excerpt"/>
            <p class="card__read-more"> Read more </p>
          </Card>
        </g-link>
      </div>
    </Section>
  </Layout>
</template>

<script>
import SourceAnimation from '@/components/SourceAnimation.vue'
import VueLogo from '@/components/logos/vue'
import GraphQlLogo from '@/components/logos/graphql'
import PostMeta from '@/components/PostMeta.vue'

export default {
  components: {
    SourceAnimation,
    VueLogo,
    GraphQlLogo,
    PostMeta
  },
  metaInfo: {
    title: 'Gridsome - Built faster, better websites with Vue.js',
    meta: [
      {
        name: 'description',
        content: 'Gridsome is a blazing-fast static site generator for building PWA & SPA front-ends for any CMS or data source with Vue.js and GraphQL'
      }
    ]
  }
}
</script>

<graphql>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        _id
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        content
        fields {
          author
          excerpt
        }
      }
    }
  }
}
</graphql>


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
