# @gridsome/source-lowdb

> Lowdb source for Gridsome

## Install
## Usage

```js
export default {
  plugins: [
    {
      use: path.resolve('src/plugins/source-lowdb'),
      options: {
          path: "",
          entityName: "posts",
          typeName: 'LowdbPost'
      }
    }
  ]
}
```
