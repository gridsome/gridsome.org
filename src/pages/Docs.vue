<template>
  <DocsLayout>
    <h1>Getting started with Gridsome</h1>
    <p>Gridsome is a framework for building blazing-fast websites with Vue.js and GraphQL. This guide will help you get quickly up and running with your first Gridsome site.</p>
    <h3>Install Gridsome CLI tool</h3>
    <code>npm install --global gridsome-cli</code><br>
    <p><small><i>If you're not sure where to put this we recommend you follow the Tutorial.</i></small></p>
    <h3>Start use the CLI</h3>
    <ol>
      <li>Create a new site: <code>gridsome create my-gridsome-site</code> </li>
      <li><code>cd my-gridsome-site</code></li>
      <li><code>gridsome develop</code> to start local dev server at <code>localhost:8080</code></li>
      <li>Happy coding 🙌</li>
    </ol>
    <h3>Next steps...</h3>
    <p>Learn about the core concepts of building Gridsome sites</p>
    <div class="grid-cols grid-cols--2 grid-cols--gap-small">
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
