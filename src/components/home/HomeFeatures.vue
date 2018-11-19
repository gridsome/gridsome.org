<template>
  <Section dots="true" dark="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Connect to any CMS or data source</h3>
        <p>Use any CMS or data source for content. Pull data from WordPress, Contentful, local Markdown, or any other headless CMS or APIs and access it with <strong>GraphQL<graph-ql-logo /></strong> in your pages and components.
        </p>
      </Feature>

       <Feature>
        <h3>Enjoy a modern development stack</h3>
        <p>Build websites with modern tools like Vue.js, Webpack and Node.js. Get hot-reloading and access to any packages from npm and write CSS in your favorite preprocessor.
        </p>
      </Feature>

      <Feature>
        <h3>PWA Mobile-first architecture</h3>
        <p>Only critical HTML, CSS, and JavaScript get loaded first. The next pages are then prefetched so users can click around incredibly fast without page reloads, even when offline.
        </p>
      </Feature>


      <Feature>
        <h3>Get perfect page <br class="hide-for-small"/>speed scores</h3>
        <p>Gridsome automatically optimises your frontend to load and perform blazing fast. You get code-splitting, image optimisation, lazy-loading, and almost perfect lighthouse scores out-of-the-box.
        </p>
      </Feature>


      <Feature>
        <h3>Build future ready websites</h3>
        <p>The future of the web is JavaScript, API's, and Markup - the <strong><a href="https://jamstack.org">JAMstack</a></strong>. Gridsome uses the power of blazing-fast <strong>static site generator</strong> or <strong>server-side rendering</strong>, JavaScript and APIs to create stunning dynamic web experiences.
        </p>
      </Feature>



      <Feature>
        <h3>Ready for global domination</h3>
        <p>Gridsome sites are usually not connected to any database and can be hosted entirely on a global CDN. It can handle thousands to millions of hits without breaking - and no expensive server costs.
        </p>
      </Feature>
    </div>
  </Section>
</template>

<script>
export default {
  props: ['icon', 'gradient'],
  computed: {
    iconClasses() {
      let classes = []
      if(this.gradient) classes.push('gradint-' + this.gradient)
      return classes
    }
  }
}
</script>
