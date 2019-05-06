<template>
  <form
    :id="id"
    class="header-search"
  >
    <input
      :id="`${id}-input`"
      class="header-search__input"
      placeholder="Search docs..."
      type="search"
    >
  </form>
</template>

<script>
export default {
  props: {
    id: { type: String, default: 'search' }
  },

  mounted() {
    import('docsearch.js').then(({ default: docsearch }) => {
      docsearch({
        indexName: 'gridsome',
        inputSelector: `#${this.id}-input`,
        apiKey: 'a7400a3a94b256c5283cb05efb860fc1',
        debug: process.env.NODE_ENV === 'development'
      })
    })
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
    max-width: 180px;
    transition: all .6s;
    border:0;
    background-color: #f4f7f7;
    border-radius: 99px;

    &:focus {
      background-color: #f7fbfb;
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
