# Add dynamic data to Gridsome
Gridsome uses the GraphQL data layer only in development and during the build process. It's not possible to access the internal GraphQL in production or from client.

To add dynamic data from external source you need a plugni like **vue-apollo** (for GraphQL) or **axios** (for rest-apis). 