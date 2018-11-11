# Gridsome CLI

A command line tool for creating new Gridsome projects. Install Gridsome CLI
globally with `npm install --global @gridsome/cli`.

## create

Usage `gridsome create {name} {starter}`

- **name** - directory name to create the project in
- **starter** - optional starter kit name

| Official starter kits |                                         |
| --------------------- | --------------------------------------- |
| Default               | `gridsome create my-website`            |
| WordPress             | `gridsome create my-blog wordpress`     |

[Read more about starter kits](/docs/starters)

## develop

Usage `gridsome develop`

Run this command inside the project directory to start a local development server.
The server will start at `http://localhost:8080/` with hot-reloading etc.

## explore

Usage `gridsome explore`

Run this command to start [GraphQL Playground](https://github.com/prisma/graphql-playground)
and explore your schema or data. Open your browser and go to `http://localhost:8080/___explore`
to start exploring.

## build

Usage `gridsome build`

This command will generate a static site inside a `dist` directory in your project.
