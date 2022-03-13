# Deploy to Layer0

[Layer0](https://www.layer0.co) is an all-in-one platform to develop, deploy, preview, experiment on, monitor, and run your headless frontend, focused on EdgeJS, predictive prefetching, and performance monitoring.

## From the terminal

Layer0 allows you to deploy Gridsome applications directly from the terminal.

Install the Layer0 CLI.

```bash
npm install @layer0/cli -g
```

Log in to your Layer0 account via the CLI.

```bash
layer0 login
```

Initialize Layer0:

```bash
layer0 init
```

Update routes.js at the root of your project to the following:
```js
// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'

export default new Router().static('dist', ({ cache }) => {
  cache({
    edge: {
      maxAgeSeconds: 60 * 60 * 60 * 365,
      forcePrivateCaching: true,
    },
    browser: {
      maxAgeSeconds: 0,
      serviceWorkerSeconds: 60 * 60 * 24,
    },
  })
})
```

Build your Gridsome app:

```bash
gridsome build
```

In your project's folder run the deploy command.

```bash
layer0 deploy
```

**Note:**

You do not need to setup any redirect rules for a Gridsome site to work with Layer0. Gridsome generates HTML files for every path on your site so rewrite rules aren't necessary (except for dynamic pages).
