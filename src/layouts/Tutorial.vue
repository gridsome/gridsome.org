<template>
  <Layout :footer="false" class="has-sidebar">
    <div class="flex-x flex-x--60 flex-align-top">
      <div class="sidebar dots-bg">
        <ul>
          <li v-for="{ node } in $static.docs.edges">
            <Link :to="node.path">{{ node.path }}</Link>
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
