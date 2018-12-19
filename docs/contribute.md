
# How to contribute

Install [Node.js 8.3](https://nodejs.org/en/download/) or higher and [Yarn](https://yarnpkg.com/lang/en/docs/install/). It's also recommended to install [Lerna](https://www.npmjs.com/package/lerna) globally.

1. Clone the `https://github.com/gridsome/gridsome.git` repository.
2. Create a new Gridsome project inside the `~/projects` folder.
3. Enter the new project folder and run `yarn` (or `lerna bootstrap` if installed).
4. The project will now use the local packages when you run `gridsome develop`.

To use `@gridsome/cli` in the repo as a global command. Enter the `~/packages/cli` folder and run `npm link`.

Yarn will add dependencies from your test projects to the root `yarn.lock` file. So you should not commit changes in that file unless you have added dependencies to any of the core packages. If you need to commit it, remove your projects from the `~/projects` folder temporary and run `yarn` or `lerna bootstrap` in the root folder. Yarn will then clean up the lock file with only core dependencies. Commit the file and move your projects back and run `yarn` or `lerna bootstrap` again to start developing.