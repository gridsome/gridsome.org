<template>
  <Layout>

    <Section dots="true" class="text-center">

      <div class="container-md mb" style="position: relative;">
        <h1>
          <span style="font-size: 75%;">The Vue framework for</span>
          <transition name="rotate">
            <div v-if="currentText == 0" class="gradient-text" style="font-size: 140%;" key="0">Blazing fast websites</div>
            <div v-else-if="currentText == 1" key="1" class="gradient-text" style="font-size: 140%;">any Headless CMS</div>
            <div v-else-if="currentText == 2" key="2" class="gradient-text" style="font-size: 140%;">Static Websites
            </div>
            <div v-else-if="currentText == 3" key="3" class="gradient-text" style="font-size: 140%;">eCommerce PWAs
            </div>
            <div v-else-if="currentText == 4" key="4" class="gradient-text" style="font-size: 140%;">SEO-friendly SPAs
            </div>
            <div v-else-if="currentText == 5" key="5" class="gradient-text" style="font-size: 140%;">Perfect speed scores
            </div>
          </transition>
        </h1>

        <p class="container-sm lead" style="font-size: 130%">Build blazing fast websites & apps with <br class="hide-for-small" /> <strong>Vue.js</strong><vue-logo/> & <strong>GraphQL</strong><graph-ql-logo style="color:#E535AB" /></p>
        <g-link to="/docs" class="button"> Get started </g-link>
        <a href="//github.com/gridsome/gridsome" class="button plain">GitHub</a>

      </div>
  
      
    </Section>

    <Section dots="true" dark="true" class="post">
      <div class="container grid-cols">
   

        <Feature gradient="3">
          <h3>Connect to any CMS or data source</h3>
          <p>Use any CMS or data source for content. Pull data from WordPress, Contentful, local Markdown, or any other headless CMS or APIs and access it with <strong>GraphQL<graph-ql-logo style="color:#E535AB" /></strong>
          </p>
        </Feature>

         <Feature gradient="2">
          <h3>Enjoy a modern development stack</h3>
          <p>Build websites with modern tools like Vue.js, Webpack and Node.js. Get hot-reloading and access to any packages from npm and write CSS in your favorite preprocessor.
          </p>
        </Feature>


        <Feature gradient="5">
          <h3>Get perfect page <br class="hide-for-small"/>speed scores</h3>
          <p>Gridsome automatically optimises your frontend to load and perform blazing fast. You get code-splitting, asset optimisation, lazy-loading, and almost perfect lighthouse scores out-of-the-box.
          </p>     
        </Feature>
    
        <Feature gradient="4">
          <h3>PWA Mobile-first architecture</h3>
          <p>Only critical HTML, CSS, and JavaScript are loaded at first, and then the next pages are prefetched so users can click around incredible fast without page reloads and even when offline. 
          </p>     
        </Feature>
   

        <Feature gradient="1">
          <h3>Build future ready websites</h3>
          <p>The future of the web is mobile, JavaScript, and APIs <strong>— the JAMstack</strong>. Gridsome uses the power of blazing-fast <strong>static site generator</strong> or <strong>server-side rendering</strong>, JavaScript and APIs to create stunning dynamic web experiences.
          </p>
        </Feature>
 


        <Feature gradient="6">
          <h3>Ready for global domination</h3>
          <p>Gridsome sites are usually not connected to any database and can be hosted entirely on a global CDN. It can handle thousands to millions of hits without breaking - and no expensive server costs.
          </p>     
        </Feature>
      </div>
      <div class="container">
   
      </div>
    </Section>

    <Section dots="true" class="post">
      <div class="container flex flex-align-top gap-60">
        <div style="max-width: 400px">

          <div class="mb">
            <h4 style="margin-bottom: .5rem">Use GraphQL for data</h4>
            <p>Pull data from any CMS or sources into a internal GraphQL database, and access it in any page or components with a query.</p>
          </div>

          <div  class="mb">
            <h4 style="margin-bottom: .5rem">Automatic Page Routing</h4>
            <p>Add a .vue file in <code>/pages</code> and it will automatically be a route. F.ex <code>pages/About.vue</code> will be <strong>website.com/about</strong>.</p>
          </div>


          <div  class="mb">
            <h4 style="margin-bottom: .5rem">Smart template system</h4>
            <p>Any .vue files added to <code>/templates</code> will be the template to a GraphQL collection. F.ex <code>templates/WordPressPost.vue</code> will be the single page template for <strong>allWordPressPost</strong> collection.</p>
          </div>


          <div>
            <h4 style="margin-bottom: .5rem">SEO-friendly HTML output</h4>
            <p>
              Gridsome generates optimized HTML that any SEO engine can read. The static site generation is extremely fast because it uses a in-memory database for all content. You can also use Server-side rendering for SEO support.
            </p>
          </div>
        </div>

        <div class="flex-fit">
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

  data() {
    return {
      currentText: 0
    }
  },

  computed: {
    example() {
      return  Example
    },
  },

  mounted () {
    this._counter = setInterval(() => {
      this.currentText = (this.currentText + 1) % 5
    }, 2000)
  },

  destroyed () {
    clearTimeout(this._counter)
  },


  metaInfo: {
    title: 'Gridsome - Build blazing fast websites with Vue.js and GraphQL',
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

<style>

.rotate-enter-active {
  transition: all 1s ease;  
  transform: translateY(20px);
  opacity: 0;
}

.rotate-leave-active {
  transition: all 1s ease;  
}

.rotate-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.rotate-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.rotate-leave-active{
  left:0;
  right:0;
  position: absolute;
}

</style>
