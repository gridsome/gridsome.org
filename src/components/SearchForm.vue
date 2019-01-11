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
    id: { type: String, default: "search" }
  },

  mounted() {
    import("docsearch.js").then(({ default: docsearch }) => {
      docsearch({
        indexName: "gridsome",
        inputSelector: `#${this.id}-input`,
        apiKey: "a7400a3a94b256c5283cb05efb860fc1",
        debug: process.env.NODE_ENV === "development"
      });
    });
  }
};
</script>

<style lang="scss">
@import "~docsearch.js/dist/cdn/docsearch.min.css";

.header-search {
  display: inline-block;
  margin-bottom: 0;
  margin-right: 0.5rem;
  font-size: 0.9rem;

  & &__input {
    color: #fff;
    border-radius: 99px;
    width: 170px;
    background-color: rgba(0, 0, 0, 0.2);
    border-color: transparent;
    padding: 0.3rem 0.7rem;
    transition: padding 0.2s, width 0.2s, opacity 0.3s, background-color .3s;
    margin-bottom: 0.5px;

    &:focus {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
