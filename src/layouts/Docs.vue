<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <input type="search" placeholder="Search docs..." />
        <h3 style="margin-top: 5px">
          Getting started
        </h3>
        <p>Install Gridsome CLI</p>
        <p>Starter kits</p>

        <h3>
          Core concepts
        </h3>
        <p>Introduction</p>
        <p>Pages, layouts & templates</p>
        <p>Vue Components</p>
        <p>Data Sources (GraphQL)</p>
        <p>Images & Links</p>
        <p>Generate & Deploy</p>
        <p>Developer Tools</p>

        <h3> Guides </h3>
        <p>Install plugins</p>
        <p>Add custom CSS</p>
        <p>Add critical CSS</p>
        <p>Add custom fonts</p>
        <p>Add pagination to Source</p>
        <p>Add a Source template</p>

        <h3>API Reference</h3>
        <p>CLI</p>
        <p>Config</p>
        <p>Head</p>
        <p>Pages</p>
        <p>Plugins</p>
        <p>Components</p>

        <h3>Global Components</h3>
        <p>Link</p>
        <p>Image</p>
        <p>Pagination</p>
        <p>Slots</p>
        <p>Transition</p>

        <h3>Deploy</h3>
        
        <p>Netlify</p>
        <p>Zeit Now</p>
        <p>Amazon S3</p>
        <p>GitHub Pages</p>
        <p>GitLab Pages</p>

      </div>
      <Section class="flex-fit" container="md">
        <slot />
      </Section>
    </div>
  </Layout>
</template>

<style>
  .sidebar h3 {
    font-size: .75rem;
    color: #7a9a8a;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 35px 0 15px;
  }
  .sidebar p {
    margin-bottom: 5px;
    font-size: .9rem;
  }
</style>

<static-query>
query Docs {
  docs: allDocPage {
    edges {
      node {
        path
        title: headings (depth: h1) {
          value
        }
        headings (depth: h2) {
          value
          anchor
        }
      }
    }
  },
}
</static-query>
