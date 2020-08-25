# Dev tools

Tools for easier Gridsome development

## ESLint plugin

https://www.npmjs.com/package/eslint-plugin-gridsome

## Vetur

[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) is Vue tooling for VS Code.  
Vetur works perfect with Gridsome.

### GraphQL syntax for `<page-query>` and `<static-query>`

Detail is [here](https://github.com/vuejs/vetur/issues/975#issuecomment-461197031)  

1. Install [GraphQL](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)
2. Add this item in `settings.json`
```json
{
  ... ,
  "vetur.grammar.customBlocks": {
    "page-query": "graphql",
    "static-query": "graphql"
  },
  ...
}
```

3. Run command `Vetur: Generate Grammar`

### Autocompletion

Vetur has [gridsome-helper-json](https://www.npmjs.com/package/gridsome-helper-json) since version 0.17.0
helper-json can autocomplete tag and attribute.
gridsome-helper-json support `<g-image>`, `<g-link>` and `<Pager>`.

![autocompletion-tag](./images/autocompletion-tag.png)

![autocompletion-attribute](./images/autocompletion-attribute.png)
