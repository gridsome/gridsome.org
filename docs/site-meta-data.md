# Global metadata

Gridsome lets you add global metadata with the [Data store API](/docs/data-store-api). To use the API you need a `gridsome.server.js` file in the root folder of your Gridsome project.  Metadata are static and can't be updated or changed from client.

> Adding metadata is great if you have data you want to be globally accessible, but don't need to be in any GraphQL collection.

Here is an example

```js
module.exports = function (api) {
  api.loadSource(async store => {
    store.addMetaData('textExample', 'This is a global text')
  })
}
```
The metadata will be available inside the **metaData** GraphQL collection. Metadata can be [fetched](/docs/fetching-data) like any other data.

Here is an example on how it could be used in a Vue Component:

```html
<template>
  <h1 v-html="$static.metaData.textExample" />
</template>

<static-query>
query {
  metaData {
    textExample
  }
}
</static-query>
```
