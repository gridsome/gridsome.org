<template>
  <Section dots="true">
    <div class="homepage-features container">
      
      <div class="grid-cols grid-cols--2 mb">
        <div style="order:2">
          <h2>All your data in one place</h2>
          <p>Gridsome brings all your data into a <strong>unified GraphQL interface</strong>. The data can be browsed and explored in a simple interface (GraphQL Playground) and inserted to any Vue Component. </p>

          <ul class="bullet-list">
            <li><Bullet /> Pull data from any CMS or data source.</li>
            <li><Bullet /> Browse data and test queries in a unified interface.</li>
            <li><Bullet /> Query only the data fields you need.</li>
            <li><Bullet /> Built-in pagination support for queries.</li>
          </ul>
        </div>
        <div>
          <g-image width="550" src="~/assets/images/graphql-browser.png" />
        </div>
      </div>


      <div class="grid-cols grid-cols--2 mb">
        <div >
          <h2><vue-logo /> Use Vue.js for templating</h2>
          <p><a target="_blank" href="https://vuejs.org/">Vue.js</a> is an approachable, super fast framework that your whole team will learn quickly. It's incredibly popular, got a <a target="_blank" href="https://github.com/vuejs/awesome-vue">massive community</a> behind it and is in use by <a target="_blank" href="https://www.netguru.co/blog/13-top-companies-that-have-trusted-vue.js-examples-of-applications">big companies.</a></p>

          <ul class="bullet-list">
            <li><Bullet /> <strong> Instant hot-reloading</strong> for incredible developer experience.</li>
            <li><Bullet /> <strong> Sanitize your stack.</strong> Same frontend framework for any project.</li>
            <li><Bullet /> <strong> Approachable for any team member.</strong> It's just HTML and CSS.</li>
            <li><Bullet /> <strong> Awesome developer community</strong>. Find a library for any use case</li>
          </ul>
        </div>
        <div>
          <div v-html="$static.example.content" />
        </div>
   
      </div>


      <div class="grid-cols grid-cols--2 mb">
        <div style="order:2">
          <h2>Static and safe deployment</h2>

          <p><strong>No servers. No databases. Only files.</strong> Nothing beats static, pre-rendered sites when it comes to speed and security. Deploy your entire site to a CDN and forget about it. As long as your CDN is up, your Gridsome site will never go down. <strong>Combine dynamic and static data with the power of Vue.js</strong></p>

          <ul class="bullet-list">
            <li><Bullet /> <strong> Super fast generating.</strong> Build thousands of pages in seconds.</li>
            <li><Bullet /> <strong> Better Performance.</strong> Faster page loading.</li>
            <li><Bullet /> <strong> Higher Security.</strong> Very few surface areas for attacks.</li>
            <li><Bullet /> <strong> Cheaper, Easier Scaling.</strong> Static files are the cheapest to host.</li>

          </ul>
        </div>
        <div>
          <g-image width="550" src="~/assets/images/static.png" />
        </div>
   
      </div>

    </div>

    <p class="home-links text-center">
      <g-link  to="/docs" class="button primary">
        Get started
      </g-link>
    </p>

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
