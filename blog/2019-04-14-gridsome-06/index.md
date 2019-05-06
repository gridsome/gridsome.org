---
title: Gridsome v0.6
slug: gridsome-v06
author: [hjvedvik, tommyvedvik]
date: 2019-04-14
excerpt: "..."
---

## Creating pages programatically

Until now, you have only been able to create pages by having Vue components in the `src/pages` folder or by creating templates for content types. Gridsome 0.6 comes with a new API for creating pages. It lets you create pages programmatically, which will give you much more flexibility.

Read more about the [Pages API](/docs/pages-api)

## New website design and starters library

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad soluta ab autem deserunt at minima quod nulla, fuga praesentium ex tenetur, beatae ipsam pariatur, repudiandae error necessitatibus molestias? Aliquid, placeat.

## Breaking changes

- `NodeInterface` is renamed to `Node`.
- `title`, `path`, `date`, `content`, `excerpt` and `slug` are now custom fields.
- Custom fields are no longer camel cased by default.
- Routes for pages in `src/pages` no longer gets automatic names  
  *- Autmomatic route names would most likely conflict with custom pages.*

## Other features and fixes

- Fetch data for specific path. [Read more](/docs/pages)
- Add custom node fields as top-level options. [Read more](/docs/data-store-api#collectionaddnodeoptions)
- Limit argument for GraphQL. [Read more](/docs/querying-data#limit)
- Advanced GraphQL sort argument. [Read more](/docs/querying-data#advancedsorting)
- Configure webpack without chaining. [Read more](/docs/config#configurewebpack)
- New data fetching logics to reduce compile time.
- Render current state in markup to prevent initial request.

You will find all changes in the [change log](https://github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md)

