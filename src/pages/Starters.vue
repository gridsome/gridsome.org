<template>
  <GalleryLayout>
   <Section>

      <h1 class="text-center container-sm">Gridsome Starters</h1>
      <p class="text-center lead container-sm">Get started quickly with premade Gridsome projects</p>

      <div class="grid-cols grid-cols--4">
        <Card class="starter" v-for="{ node } in $page.starters.edges" :key="node.id" :image="node.screenshot">
          <div class="starter__author" v-if="node.author && node.author.avatar">
            <g-link :to="node.author.path" :aria-label="node.author.title">
              <g-image :title="node.author.title" class="starter__author-image" :src="node.author.avatar" />
            </g-link>
          </div>
          <h4 class="starter__title">{{ node.title }} </h4>
          <p class="starter__desc"> {{ node.description }} </p>
          <div class="starter__footer">
            <div class="starter__actions flex gap-15">
              <a href="#" aria-label="github repo">
                <git-logo />
              </a>
              <a href="#" aria-label="live preview">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </a>
            </div>
            <div class="starter__install flex gap-15">
              <button class="button button--xsmall">Install</button>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  </GalleryLayout>
</template>

<page-query>
query Starters {
  starters: allStarter {
    edges {
      node {
        id
        title
        description
        preview
        author {
          title
          path
          avatar (width: 30)
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
.starters-header {
  border-bottom: 1px solid var(--border-color);
  background-color: #FFF;
}

.starter {
  overflow: hidden;

  &__title {
    font-size: .9rem;
    font-weight: 500;
    margin-bottom: .3rem!important;
  }
  &__desc {
    font-size: .85rem;
    margin-bottom: .5rem;
    min-height: 49px;
    opacity: .8;
  }

  &__footer {
    display: flex;
    margin-right: -8px;
    margin-bottom: -8px;
    background-color: #FFF;
    background: linear-gradient(360deg, #FFFFFF 39.76%, rgba(255, 255, 255, 0) 100%);
    align-items: center;
    justify-content: space-between;
    font-size: .85rem;
  }

  &__actions {
    a:not(:hover) {
      opacity: .7;
    }
  }

  &:hover {
    .starter__footer {
      transform: translateY(0);
    }
  }

  &__author {
    float: right;
    margin-top: -9px;
    margin-right: -9px;
    margin-left: .5rem;
    margin-bottom: .5rem;
  }

  &__author-image {
    margin-bottom: 0;
    border-radius: 99px;
  }
}
</style>


