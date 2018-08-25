<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="flex gap-60 flex-align-top">
      <div class="sidebar wide dots-bg">
        
        <input type="search" placeholder="Search plugins..." />
        
        <ul>
          <li v-for="{ node } in $static.docs.edges">
            <Link :to="node.path">
              {{ node.title[0] ? node.title[0].value : node.path }}
            </Link>
            <ul>
              <li v-for="heading in node.headings">
                <Link :to="`${node.path}${heading.anchor}`">
                  {{ heading.value }}
                </Link>
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
