module.exports = {
  siteName: "Linuxing3's Gridsome on Netlify",
  siteUrl: `https://gridsome.netlify.com`,
  titleTemplate: "%s - Gridsome",

  plugins: [
    "@gridsome/plugin-critical",
    {
      use: "@gridsome/source-filesystem",
      options: {
        index: ["README"],
        path: "docs/**/*.md",
        typeName: "DocPage",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        index: ["README"],
        path: "plugins/**/*.md",
        typeName: "PluginPage",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "examples/*.md",
        typeName: "Example",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        typeName: "BlogPost",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*/index.md",
        route: "/blog/:year/:month/:day/:slug+",
        typeName: "BlogPost",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
  ],
};
