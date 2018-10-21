---
title: Creating Gridsome Source
author: Xing Wenju
date: 2018-10-20
excerpt: "Creating a Gridsome Source for Qraphql Data Layer"
---

#### Core Concept

With **Gridsome** you get a **universal GraphQL layer** for all your connected data sources. It's like a single source of truth for your website data ready to be used in any page or components. Connect to any CMS or APIs like Google Spreadsheet, Airtable, Instagram Feed, local markdown files, etc.

Here is an example on how to query posts from the GraphQL layer in a page:

#### A source must export a class

+ which constructor takes two paremeters: `options`, `{ context, source }`

+ `apply` methods to add `type` and `node` to `source` object

##### addNode methods

```js
addNode(type, node)
updateNode(type, node)
removeNode(type, node)
```

##### Setting options definition

Options are used to parse in `gridsome.config.js` file's plugins field, it
normally takes any params

- `path` will be the path to the `source`

- `route` will be the generated `url route` for your site

- `refs` will be the reference to other graphql node, which have `type` and `key`

```js
const options =  {
  path: undefined,
  route: undefined,
  refs: {},
  index: ['index'],
  typeName: 'FileNode'
}
```

##### Source class definition

- `addType` to source, with `type` and `options` setting as params

- `addNode` to source, with `type` and real `node` with value as params


```js
class CustomSource {
  constructor (options, { context, source }) {
    ...
    this.options = options
    this.context = context
    this.source = source
  }

  async apply() {
    ...
    const { options } = this
    // add the type to the source
    this.source.addType(options.type, {
      route: options.route,
      refs: mapValues(refs, ref => ({
        key: ref.key,
        type: ref.type
      }))
    })
    // Loop source array, for example files
    files.map(file => {
        const node = this.createNode(file)
        // add the node to the source
        // addNode functions read options.type and node schema
        this.source.addNode(options.type, node)
    })
  }

  createNode() {
    ...
  }

 // watcher stuff
}
module.exports = JsonSource
```

#### Implementing `createNode` method

+ A node will be any shape, just like a `qraphql type`

```js
createNode (file) {
    const node = {
        _id: ,
        path: ,
        fields: ,
        refs: {},
        internal: {
            mimeType,
            origin: ,
            content:
        }
    }
    return node
}
```

#### Whats next

In the next couple of months we're going to continue to improve the docs, create tutorials, add more source & transformer plugins and fix bugs.

