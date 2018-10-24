# The GraphQL data layer

Gridsome lets you connect to any data source by using **Data Source plugins**.  All data coming from data sources are pulled into a **GraphQL layer** that the Vue components can access.

> **!! The GraphQL layer is only used in development and not used in production (Live sites). It only uses the GraphQL data for static site generation. There is no GraphQL querying happening in production. All content are static.**

### Why use a data layer?

Gridsome uses the data layer to get all your dat

![Git workflow](./images/graphql.png)

**Transformer plugins** is used to transform the content (Nodes) coming from the data sources. For example, for Filesystem source we have a Remark plugin that adds extra functionality to Markdown files.




