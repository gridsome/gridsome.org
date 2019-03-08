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
            <div>
              Git
              Preview
            </div>
            <div>
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

export default {
  components: {
    IconStarters
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


