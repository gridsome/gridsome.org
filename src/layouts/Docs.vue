<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="flex-x flex-x--60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <input type="search" autofocus="true" placeholder="Search docs..." />

        <ul>
          <li v-for="{ node } in $static.docs.edges">
            <Link :to="node.path">
              {{ node.title[0] ? node.title[0].value : node.path }}
            </Link>
            <div v-for="heading in node.headings">
              {{ heading.value }}
            </div>
          </li>
        </ul>
      </div>
      <Section class="flex-fit" container="md">
        <slot />
      </Section>
    </div>
  </Layout>
</template>

<static-query>
query Docs {
  docs: allDocPage {
    edges {
      node {
        path
        title: headings (depth: h1) { value }
        headings (depth: h2) { value }
      }
    }
  },
}
</static-query>
