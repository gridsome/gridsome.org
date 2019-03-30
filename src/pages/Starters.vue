<template>
  <Layout primary-bg="true" class="starters">
    <Section dark="true" dots="true" class="starters-header">
      <h1 class="text-center">Gridsome Starters</h1>

      <nav class="starters-nav flex flex--center gap-15">
        <a>All</a>
        <a>Markdown</a>
        <a>Contentful</a>
        <a>WordPress</a>
        <a>Drupal</a>
        <a>CosmicJs</a>
      </nav>
    </Section>
    <Section>

      <div class="default-starters">
        <div class="default-starters__title flex gap-15">
          <h2>Default Starters</h2>
          <p>Barebone starters with minimal boilerplate</p>
        </div>

        <div class="grid-cols grid-cols--4">
          <Card class="starter" v-for="{ node } in $page.defaultStarters.edges" :key="node.id" :image="node.screenshot">
            <h4 class="starter__title">{{ node.title }} </h4>
            <p v-if="node.description" class="starter__desc"> {{ node.description }} </p>
            <div class="starter__footer">
              <div class="starter__actions flex gap-15">
                <a v-if="node.gitUrl" :href="node.gitUrl" aria-label="github repo" target="_blank" rel="noopener">
                  <git-logo />
                </a>
                <a v-if="node.preview" :href="node.preview" aria-label="live preview" target="_blank" rel="noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </a>
                <div>
                  <g-link :to="node.author.path" :aria-label="node.author.title">
                    By {{ node.author.title }}
                  </g-link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <h2 class="center">Latest Starters</h2>

      <div class="grid-cols grid-cols--4">
        <Card class="starter" v-for="{ node } in $page.starters.edges" :key="node.id" :image="node.screenshot">
          <h4 class="starter__title">{{ node.title }} </h4>
          <p v-if="node.description" class="starter__desc"> {{ node.description }} </p>
          <div class="starter__footer">
            <div class="starter__actions flex gap-15">
              <a v-if="node.gitUrl" :href="node.gitUrl" aria-label="github repo" target="_blank" rel="noopener">
                <git-logo />
              </a>
              <a v-if="node.preview" :href="node.preview" aria-label="live preview" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </a>
              <div>
                <g-link :to="node.author.path" :aria-label="node.author.title">
                  By {{ node.author.title }}
                </g-link>
              </div>
            </div>

            <div class="starters__actions-right">
              WP
            </div>
          </div>
        </Card>
      </div>
    </Section>
  </Layout>
</template>

<page-query>
query Starters {
  defaultStarters: allStarter (order: ASC, perPage: 4) {
    edges {
      node {
        id
        title
        description
        preview
        gitUrl
        author {
          title
          path
        }
        path
        screenshot (width: 560, height: 664)
      }
    }
  },
  starters: allStarter (order: ASC, skip: 4) {
    edges {
      node {
        id
        title
        description
        preview
        gitUrl
        author {
          title
          path
        }
        path
        screenshot (width: 560, height: 664)
      }
    }
  }
}
</page-query>

<script>
import IconStarters from '@/assets/images/icon-starters.svg'
import GitLogo from '@/assets/images/github-logo.svg'

export default {
  components: {
    IconStarters,
    GitLogo
  },
}
</script>

<style lang="scss">
.starters {
  h2 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
}

.default-starters {
  margin-bottom: 2rem;

  &__title {
    margin-bottom: 1rem;
    h2 { margin-bottom: 0; }
    p { opacity: .8; }
  }
}

.starter {
  overflow: hidden;

  .card__inner {
    padding: 1rem;
  }

  &:hover {
    .card__image img {

    }
  }

  &__title {
    font-size: .9rem;
    font-weight: 500;
  }

  &__desc {
    font-size: .85rem;
    margin-bottom: .5rem;
    opacity: .8;
  }

  &__footer {
    display: flex;
    background-color: #FFF;
    align-items: center;
    justify-content: space-between;
    font-size: .85rem;
  }

  &__actions {
    a:not(:hover) {
      opacity: .4;
      color: currentColor;
    }
  }

  &:hover {
    .starter__footer {
      transform: translateY(0);
    }
  }
}
</style>


