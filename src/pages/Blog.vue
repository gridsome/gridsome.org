<template>
  <Layout transparent="true">
    
    <Section dark="true" class="text-center" dots="true" container="md">
      <h1>The Gridsome Blog</h1>
      <p class="lead">Follow our mission to make building websites fun again.</p>
    </Section>
    
    <div class="blog-posts">
      <div class="blog-posts__post container container-md  container--framed">
        <h2>Say hello to Gridsome 0.0.1 👶🎉💚</h2>
        <p class="lead">
          A new static site generator (SSG) baby is born. It's highly inspired by Gatsby.js (React based) but it's built on top of Vue.js. You can expect this baby to grow up really fast!
        </p>


        <h4>There are so many Static Site generators. Why another one?</h4>

        <p>We think Gridsome is a missing piece to the Vue.js ecosystem. What Gatsby.js does for React.js is a game changer in how we build websites. Our goal is to do this for Vue.js. With Gridsome you get an universal GraphQL interface where all your connected data sources is. Its like a single source of truth for your website data ready to be inserted anywhere. This and Vue.js makes it extremely fun and fast to build websites. You don't need to know GraphQL to get started with Gridsome - It's a great way to get introduced to it.</p>

        <h4>Top scores on any speed testing tool - automagically ⚡️</h4>

        <p>One of the main goals with Gridsome is to make a framework that let you build websites that are optimized "out-of-the-box". A Gridsome site should get almost top scores on Lighthouse or Google Page Speed testing tools. It follows the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">PRPL-pattern by Google.</a> Images are automatically optimized and lazy-loaded with the built-in Image component.</p>



        <h4>A better way to build websites</h4>

        <p>
          JAMstack is a new way to build websites that gives you better performance, higher security, cheaper hosting and better developer experience. In a Static JAMstack framework like Gridsome the pages are created at build time, but can easily add dynamic functionality with Vue.js.
        </p>


        <p>
          Imagine a static Shopify store where prices and Qty. gets pulled from an API when users open product page. This gives you extreme page speed, thanks to static site generation, but still be able get real-time prices and qty.
        </p>

        <p>
          This is what we think are really exiting with SSGs / JAMstack and is why we are building Gridsome. <strong>The goal is to be the perfect front-end solution</strong> for any headless CMS or content APIs.
        </p>

        <h4>So whats next...</h4>

        <p>
          We believe the SSG / JAMstack trend is just getting started. When you have first started to make websites this way there is no way back. You will feel almost "dirty" when going back to setup a traditional WordPress / CMS setup. SSGs are the future of website building, and makes website building fun again.
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
  padding: 2rem;

  &__post {
    margin-bottom: 2rem;
  }
}
</style>
