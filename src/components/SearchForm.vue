<template>
  <form :id="id" class="search">
    <input :id="`${id}-input`" class="search__input">
  </form>
</template>

<script>
export default {
  props: {
    id: { type: String, default: 'search' }
  },

  mounted () {
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
@import "~docsearch.js/dist/cdn/docsearch.min.css";

.search {
  display: inline-block;
  margin-bottom: 0;
}
</style>
