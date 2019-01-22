# How it works
![Pre-rendering](./images/ssg-mode.png)

Gridsome has **3 command line commands** that can be used.

- Use `gridsome develop` for starting a **development server**.
- Use `gridsome build` to generate a **production ready** build.
- Use `gridsome serve` to **test** production ready build locally.


## The develop process
`gridsome develop` command starts a **local development** environment with hot-reloading.
This is whats happening under the hood when running `gridsome develop` command:


1. **Initialize** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
2. **Load sources** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
3. **Create GraphQL schema** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
4. **Generate code** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.
5. **Bootstrap finish** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit sed urna malesuada dignissim varius ut libero.



## The build process
`gridsome build` prepares a Gridsome site for **production**. This means it generates files that are optimized and ready to be hosted and deployed on any FTP or static web host.

This is whats happening under the hood when running `gridome build` command:


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


## Client Side Hydration
A Gridsome loads as just pure HTML first, and the Vue.js takes over after page load.
....