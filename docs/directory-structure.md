# Directory structure

A basic Gridsome project would be structured like this:

```sh
.
├── package.json
├── gridsome.config.js
└── src
    ├── main.js
    ├── layouts
    │   └── Default.vue
    ├── pages
    │   ├── Index.vue
    │   └── Blog.vue
    └── templates
        └── BlogPost.vue
```

## The root directory

#### package.json

Contains information about which plugins is installed in your project.

#### gridsome.config.js

This file contains configuration and options for installed plugins.

[Read more about project config](/docs/config)

## The src directory

#### main.js

Install Vue plugins etc. in this file if you want to. This file is
also the place to register layouts or components that you want to be
globally available.

#### Layouts directory

Create components in this directory if you want to share one or more
layouts for your pages or templates.

#### Pages directory

All components in this directory becomes the pages for your website.
Each page will get its path based on the location of its `.vue` file.
`src/pages/Index.vue` will become the homepage for your website,
while `src/pages/AboutUs.vue` will be `example.com/about-us`.

#### Templates directory

If you are importing an external data source, like posts from a
WordPress blog, into your project. Then each post would look for a
component in this directory for its template. The name of the
component file must match the node type in your GraphQL schema.

[Read more about layouts, pages and templates](/docs/layouts-pages-templates)

## Recommendation

#### Shared or global components

Components that you want to use in several pages or templates can be
in a `src/components` directory.

#### Data files

Data files like `.json` or `.yaml` can be stored in a `src/data`
directory.
