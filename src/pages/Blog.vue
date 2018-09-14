<template>
  <Layout transparent="true">
    
    <Section dark="true" class="text-center" dots="true" container="md">
      <h1>Gridsome Blog</h1>
      <p class="lead">Follow our mission to make building websites fun again.</p>
    </Section>
    
    <div class="blog-posts">
      <div class="blog-posts__post container container-md  container--framed">
        <h2>Say hello to Gridsome 0.0.1 👶🎉💚</h2>
        <p><small>Posted 14. September 2018 by <a href="#">Tommy.</a> 3 min read</small></p>


        <p class="lead">
          A new static site generator (SSG) baby is born. It's highly inspired by Gatsby.js (React based) but it's built on top of Vue.js. You can expect this baby to grow up really fast!
        </p>
        

        <h4>There are so many SSGs. Why another one?</h4>

        <p>We think Gridsome is a missing piece to the Vue.js ecosystem. What Gatsby.js does for React.js is a game changer in how we build websites. The goal is to do this for Vue.js. With Gridsome you get an universal GraphQL interface where all your connected data sources is. Its like a single source of truth for your website data ready to be inserted anywhere. This and Vue.js makes it extremely fun and fast to build websites. You don't need to know GraphQL or Vue.js to get started with Gridsome - It's a great way to get introduced to both.</p>

        <h4>Top scores on any speed testing tool - automagically ⚡️</h4>

        <p>One of the main goals with Gridsome is to make a framework that let you build websites that are optimized "out-of-the-box". A Gridsome site should get almost top scores on Lighthouse or Google Page Speed testing tools. It follows the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">PRPL-pattern by Google.</a> Images are automatically optimized and lazy-loaded with the built-in Image component.</p>



        <h4>A better way to build websites</h4>

        <p>
          Gridsome is a JAMstack framework - a new way to build websites that gives you better performance, higher security, cheaper hosting and better developer experience. While pages are static generated at build time, for SEO & speed purpose, you can add powerful dynamic functionality with Vue.js.
        </p>


        <p>
          Imagine a static generated Shopify store where prices and Qty. gets pulled from an API when users open the static optimized product page. You get the best from both worlds, and an extremely fast website.
        </p>

        <p>
          This is what we think are really exiting with SSGs / JAMstack and is why we are building Gridsome. <strong>Its the perfect SPA & PWA front-end solution</strong> for any headless CMS or content APIs.
        </p>

        <h4>So whats next...</h4>

        <p>
          We believe the SSG / JAMstack trend is just getting started. When you have first started to make websites this way there is no way back. You will feel almost "dirty" when going back to a traditional WordPress / CMS setup. Try run the new Chrome "Audit" testing tool on a WordPress site. It is impossible to get good scores even with the best caching plugins and hosting. With Gridsome you don't even need caching plugins. Website optimsation is taken care of at build time.
        </p>


        <p>In the next couple of months we're going to continue to improve the docs, add more Source & transformer plugins and fix reported bugs.</p>

        <p>The project is more mature than the version tells you, but we're starting here and will try to get to 1.0 as fast as possible.</p>


        <h4>Help this baby grow!</h4>

        <p>It's just me and my brother working on this now, so any contribution is very welcome!</p>



      </div>
    </div>

  </Layout>
</template> 

<style lang="scss">
.blog-posts {
  padding: 2rem 1rem;

  &__post {
    margin-bottom: 2rem;
  }
}
</style>
