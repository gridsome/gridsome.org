<template>
  <Section dots="true" primary="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>

        <h3>Connect to any CMS or data source</h3>
        <p>Use any CMS or data source for content. Pull data from WordPress, Contentful, local Markdown, or any other headless CMS or APIs and access it with <strong>GraphQL<graph-ql-logo /></strong> in your pages and components.
        </p>
      </Feature>

       <Feature>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>

        <h3>Enjoy a modern development stack</h3>
        <p>Build websites with modern tools like Vue.js, Webpack and Node.js. Get hot-reloading and access to any packages from npm and write CSS in your favorite preprocessor.
        </p>
      </Feature>

      <Feature>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>

        <h3>PWA Offline-first architecture</h3>
        <p>Only critical HTML, CSS, and JavaScript get loaded first. The next pages are then prefetched so users can click around incredibly fast without page reloads, even when offline. 
        </p>     
      </Feature>


      <Feature>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>

        <h3>Get perfect page <br class="hide-for-small"/>speed scores</h3>
        <p>Gridsome automatically optimises your frontend to load and perform blazing fast. You get code-splitting, image optimisation, lazy-loading, and almost perfect lighthouse scores out-of-the-box.
        </p>     
      </Feature>


      <Feature>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>

        <h3>Build future ready websites</h3>
        <p>The future of the web is JavaScript, API's, and Markup - the <strong><a href="https://jamstack.org">JAMstack</a></strong>. Gridsome uses the power of blazing-fast <strong>static site generator</strong> or <strong>server-side rendering</strong>, JavaScript and APIs to create stunning dynamic web experiences.
        </p>
      </Feature>



      <Feature>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>

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
