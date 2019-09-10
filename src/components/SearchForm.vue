<template>
  <form
    :id="id"
    class="header-search"
  >
    <label>
      <input
        ref="input"
        :id="`${id}-input`"
        class="header-search__input"
        placeholder="Search docs..."
        title="Search docs"
        type="search"
        @focus="onFocus"
      />
    </label>
  </form>
</template>

<script>
export default {
  props: {
    id: { type: String, default: 'search' }
  },

  data () {
    return {
      isLoaded: false
    }
  },

  methods: {
    onFocus () {
      if (this.isLoaded) return

      import('docsearch.js').then(({ default: docsearch }) => {
        docsearch({
          indexName: 'gridsome',
          inputSelector: `#${this.id}-input`,
          apiKey: 'a7400a3a94b256c5283cb05efb860fc1',
          debug: process.env.NODE_ENV === 'development'
        })

        this.isLoaded = true

        this.$nextTick(() => this.$refs.input.focus())
      })
    }
  }
}
</script>

<style lang="scss">
@import '~docsearch.js/dist/cdn/docsearch.min.css';

.header-search {
  display: inline-block;
  margin-bottom: 0;
  font-size: 0.9rem;

  & &__input {
    max-width: 160px;
    &:not(:focus) {
      border-color: transparent;
    }
  }
}

@media screen and (max-width: 550px) {
  .header-search__input {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .header-search {
    margin-left: auto !important;
    font-size: 0.9rem;
  }
}

.algolia-autocomplete .algolia-docsearch-suggestion--wrapper {
  padding-top: 0;
}
</style>
