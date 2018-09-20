<template>
  <Layout>

    <Section dots="true" class="text-center">

      <div class="container-md fade-up mb">
        <h1 class="fade-up">Build faster, better websites with <span class="gradient-text">Vue.js</span></h1>
        
        <p class="container-sm lead">Gridsome is a blazing fast <strong>static site generator</strong> for building <strong><small>PWA</small> & <small>SPA</small></strong> front-ends for any CMS or data source with <strong class="no-wrap">Vue.js<vue-logo/> </strong> and <strong class="no-wrap">GraphQL<graph-ql-logo /></strong></p>
        <g-link to="/docs" class="button"> Get started </g-link>
        <a href="//github.com/gridsome/gridsome" class="button plain">GitHub</a>

      </div>
  
      
    </Section>

    <Section dots="true" dark="true" class="post">
      <div class="container grid-cols">
   
        <Feature gradient="4">
          <h3>PWA mobile first architecture</h3>
          <p>Only critical HTML, CSS, and JavaScript are loaded at first, and then the next pages are prefetched so users can click around without page reloads and even when offline. Follows the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">PRPL-pattern</a> by Google.
          </p>     
        </Feature>

        <Feature gradient="3">
          <h3>Pull data from any data source or CMS</h3>
          <p>Use any CMS or data source for content. Pull data from WordPress, Contentful, local Markdown, or any other headless CMS or APIs and access it with <strong>GraphQL</strong> in your components and pages.
          </p>
        </Feature>

         <Feature gradient="2">
          <h3>Enjoy a modern development stack</h3>
          <p>Build websites with modern tools like Vue.js, Webpack and Node.js. Get hot-reloading and access to any packages from npm and write CSS in your favorite preprocessor.
          </p>
        </Feature>


        <Feature gradient="5">
          <h3>Perfect page speed scores as default</h3>
          <p>Gridsome automatically optimises your frontend to load and perform blazing fast. You get code-splitting, asset optimisation, lazy-loading, and almost perfect Lighthouse scores out-of-the-box.
          </p>     
        </Feature>
    

   

        <Feature gradient="1">
          <h3>A static JAMstack framework</h3>
          <p>The future of the web is mobile, JavaScript, and APIs <strong>— the JAMstack</strong>. Gridsome uses the power of blazing-fast <strong>static site generator</strong>, JavaScript and APIs to create stunning dynamic web experiences.
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

    <Section dots="true" class="post">
      <div class="container grid-cols grid-cols--2">
        <div style="width: 480px;">

          <div class="mb">
            <h4 style="margin-bottom: .5rem">Use GraphQL for data</h4>
            <p>Pull data from any CMS or sources into a internal GraphQL layer, and access it in any page or components with a query. Data sources is added with Gridsome Source Plugins</p>
          </div>

          <div  class="mb">
            <h4 style="margin-bottom: .5rem">Automatic Page Routing</h4>
            <p>Add a .vue file in <code>/pages</code> and it will automatically be a route. F.ex <code>pages/About.vue</code> will be <strong>website.com/about</strong></p>
          </div>


          <div  class="mb">
            <h4 style="margin-bottom: .5rem">Smart template system</h4>
            <p>Any .vue files added to <code>/templates</code> will be the template to a GraphQL collection. F.ex <code>templates/WordPressPost.vue</code> will be the single page template for <strong>WordPressPost</strong> collection</p>
          </div>


          <div class="mb">
            <h4 style="margin-bottom: .5rem">Dynamic Routes for data sources</h4>
            <p>
              Data sources added to Gridsome gets automatic routing from plugin settings. F.ex, a source plugin can have <code>route: '/blog/:year/:month/:day/:slug'</code> as settings.
            </p>
          </div>



          <div>
            <h4 style="margin-bottom: .5rem">Generate SEO-friendly HTML</h4>
            <p>
              Gridsome generates optimized HTML that any SEO engine can read. The static site generation is blazing fast because it uses a in-memory database for all content.
            </p>
          </div>
        </div>

        <div>
            <pre v-text="example" />
        </div>

      </div>
    </Section>

    <Section>
      <div class="text-center">
        <h2>How Gridsome works</h2>
      </div>
      <SourceAnimation />
    </Section>


    <Section dots="true" primary="true">
      <div class="container text-center container-sm mb">
        <h2>Latest posts</h2>
      </div>
      <div class="blog-posts container container-md">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node._id" :post="edge.node"/>
      </div>
    </Section>
  </Layout>
</template>

<script>
import VueLogo from '@/components/logos/vue'
import SourceAnimation from '@/components/SourceAnimation.vue'
import GraphQlLogo from '@/components/logos/graphql'
import PostCard from '@/components/PostCard.vue'
import Example from 'raw-loader!@/data/graphql-example.txt'

export default {
  components: {
    VueLogo,
    SourceAnimation,
    GraphQlLogo,
    PostCard,
  },

  computed: {
    example() {
      return  Example
    }
  },

  metaInfo: {
    title: 'Gridsome - Built faster, better websites with Vue.js',
    titleTemplate: '%s',
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
