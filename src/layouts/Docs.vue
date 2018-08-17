<template>
  <Layout>
    <div class="container flex-x flex-x--60 flex-align-top">
    <ul>
      <li v-for="{ node } in $static.docs.edges">
        <Link :to="node.path">{{ node.path }}</Link>
      </li>
    </ul>
      <div class="container-sm">
        <slot />
      </div>
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
