---
title: Gridsome v0.6
slug: gridsome-v06
author: [hjvedvik, tommyvedvik]
date: 2019-04-14
excerpt: "..."
---

## Creating custom pages

Gridsome 0.6 comes with a new API for creating pages. Until now, you have only been able to create pages by having Vue components in the `src/pages` folder or by creating templates for content types. But that is too limited for some use cases. The new API lets you create pages programmatically, which will give you much more flexibility.

Read more about the [Pages API](/docs/pages-api)

## Staters library

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad soluta ab autem deserunt at minima quod nulla, fuga praesentium ex tenetur, beatae ipsam pariatur, repudiandae error necessitatibus molestias? Aliquid, placeat.

#### Custom node fields as top-level options

Custom node fields have been created by adding a `fields` option when creating nodes.

This change doesn't break anyhing, but it's recommended to update you code to reflect this change because the `fields` option will be marked as deprecated.

## Breaking changes 😅

- Custom fields are no longer camel cased by default.
- A trailing slash is added to paths by default. [Read more](/docs/config#permalinks)
- `content`, `excerpt` and `slug` are no longer part of `NodeInterface`.
- `NodeInterface` is renamed to `Node`.
- Routes for pages in `src/pages` no longer gets automatic names.

## Other features and fixes

- Configure webpack without chaining [Read more](/docs/config#configurewebpack)
- Advanced GraphQL sort argument [Read more](/docs/querying-data#advancedsorting)
- New page data fetch logics to reduce compile time.
- Render initial state to prevent initial request.

All changes in the [change log](https://github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md#056-2019-03-29)

