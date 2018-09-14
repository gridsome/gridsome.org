# Directory structure

A simpe blog made in Gridsome would have a directory structure like this:

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

Install Vue plugins etc. in this file if you want to.

#### Layouts directory

Create components in this directory if you want to share one or more
layouts.

#### Pages directory

Components in this directory becomes the pages for your website.
Each page will get its pathname based on the location of its `.vue`
file. `src/pages/Index.vue` will become the homepage for your website,
while `src/pages/AboutUs.vue` will be `example.com/about-us`.

#### Templates directory

If you are importing a source into your project like posts from a
WordPress blog. Then each post would look for a component in this
directory for its template. The name of the component must match the
node type in your GraphQL schema.

[Read more about layouts, pages and templates](/docs/layouts-pages-templates)
