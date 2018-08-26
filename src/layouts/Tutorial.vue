<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        <ul>
          <li v-for="{ node } in $static.docs.edges">
            <g-link :to="node.path">{{ node.path }}</g-link>
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
      }
    }
  },
}
</static-query>
