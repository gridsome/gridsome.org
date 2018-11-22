#  The GraphQL data layer

Gridsome lets you connect to any data source by using **Source plugins**. This is the core functionality of Gridsome. All data coming from sources are pulled into a **unified GraphQL layer** that any Vue components can access.

![Git workflow](./images/graphql.png)

> **The GraphQL data layer is only used in development and NOT in production. The static site generator uses the data layer to generate the routes. There is no connection to the data layer after the site has been built.**


### Transformer plugins
**Transformer plugins** is used to transform the content (Nodes) coming from the data sources. For example, for Filesystem source we have a Remark plugin that adds extra functionality to Markdown files.