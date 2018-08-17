<template>
  <Layout>
    <div class="container flex-x flex-x--60 flex-align-top">
      <div class="sidebar">
        <ul>
          <li v-for="{ node } in $static.docs.edges">
            <Link :to="node.path">{{ node.path }}</Link>
          </li>
        </ul>
      </div>
      <Section class="flex-fit" container="sm">
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

<style>
  .sidebar {
    padding: 30px;
    width: 300px;
    border-radius: 5px;
  }
</style>
