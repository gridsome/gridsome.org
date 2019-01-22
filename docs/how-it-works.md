# How it works
![Pre-rendering](./images/ssg-mode.png)

Gridsome has **2 command line commands** that can be used.

- Use `gridsome develop` for starting a local **development server**.
- Use `gridsome build` to generate a **production ready** build.


## Local development
The `gridsome develop` command starts a **local development** environment with hot-reloading and a local **GraphQL data layer**.

![Gridsome develop](./images/gridsome-develop.gif)

**This is whats happening under the hood when running `gridsome develop` command:**

1. **Initialize** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
2. **Load sources** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
3. **Create GraphQL schema** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
4. **Generate code** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
5. **Bootstrap finish** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.



## The build process
The `gridsome build` prepares a project for **production**. This means it generates files that are optimized and ready to be hosted and deployed on any FTP or static web host. **The build process only uses the GraphQL data layer at build time and not in production.**

![Gridsome build](./images/gridsome-build.gif)

**This is whats happening under the hood when running `gridome build` command:**

1. **Initialize** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
2. **Load sources** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
3. **Create GraphQL** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
4. **Generate code** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
5. **Bootstrap finish** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
6. **Run GraphQL** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
7. **Compile assets** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
8. **Render HTML** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
9. **Process files** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
10. **Process images** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
11. **Extract critical CSS (Plugin)** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.


> Services like **Netlify** and **Zeit Now** lets you build your site automatically from a Git-repository. Learn more about Git-based [deployment here](/docs/deployment).


## Client Side Hydration
A Gridsome loads as just pure HTML first, and the Vue.js takes over after page load.
....