# @gridsome/transformer-remark

> Markdown 转换器 Markdown transformer for Gridsome

## Install 安装
- `yarn add @gridsome/transformer-remark`
- `npm install @gridsome/transformer-remark`

## Usage 使用

```js
module.exports = {
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    }
  ]
}
```