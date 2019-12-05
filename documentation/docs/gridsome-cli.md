# Gridsome CLI

A command-line tool for creating new Gridsome projects. Install Gridsome CLI
globally with `npm install --global @gridsome/cli`.

## create

Usage `create <name> [starter]`

- **name** - Directory name to create the project in.
- **starter** - Optional starter kit name.

| Official starter kits |                                         |
| --------------------- | --------------------------------------- |
| Default               | `gridsome create my-website`            |
| WordPress             | `gridsome create my-blog wordpress`     |

[Read more about starter kits](/docs/starters/)

## develop

Usage `gridsome develop`

Run this command inside the project directory to start a local development server.
The server will start at `http://localhost:8080/` with hot-reloading etc.

Available options:

| Option 					| Description |
| ----------------| --------------------------------------- |
| `--port <port>` | use specified port (default: 8080)	|
| `--host <host>` | use specified host (default: 0.0.0.0)	|


## build

Usage `gridsome build`

This command will generate a static site inside a `dist` directory in your project.


## explore

Usage `gridsome explore`

Run this command to start [GraphQL Playground](https://github.com/prisma/graphql-playground)
and explore your schema or data. Open your browser and go to `http://localhost:8080/___explore`
to start exploring.

## info

Usage `gridsome info`

This command will output information about the local environment.
