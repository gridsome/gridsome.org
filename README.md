# gridsome.org

This is the Git repository for gridsome.org. Feel free to contribute 🥳

## Linting Markdown

We use [markdownlint-cli](https://www.npmjs.com/package/markdownlint-cli) to enforce style consistency rules on the documentation. The linter runs automatically on every push and pull request via [GitHub Actions](https://docs.github.com/en/actions).

To install the linter on your machine, run the following:

```shell
npm install -g markdownlint-cli@0.23.2
```

You can check your changes for linter errors by running:

```shell
markdownlint '**/*.md' --ignore node_modules
```

The linter can automatically fix certain classes of failure. To accept these fixes, run:

```shell
markdownlint '**/*.md' --ignore node_modules --fix
```
