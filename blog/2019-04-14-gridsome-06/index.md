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

## Staters library

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad soluta ab autem deserunt at minima quod nulla, fuga praesentium ex tenetur, beatae ipsam pariatur, repudiandae error necessitatibus molestias? Aliquid, placeat.

## Breaking changes

- `NodeInterface` is renamed to `Node`.
- `title`, `path`, `content`, `excerpt` and `slug` are now custom fields.
- Routes for pages in `src/pages` no longer gets automatic names.
- Custom fields are no longer camel cased by default.

## Other features and fixes

- Add custom node fields as top-level options [Read more](/docs/data-store-api#collectionaddnodeoptions)
- Limit argument for GraphQL [Read more](/docs/querying-data#limit)
- Advanced GraphQL sort argument [Read more](/docs/querying-data#advancedsorting)
- Configure webpack without chaining [Read more](/docs/config#configurewebpack)
- New fetch logics to reduce compile time.
- Render initial state as markup to prevent initial request.

You will find all changes in the [change log](https://github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md)

