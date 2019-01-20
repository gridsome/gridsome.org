# @gridsome/remark-prismjs

> Syntax highlighter for markdown code blocks

## Install
- `yarn add @gridsome/remark-prismjs`
- `npm install @gridsome/remark-prismjs`

## Usage

Add `prismjs` CSS File to `main.js`. You can also choose Theme according to [Prism.js Documentation](https://prismjs.com/)

```js
import "prismjs/themes/prism.css"
```

Add syntax highlighter to a single markdown source:

```js
// gridsome.config.js

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
  ]
}
```

Add syntax highlighter to all markdown sources:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {}
    }
  ],

  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
```
