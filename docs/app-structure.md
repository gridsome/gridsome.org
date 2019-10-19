# App structure

Here is a overview of the App structure of a Gridsome project. With Gridsome every website is an "App" (Single Page App / Progressive Web App).

A basic app structure looks like this:

![App layout](./images/app-layout.png)


## index.html

This is the file that is used to generate all files.

Gridsome adds `index.html` automatically, but you can override it by adding a `index.html` file in `src` folder with this content:

```html
<!DOCTYPE html>
<html ${htmlAttrs}>
  <head>
    ${head}
  </head>
  <body ${bodyAttrs}>
    ${app}
    ${scripts}
  </body>
</html>
```

*Note: you must restart `gridsome develop` after adding a custom `index.html` file.*

## main.js

This file is the place to import global CSS, fonts, Vue plugins, components and directives, etc. The file also has an export function that has access to the **Client API**.

[Read more about using the Client API in main.js](/docs/client-api/)

## App.vue

`App.vue` file is the main component that wraps all your pages and templates. Gridsome adds `App.vue` automatically, but you can override it by adding a `App.vue` file in `src` folder.

Overriding it is useful if you want to have a layout that is shared across all your pages (Like Header & Footer), or if you want to have a `<transition>` component around the `<router-view>`.

Here is the default `App.vue` component:


```html
<template>
  <router-view />
</template>
```

<Info>

`<router-view>` is a component that is used for the SPA navigation. `<g-link>` replaces the view without a page refresh. This also means you can have transitions between views.

</Info>

*Note: you must restart `gridsome develop` after adding a custom `App.vue` file.*