# How to create a plugin

Need a plugin that doesn't exist yet?

##### Core plugins

Feel free to create an issue if you have a plugin suggestion that should be maintained in core, like general source plugins or other common functionalities that will fit most use cases. That will also let others join the discussion about how it should be implemented first. Transformers for common file types should also be maintained in the core repository.

##### Plugin library

Any plugins on NPM can be added to plugin library. Add a `gridsome-plugin` keyword in `package.json` to make it available in the [plugin library](/plugins).

## Create a source plugin

Source plugins are responsible for retrieving data from APIs and insert it into the internal database. If you plan on doing exactly that, call your plugin `gridsome-source-*` or `@username/gridsome-source-*` if you publish the plugin with a namespace.

Learn more about the [Data Store API](/docs/data-store-api/)

## Create a general plugin

Other plugins that add functionality should be named `gridsome-plugin-*` or `@username/gridsome-plugin-*`.

Learn more about the [Server API](/docs/server-api/) or [Client API](/docs/client-api/)

## Create a transformer

Transformers don't work like the plugins above, but they are used by the source plugins to parse content. They can also add more fields to the GraphQL schema. Transformers must be named `gridsome-transformer-*` or `@username/gridsome-transformer-*` in order to be found by the source plugins.

Learn more about the [Transformer API](/docs/transformer-api/)

## Plugins for other plugins

Some plugins, like the `@gridsome/transformer-remark`, can have its own plugins. They can be named `gridsome-remark-*` or `@username/gridsome-remark-*`.

## Testing your plugin

1. [Create a new Gridsome project](/docs/#2-create-a-gridsome-project) (if you don't want to test with an existing one)
2. Open a terminal in your plugin project directory
3. `npm link` or `yarn link`
4. Open a terminal in your Gridsome project
5. `npm link my-plugin-name` or `yarn link my-plugin-name`
6. `gridsome develop`

If you are integrating with the [Server API](/docs/server-api/) in your plugin, restarting the development server is necessary. But, if you are only interacting with the [Client API](/docs/client-api/), your plugin should automatically hot-reload in your development server.
