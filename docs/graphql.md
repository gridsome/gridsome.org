# The GraphQL layer

Gridsome lets you connect to any data source by using **Source plugins**. This is the core functionality of Gridsome. All data coming from sources are pulled into a unified GraphQL layer that the Vue components can access.

> **The GraphQL data layer is only used in development and not used in production. The static site generator uses the data layer to generate the pages fast. There is no connection to the data layer after the site has been built.**

![Git workflow](./images/graphql.png)

**Transformer plugins** is used to transform the content (Nodes) coming from the data sources. For example, for Filesystem source we have a Remark plugin that adds extra functionality to Markdown files.


## The GraphQL playground
Every Gridsome project has a GraphQL playground they can use to explore and test queries when in development mode. This can usually be opened by going to `http://localhost:8080/___explore`.