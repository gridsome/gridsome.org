<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <input type="search" placeholder="Search docs..." />

        <h3>
          Gettings started
        </h3>
        <p>Install Gridsome CLI</p>
        <p>Starter kits</p>

        <h3>
          Core concepts
        </h3>
        <p>How Gridsome works</p>
        <p>Pages, layouts & templates</p>
        <p>Vue Components</p>
        <p>Data Sources (GraphQL)</p>
        <p>Images & Links</p>
        <p>Static Site Generation</p>
        <p>Hosting & Deploying</p>

        <h3> Guides </h3>
        <p>Install plugins</p>
        <p>Add Critical CSS</p>
        <p>Add custom fonts</p>
        <p>How to add pagination</p>
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

        <h3>Deploy</h3>
        
        <p>Netlify</p>
        <p>Zeit</p>

        <ul>
          <li v-for="{ node } in $static.docs.edges">
            <g-link :to="node.path">
              {{ node.title[0] ? node.title[0].value : node.path }}
            </g-link>
            <ul>
              <li v-for="heading in node.headings">
                <g-link :to="`${node.path}${heading.anchor}`">
                  {{ heading.value }}
                </g-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Section class="flex-fit" container="md">
        <slot />
      </Section>
    </div>
  </Layout>
</template>

<style>
.sidebar h3 {
  font-size: 16px;
  margin: 20px 0 15px;
}
.sidebar p {
  margin-bottom: 5px;
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
