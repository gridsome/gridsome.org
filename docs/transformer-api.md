# Transformer API

Transformers are used by the source plugins to parse content. They are automatically used as long as they are installed and found in `package.json`.

## Mime types

### `transformer.mimeTypes()`

A transformer must have a static `mimeTypes` method which returns an array of [mime types](http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types) the transformer should be able to parse.

## Parse content

### `transformer.parse(source)`

A transformer must also implement a `parse` method that will be excecuted be source plugins to parse content. The method must return a node.

## Add GraphQL fields

### `transformer.extendNodeType()`

Transformers can also extend nodes in the GraphQL schema with additional fields by implementing a `extendNodeType` method. The fields will only be added to nodes it has transformed.

## Example

```js
class Transformer {
  static mimeTypes () {
    return ['application/json']
  }

  parse (source) {
    const { title, ...fields } = JSON.parse(source)

    return {
      title,
      fields
    }
  }

  extendNodeType ({ graphql }) {
    return {
      // custom GraphQL fields for transformed node
    }
  }
}

module.exports = Transformer
```
