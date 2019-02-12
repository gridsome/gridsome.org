---
title: Gridsome v0.5
author: [hjvedvik, tommyvedvik]
date: 2019-02-12
excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt a, molestias dolorem odio doloribus explicabo sed quisquam nulla eum earum fugit distinctio doloremque repellat, quaerat veniam. Exercitationem sed expedita quasi!"
---
## Filtering GraphQL data

Each content type collection in the GraphQL schema has a new `filter` argument which ca be used to filter the results. You can filter by `id`, `title`, `slug`, `path` or any custom field.

Read more about [Filtering data](/docs/data-filter)

## Create taxonomy pages

All references in the the GraphQL schema has been a one way relation. This release introduces a new field called `belongsTo` for all content types. The field will list all nodes that has a reference back to the current node which makes it very useful to create taxonomy pages etc. The field can also take the same arugments as a collection. And the `@paginate` directive can be used to automatcally paginate the results.

Read more about [Taxonomies](/docs/taxonomies)

## Page Query variables in templates

Previously, only `$path` and `$page` was available as variables for `page-query` in templates. But you can now use `$id`, `$title`, `$slug`, `$date` or any custom field from the current `node`. Deeply nested object values and arrays can also be used as variables.

- `$id` resolves to `node.id`
- `$value` resolves to `node.fields.value`
- `$object__value` resolves to `node.fields.object.value`
- `$array__3__id` resolves to `node.fields.array[3].id`

## Environment variables

Sometimes we want configuration values that are different from what you want in the production build. Gridsome now utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to make this easy. Special thanks to [isoppp](https://twitter.com/isopppcom) for implementing this feature 😄

Read more about [Environment Variables](/docs/environment-variables)

Read the [change log](https://github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md) for all new features and bugfixes.
