module.exports = {
  siteName: "Emacser\'s Chanllenging Life'",
  siteUrl: `https://gridsome.netlify.com`,
  titleTemplate: "%s - Gridsome",
  icon: {
    favicon: {
      src: "src/favicon.png",
      sizes: [16, 32, 96],
    },
  },
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
        path: "blog/**/index.md",
        route: "/blog/:year/:month/:day/:slug+",
        typeName: "BlogPost",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        index: ["README"],
        path: "article/**/*.md",
        route: "/article/:slug+",
        typeName: "ArticlePost",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
  ],
};
