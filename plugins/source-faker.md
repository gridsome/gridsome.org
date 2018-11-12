# @gridsome/source-faker

> [Faker.js](https://github.com/marak/Faker.js/) source for Gridsome

## Install
- `yarn add @gridsome/source-faker`
- `npm install @gridsome/source-faker`

## Usage

```js
// gridsome.config.js

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-faker',
      options: {
        numNodes: 100
      }
    }
  ]
}
```
