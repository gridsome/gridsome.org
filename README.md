# gridsome.org

This is the Git repository for gridsome.org. Feel free to contribute 🥳

## Linting Markdown

We use [markdownlint-cli](https://www.npmjs.com/package/markdownlint-cli) to enforce style consistency rules on the documentation. The linter runs automatically on every push and pull request via [GitHub Actions](https://docs.github.com/en/actions).

You can check your changes for linter errors by running:

```shell
yarn markdown:lint
```

The linter can automatically fix certain classes of failure. To accept these fixes, run:

```shell
yarn markdown:fix
```
