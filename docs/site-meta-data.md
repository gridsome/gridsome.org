# Add global meta data

Gridsome lets you add global meta data with the [Data store API](/docs/data-store-api). To use the API you need a `gridsome.server.js` file in the root folder of your Gridsome project.  Meta data are static and can't be updated or changed from client.

> Adding meta data is great if you have data you want to be globally accessible, but don't need to be in any GraphQL collection.

Here is an example where we create a custom meta for site title.

```js
module.exports = function (api) {
  api.loadSource(async store => {
    store.addMetaData('siteTitle', 'My Gridsome Site')
  })
}
```
The meta data will be available inside the **metaData** GraphQL collection. Meta data can be [fetched](/docs/fetching-data) like any other data.

Here is an example on how it could be used in a Vue Component:

```html
<template>
  <h1 v-html="$static.metaData.siteTitle" />
</template>

<static-query>
query {
  metaData {
    siteTitle
  }
}
</static-query>
```