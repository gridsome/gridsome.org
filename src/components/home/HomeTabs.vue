<template>
  <Section dots="true">
    <div class="homepage-features container post">
      
      <div class="grid-cols grid-cols--2 mb">
        <div style="order:2">
          <h3>All your data in one place</h3>
          <p>Gridsome brings all your data into a <strong>unified GraphQL data layer</strong>. The data can be browsed and explored in a simple local interface (GraphQL Playground) and inserted to any Vue Component. </p>

          <ul class="bullet-list">
            <li><Bullet /> Pull data from any CMS, files or data APIs</li>
            <li><Bullet /> Browse data and test queries locally</li>
            <li><Bullet /> Query only the data fields you need</li>
            <li><Bullet /> Built-in pagination support for queries</li>
          </ul>
        </div>
        <div>
          <g-image alt="GraphQL Browser" width="1100" src="~/assets/images/graphql-browser.png" />
        </div>
      </div>


      <div class="grid-cols grid-cols--2 mb">
        <div >
          <h3><vue-logo /> Build with Vue.js</h3>
          <p><a target="_blank" href="https://vuejs.org/">Vue.js</a> is an approachable, fast and lightweight front-end framework.  It's incredibly popular, got a <a target="_blank" href="https://github.com/vuejs/awesome-vue">huge community</a> behind it and is used by major companies.
          Vue.js builds upon classic web technologies meaning that the learning curve for development teams are small.
          </p>

          <ul class="bullet-list">
            <li><Bullet /> <strong> Instant hot-reloading</strong> for incredible developer experience</li>
            <li><Bullet /> <strong> Approachable for anyone.</strong> It's just HTML and CSS</li>
            <li><Bullet /> <strong> Awesome dev community.</strong> Find a library for any use case</li>
            <li><Bullet /> <strong> Ultra lightweight.</strong> Only 20KB min+gzip runtime</li>
          </ul>
        </div>
        <div>
          <div v-html="$static.example.content" />
        </div>
   
      </div>


      <div class="grid-cols grid-cols--2 mb">
        <div style="order:2">
          <h3>A future-ready stack</h3>

          <p><a href="http://jamstack.org" target="_blank">JAMstack</a> is modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup. <strong>No servers. No databases. Only files.</strong> Deploy your entire site to a CDN and forget about it. Traffic or hacking will never break your site.</p>

          <ul class="bullet-list">
            <li><Bullet /> <strong> Blazing fast generating.</strong> Build thousands of pages in seconds</li>
            <li><Bullet /> <strong> Better Performance.</strong> Faster page loading by default</li>
            <li><Bullet /> <strong> Higher Security.</strong> Very few surface areas for attacks</li>
            <li><Bullet /> <strong> Cheaper, Easier Scaling.</strong> Static files are the cheapest to host</li>
          </ul>
        </div>
        <div>
          <g-image alt="Safe deployment" width="1100" src="~/assets/images/static.png" />
        </div>
   
      </div>

    </div>
  </Section>
</template>

<script>
import Bullet from '~/assets/images/bullet.svg'
import VueLogo from '~/assets/images/vue-logo.svg'

export default {
  components: {
    Bullet,
    VueLogo
  },
}

</script>


<static-query>
query Example {
  example (path: "/examples/templates") {
    content
  }
}
</static-query>
