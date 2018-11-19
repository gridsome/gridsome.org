# @gridsome/source-lowdb

> [Lowdb](https://github.com/marak/Faker.js/) source for Gridsome

## Install
- `yarn add @gridsome/source-lowdb`
- `npm install @gridsome/source-lowdb`

## Usage

```js
export default {
  plugins: [
    {
      use: '@gridsome/source-lowdb',
      options: {
          path: "",
          entityName: "posts",
          typeName: 'LowdbPost'
      }
    }
  ]
}
```