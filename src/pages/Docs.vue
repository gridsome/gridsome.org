<template>
  <DocsLayout>
    <h1>Getting started with Gridsome</h1>
    <p>Gridsome is a framework for building blazing-fast websites with Vue.js and GraphQL. This guide will help you get quickly up and running with your first Gridsome site.</p>
    <p>You don't need to know Vue.js to get started with Gridsome, but it's  recommended to start with the <a>Gridsome Tutorial</a> if you don't.</p>
    

    <h3>1. Install Gridsome CLI tool</h3>
    <p><code>npm install --global <b>gridsome-cli</b></code></p>
    <h3>2. Create a Gridsome project</h3>
    <ol>
      <li><code>gridsome <b>create</b> my-gridsome-site</code> to create a new project </li>
      <li><code>cd my-gridsome-site</code> to open folder</li>
      <li><code>gridsome <b>develop</b></code> to start local dev server at <code><b>http://localhost:8080</b></code></li>
      <li>Happy coding 🎉🙌</li>
    </ol>

    <h3>3. Next steps...</h3>
    <p>Learn about the <strong>core concepts</strong> of building Gridsome sites</p>
    
    <div class="grid-cols container--push grid-cols--2 grid-cols--gap-small">
      
      <g-link>
        <Card> 
          <h4>Introduction</h4>
          <p>How Gridsome works and why you should use it for your websites</p>
        </Card>
      </g-link>
      
      <g-link>
        <Card> 
          <h4>Pages, layouts & templates</h4>
          <p>Learn how to add pages and layouts to Gridsome</p>
        </Card>
      </g-link>
      
      <g-link>
        <Card>  
          <h4>Vue Components</h4>
          <p>Learn the concept of Vue and its Single File Components</p>
        </Card>
      </g-link>

      <g-link>  
        <Card> 
          <h4>Data Sources (GraphQL)</h4>
          <p>How to add source plugins and get data with GraphQL</p>
        </Card>
      </g-link>

      <g-link>  
        <Card>  
          <h4>Images & Links</h4>
          <p>Learn how to use the built-in Image & link components</p>
        </Card>
      </g-link>
      
      <g-link>  
        <Card>  
          <h4>Generate & Deploy</h4>
          <p>Learn how to generate, deploy and host your website</p>
        </Card>
      </g-link>
    </div>
  </DocsLayout>
</template>

<script>
import DocsLayout from '@/layouts/Docs'
import Card from '@/components/Card'

export default {
  components: {
    DocsLayout,
    Card
  }
}
</script>
