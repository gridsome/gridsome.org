# Routing

Gridsome uses [vue-router] (https://router.vuejs.org/) for routing. Most of routing in Gridsome are done automatically, but it's possible to setup custom routing.

Gridsome uses routing in the build process to generate a HTML and a JavaScript file for each route endpoint.


## Page routing

All `.vue` files in the `src/pages` directory will become the pages for your
website. The page URL is generated based on the location and name of the file.
The path will be lowercased and slugified automatically. So if have a file with
the name `AboutUs.vue`, it will get the slug `about-us`. Files named `Index.vue`
are treated like `index.html` files and will not get a slug. As an example:
`src/pages/features/Index.vue` will become `/features` and
`src/pages/features/Awesome.vue` will become `/features/awesome`.


## Data source routing

Data sources adds routing automatically with settings.

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        // path: 'blog/**/*.md',
        // typeName: 'BlogPost',
        route: '/blog/:year/:month/:day/:slug'
      }
    }
  ]
}
```


## Custom routing
TODO