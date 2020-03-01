+++
title="yarn.md"
date="2018-02-16T14:05:34-04:00"
+++
# [Yarn](https://yarnpkg.com/en/docs/usage)

### Workflow

Introducing a package manager into your project introduces a new workflow around dependencies.

Yarn tries its best to stay out of your way and make each step of this workflow simple to understand.

There are a few things you should know about the basic workflow:

* Creating a new project
* Adding/updating/removing dependencies
* Installing/reinstalling your dependencies
* Working with version control (i.e. git)
* Continuous Integration


### Starting a new project

```
yarn init
```

### Managing dependencies

+ Adding a dependency

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
yarn global add [package]@[tag]
```

+ Updating a dependency

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

+ Removing a dependency

```
yarn remove [package]
```

+ Installing all the dependencies of project

```
yarn install
```
