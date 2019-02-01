
# How to contribute
> Gridsome is an open-source project built by core maintainers and contributors. Any contribution is welcome, either it's writing docs, building plugins, or improving Gridsome core.


### Run Gridsome core locally

This will make it possible to use **local packages** when you run `gridsome develop` to make it easier to work on core, test pull requests or build plugins. Gridsome uses a "monorepo" pattern to manage its many dependencies.


Install [Node.js 8.3](https://nodejs.org/en/download/) or higher and [Yarn](https://yarnpkg.com/lang/en/docs/install/). It's also recommended to install [Lerna](https://www.npmjs.com/package/lerna) globally.

1. Clone the `https://github.com/gridsome/gridsome.git` repository.
2. Create a new Gridsome project inside the `~/projects` folder.
3. Enter the new project folder and run `yarn` (or `lerna bootstrap` if installed).
4. The project will now use the local packages when you run `gridsome develop`.

To use `@gridsome/cli` in the repo as a global command. Enter the `~/packages/cli` folder and run `npm link`.

**Yarn** will add dependencies from your test projects to the root `yarn.lock` file. So you should not commit changes in that file unless you have added dependencies to any of the core packages. If you need to commit it, remove your projects from the `~/projects` folder temporary and run `yarn` or `lerna bootstrap` in the root folder. Yarn will then clean up the lock file with only core dependencies. Commit the file and move your projects back and run `yarn` or `lerna bootstrap` again to start developing.


### Contributing by creating plugins
...


### Contributing to learn section
...


### Contributing to the documentation

We are a strong believer that documentation is very important for any open source project. Gridsome uses, of course, Gridsome for it's website and documentation. 


1. If you want to add/modify any Gridsome documentation, go to the
   [docs folder on GitHub](https://github.com/gridsome/gridsome.org/tree/master/docs) and
   use the file editor to edit and then preview your changes.
2. GitHub then allows you to commit the change and raise a PR right in the UI. This is the _easiest_ way you can contribute to the project!

If you wrote a new document that was previously a stub, update `/src/data/doc-links.yaml` accordingly by removing the asterisk behind the document's title:

```diff:title=/src/data/doc-links.yaml
  ...
- - title: Example Document*
+ - title: Example Document
    link: /docs/example-document/
  ...
```

### Contributing to the blog

To add a new blog post to the gridsome.org blog:

- Clone [the Gridsome.org repo](https://github.com/gridsome/gridsome.org).
- Run `yarn` to install all of the website's dependencies.
- Run `gridsome develop` to preview the blog at `http://localhost:8000/blog`.
- The content for the blog lives in the `/blog` folder. Make additions or modifications here.
- Add your avatar image to `/docs/blog/avatars`.
- Add your name to `/docs/blog/author.yaml`.
- Add a new folder following the pattern `/blog/yyyy-mm-dd-title` (for example, 2018-09-14-say-hello-to-gridsome). Within this newly created folder add an `index.md` file.
- Add `title`, `date`, `author`, and `tags` ([view existing tags](https://www.gridsome.org/blog/tags/) or add a new one) to the frontmatter of your `index.md`. If you are cross posting your post you can add `canonicalLink` for SEO benefits.
- If your blog post contains images add them to your blog post folder and reference them in your post's `index.md`.
- Ensure any links to **gridsome.org pages** are relative links - `/docs/how-to-contribute` instead of `https://gridsome.org/docs/contribute`
- Commit and push to your fork
- Create a pull request from your branch
  - We recommend using a prefix of `docs`, like `docs/your-change`.
