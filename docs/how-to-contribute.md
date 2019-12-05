# How to contribute
> Gridsome is an open-source project built by core maintainers and contributors. We want to make it easy for anyone to contribute to Gridsome. Contribute to core, build plugins, improve documentation or write a blog post. It all helps Gridsome on its mission to simplify JAMstack development.

Read the [code of conduct](/docs/code-of-conduct/).

## Contributing to Core
Gridsome uses a **monorepo** pattern to manage its dependencies and core plugins. To contribute to core you need to install Gridsome core locally. This also enables you to run **personal Gridsome projects** on latest **Gridsome development** version.


### Run Gridsome core locally

Install [Node.js 8.3](https://nodejs.org/en/download/) or higher and [Yarn](https://yarnpkg.com/lang/en/docs/install/). It's also recommended to install [Lerna](https://www.npmjs.com/package/lerna) globally.

1. Clone the `https://github.com/gridsome/gridsome.git` repository.
2. Create a new Gridsome project inside the `~/projects` folder.
3. Enter the new project folder and run `yarn` (or `lerna bootstrap` if installed).
4. The project will now use the local packages when you run `gridsome develop`.

To use `@gridsome/cli` in the repo as a global command. Enter the `~/packages/cli` folder and run `npm link`.

**Yarn** will add dependencies from your test projects to the root `yarn.lock` file. So you should not commit changes in that file unless you have added dependencies to any of the core packages. If you need to commit it, remove your projects from the `~/projects` folder temporary and run `yarn` or `lerna bootstrap` in the root folder. Yarn will then clean up the lock file with only core dependencies. Commit the file and move your projects back and run `yarn` or `lerna bootstrap` again to start developing.


## Contributing to the docs
We are a strong believer that documentation is very important for any open-source projects. Gridsome uses, of course, Gridsome for its website and documentation.


1. If you want to add/modify any Gridsome documentation, go to the
   [docs folder on GitHub](https://github.com/gridsome/gridsome.org/tree/master/docs) and
   use the file editor to edit and then preview your changes.
2. GitHub then allows you to commit the change and raise a PR right in the UI. This is the _easiest_ way you can contribute to Gridsome!

You can also clone [the Gridsome.org repo](https://github.com/gridsome/gridsome.org) and work locally on documentation. Install it like any other Gridsome project.


## Contributing to the blog
Creating guest blog posts for Gridsome.org users is a great way to contribute to Gridsome community. A typical blog post could be: **How our company is using Gridsome to do XX**, or **How to integrate XX with Gridsome**.

To add a new blog post to the gridsome.org blog:

**Prepare repository:**

- Clone [the Gridsome.org repo](https://github.com/gridsome/gridsome.org).
- Run `yarn` to install all of the website's dependencies.
- Run `gridsome develop` to preview the blog at `http://localhost:8000/blog`.
- The content for the blog lives in the `/blog` folder.

**Create contributor profile:**
- Add your avatar image to `/contributors/images`.
- Add your name and info to `/contributors/contributors.yaml`.

**Setup blog post:**
- Add a new folder following the pattern `/blog/yyyy-mm-dd-title` (for example, 2018-09-14-say-hello-to-gridsome). Within this newly created folder add an `index.md` file.
- Add `title`, `date`, `author`, and `tags` to the frontmatter of your `index.md`. If you are cross posting your post you can add `canonicalLink` for SEO benefits.
- If your blog post contains images add them to your blog post folder and reference them in your post's `index.md`.
- Ensure any links to **gridsome.org pages** are relative links - `/docs/how-to-contribute` instead of `https://gridsome.org/docs/how-to-contribute`
- Commit and push to your fork
- Create a pull request from your branch
  - We recommend using a prefix of `docs`, like `docs/your-change`.


## Submit a Starter

Contributing a new starter project is a great way to help other Gridsome users get off the ground quickly. While Starters are owned/maintained under your personal Github account, if you want one listed as an "official" Starter, you must commit the appropriate entry inside the Gridsome.org repo.

- Clone [the Gridsome.org repo](https://github.com/gridsome/gridsome.org).
- Run `yarn` to install all of the website's dependencies.

**Create contributor profile:**
- Add your avatar image to `/contributors/images`.
- Add your name and info to `/contributors/contributors.yaml`.

**Add starter:**
- Add starter screenshot to `/starters/screenshots` (840x840px / 1680x1680 for retina).
- Add starter details to end of this file `/starters/starters.yaml`.

Gridsome Starters use the Github project README file for content.

- Run `gridsome develop` to preview starter at `http://localhost:8000/starters`.
- Commit and push to your fork
- Create a pull request from your branch
  - We recommend using a prefix of `starter`, like `starter/your-starter-id`.


## Submit to Showcase *
*Coming soon...*
