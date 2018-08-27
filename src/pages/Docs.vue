<template>
  <DocsLayout>
    <h1>Getting started with Gridsome</h1>
    <p>Gridsome is a framework for building blazing-fast websites with Vue.js and GraphQL. This guide will help you get quickly up and running with your first Gridsome site.</p>
    <p>You don't need to know Vue.js to get started with Gridsome, but it's  recommended to start with the <a>Tutorial</a> if you don't.</p>
    

    <h3>1. Install Gridsome CLI tool</h3>
    <p><code>npm install --global <b>gridsome-cli</b></code><br></p>

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
      <div> 
        <h4 style="margin-bottom: 10px;">How Gridsome works</h4>
        <p>Detailed explenation of how Gridsome works</p>
      </div>
      <div> 
        <h4 style="margin-bottom: 10px;">Pages, layouts & templates</h4>
        <p>Learn how to add pages and layouts to Gridsome</p>
      </div>
      <div> 
        <h4 style="margin-bottom: 10px;">Vue Components</h4>
        <p>Learn the concept of Vue and its Single File Components</p>
      </div>
      <div>
        <h4 style="margin-bottom: 10px;">Data Sources (GraphQL)</h4>
        <p>Learn how to add source plugins and get data with GraphQL</p>
      </div>
      
      <div> 
        <h4 style="margin-bottom: 10px;">Images & Links</h4>
        <p>Learn how to use the built-in Image & link components</p>
      </div>

      <div> 
        <h4 style="margin-bottom: 10px;">Static Site Generation</h4>
        <p>Learn how Gridsome builds and optimize the website</p>
      </div>
  
      <div> 
        <h4 style="margin-bottom: 10px;">Hosting & Deploying</h4>
        <p>Learn how to generate, deploy and host your website</p>
      </div>
    </div>

  </DocsLayout>
</template>

<script>
import DocsLayout from '@/layouts/Docs'

export default {
  components: {
    DocsLayout
  }
}
</script>

<style>
.grid-cols div {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
