# Dev tools

Tools for easier Gridsome development


## ESLint plugin
https://www.npmjs.com/package/eslint-plugin-gridsome

## VSCode syntax
Detail is [here](https://github.com/vuejs/vetur/issues/975#issuecomment-461197031)  

1. Install [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) and [GraphQL](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)
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