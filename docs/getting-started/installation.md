# Installation

::: warning COMPATIBILITY NOTE
Gridsome requires Node.js >= 8
:::

## Global installation

Install Gridsome globally to use the `gridsome` command.

```bash
# install Gridsome globally
npm install -g gridsome-cli

# create a new project
gridsome create awesome-site
cd awesome-site

# start building
gridsome develop
```

## Local installation

Install Gridsome as a development dependency.

```bash
npm install gridsome --dev
```

Then add these scripts to `package.json`:

```json
{
  "scripts": {
    "develop": "gridsome develop",
    "build": "gridsome build"
  }
}
```

Then run the `develop` command

```bash
npm run develop
```
