<template>
  <Card class="starter" :image="node.screenshot">
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
        <g-link :to="node.author.path" :aria-label="node.author.title">
          By {{ node.author.title }}
        </g-link>
      </div>
      <div class="starter__platform">
        <g-image v-if="node.platforms" :src="node.platforms.logo" />
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: 'node'
}
</script>

<style lang="scss">
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

  &__platform {
    img {
      width: 25px;
      max-height: 25px;
      margin:0;
    }
  }

  &:hover {
    .starter__footer {
      transform: translateY(0);
    }
  }
}
</style>
</style>