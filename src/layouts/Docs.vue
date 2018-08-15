<template>
  <Layout>
    <ul>
      <li v-for="{ node } in $static.docs.edges">
        <Link :to="node.path">{{ node.path }}</Link>
      </li>
    </ul>
    <slot />
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
