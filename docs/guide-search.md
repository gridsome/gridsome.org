# Add search to Gridsome

## Using Algolia

Currently [Algolia](https://www.algolia.com) offers up to 10,000 search requests for free, which should be enough for any site with low traffic - especially if search isn't used as often.

### Setup

1. Create a free Algolia account.
2. Install [gridsome-plugin-algolia](https://gridsome.org/plugins/gridsome-plugin-algolia):

```sh
# NPM
npm install --save gridsome-plugin-algolia

# Yarn
yarn add gridsome-plugin-algolia
```

3. Follow the setup instructions on the plugin page for setting up the Algolia indexing process.
4. Create the UI using `algoliasearch` and `vue-instantsearch`:

```sh
# NPM
npm install --save algoliasearch vue-instantsearch

#Yarn
yarn add algoliasearch vue-instantsearch
```

### Creating the UI

Create a Search component that you can include anywhere in your site:

```html
<template>
  <ClientOnly>
    <ais-instant-search
      :search-client="searchClient"
      index-name="posts"
    >
      <ais-configure
        :hits-per-page.camel="100"
        :distinct="true"
      />
      <ais-search-box placeholder="Search" :show-loading-indicator="true" ref="search"></ais-search-box>
      <ais-hits>
        <div class="results" slot-scope="{ items }" @click="toggle(false)">
          <template v-for="item in items">
            <g-link :to="item.path" class="card">
              <g-image :src="item.image" width="200"></g-image>
              <p>{{item.title}}</p>
            </g-link>
          </template>
          <ais-pagination />
        </div>
      </ais-hits>
      <ais-powered-by />
    </ais-instant-search>
  </ClientOnly>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'

function onCatch(err) {
  console.warn(err)
}

export default {
  components: {
    AisInstantSearch: () =>
      import ('vue-instantsearch')
      .then(a => a.AisInstantSearch)
      .catch(onCatch),
    AisConfigure: () =>
      import ('vue-instantsearch')
      .then(a => a.AisConfigure)
      .catch(onCatch),
    AisSearchBox: () =>
      import ('vue-instantsearch')
      .then(a => a.AisSearchBox)
      .catch(onCatch),
    AisHits: () =>
      import ('vue-instantsearch')
      .then(a => a.AisHits)
      .catch(onCatch),
    AisPagination: () =>
      import ('vue-instantsearch')
      .then(a => a.AisPagination)
      .catch(onCatch),
    AisPoweredBy: () =>
      import ('vue-instantsearch')
      .then(a => a.AisPoweredBy)
      .catch(onCatch)
  }
}
</script>

<style>
.results {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
}

.card {
  min-width: 200px;
  max-width: 300px;
  flex: 1;
  text-align: center;
  padding: 10px;
}

.card img {
  width: 100%;
}
</style>
```

### Using the Search Component

When including the search component on your page, use [LazyHydrate](https://github.com/maoberlehner/vue-lazy-hydration) to only import it when needed. eg.

```html
<template>
  <div>
    <h1>Search</h1>
    <LazyHydrate on-interaction>
      <Search />
    </LazyHydrate>
  </div>
</template>
<script>
export default {
  components: {
    Search: () import('~/components/Search.vue')
  }
}
</script>
```
