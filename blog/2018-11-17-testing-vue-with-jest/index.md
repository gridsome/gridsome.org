---
title: testing vue with jest
author: Xing Wenju
date: 2018-11-17
excerpt: "Unit testing vue with jest"
---
# Document Title

## The configuration file `jest.config.js`

```js
const random = require("lodash.random");
process.env.MOCK_API_PORT = process.env.MOCK_API_PORT || random(9000, 9999)
module.exports = {
  globals: {
    "vue-jest": {
      // Disable CSS compilation until it's more stable
      experimentalCSSCompile: false,
    },
    window: true,
    app: true,
  },
  setupFiles: ["<rootDir>/tests/unit/setup.ts", "<rootDir>/tests/unit/store-setup.ts"],
  // globalSetup: "<rootDir>/tests/unit/global-setup.ts",
  // globalTeardown: "<rootDir>/tests/unit/global-teardown.ts",
  setupTestFrameworkScriptFile: "<rootDir>/tests/unit/matchers.ts",
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.spec.(js|jsx|ts|tsx)|**/**/*.spec.(js|jsx|ts|tsx)|**/**/*.unit.(js|jsx|ts|tsx)",
  ],
  testURL:
    process.env.API_BASE_URL ||
    `http://localhost/` ||
    `http://localhost:${process.env.MOCK_API_PORT}`,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,ts,vue}", "!**/node_modules/**", "!src/stories/*.{js,ts}"],
  coverageReporters: ["html", "text-summary"],
};
```


Let's go through one by one step

1. setupFiles: Setting the initial test environment by importing modules and
   defining methods and properties
2. setupTestFrameworkScriptFile: customize your jest test matchers like `toBe`
   methods
3. transform: determine which `transformer` to transform `vue` files to
   javascript
4. moduleNameMapper: like `alias` in `webpack`
5. testMatch: determine test files by names with regex

## Run test

With `vue-cli-service` to run `vue-cli-service test:unit`

Also can use `--watch` to monitor file changes to auto reload test workflow
