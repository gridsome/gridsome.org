# Directory structure

A basic Gridsome project would be structured like this:

```sh
.
├── package.json
├── gridsome.config.js
├── gridsome.server.js
├── static/
└── src/
    ├── main.js
    ├── layouts/
    │   └── Default.vue
    ├── pages/
    │   ├── Index.vue
    │   └── Blog.vue
    └── templates/
        └── BlogPost.vue
```

## The root directory

#### package.json

Contains information about which plugins are installed in your project.

#### gridsome.config.js

This file contains configuration and options for installed plugins.

[Read more about project config](/docs/config)

#### gridsome.server.js

This file is optional and is used to hook into various parts of the Gridsome server. The file must export a function which will have access to the API.

[Read more about the Server API](/docs/server-api)

## The `/src` directory

#### Main.js

Import global styles and scripts here. The file also has an export function that has access to the **Client API**. This file is the place to install Vue plugins, register components and directives, etc.

[Read more about using the Client API in main.js](/docs/client-api#using-the-client-api-in-srcmainjs)

#### Layouts directory

Create components in this directory if you want to share one or more
layouts for your pages or templates.

[Read more about layouts](/docs/layouts)

#### Pages directory

All components in this directory become the pages for your website.
Each page will get its path based on the location of its `.vue` file.
`src/pages/Index.vue` will become the homepage for your website,
while `src/pages/AboutUs.vue` will be `example.com/about-us`.

[Read more about pages](/docs/pages)

#### Templates directory

If you are importing an external data source, like posts from a
WordPress blog, into your project then each post would look for a
component in this directory for its template. The name of the
component file must match the node type in your GraphQL schema.

[Read more about templates](/docs/templates)



## The `/static` directory

Files in this directory will be copied directly to `dist` during build. For example, **/static/robots.txt** will be located at https://yoursite.com/robots.txt



## Aliases
In Gridsome you can use the aliases `~` or `@` to link to files inside the `/src` folder. For example, you can import a Vue component by using `import Card from '~/components/Card'`


## Recommendation

#### Assets

Global styles, images, fonts and icons are usually added to a `src/assets` directory.

#### Shared or global components

Components that you want to use in several pages or templates can be stored
in a `src/components` directory.

#### Data files

Data files like `.json` or `.yaml` that you want to import into your components, can be stored in a `src/data` directory.
