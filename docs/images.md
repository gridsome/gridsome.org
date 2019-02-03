# Images

Use the `<g-image>` component to get automatic lazy-loading and optimizations for your images. Images will be resized down to 480, 1024, 1920 and 2560 pixels by default. The component is available globally in all your templates.

`<g-image>` automatically compresses the image and creates a small blurred version of it with the same aspect ratio. The original image gets lazy-loaded when in view.

> **g-image** only works with static values & relative paths. Use normal `<img>` if you have dynamic or external image paths.

```html
<g-image src="./image.png" width="500"/>
```

> The `src` and `width` properties must be static values because they are generated in the build process.


## Use in Pages & Components
To use gat

- Use `[caption](./image.jpg)` If image is located in same folder as Markdown file
- Use	`[caption](./folder/image.jpg)` if image is located in one folder up.
- Use	`[caption](../another-folder/image.jpg)` if image is located in a folder below.
- Use	`[caption](/image.jpg)` if image is located in `/static/` folder.

## Use in Markdown
The [gridsome-transformer-remark](/plugins/transformer-remark) transformer plugin automatically converts normal Markdown images to `<g-image>`. Markdown images needs to have **relative paths**.

- Use `[caption](./image.jpg)` If image is located in same folder as Markdown file
- Use	`[caption](./folder/image.jpg)` if image is located in one folder up.
- Use	`[caption](../another-folder/image.jpg)` if image is located in a folder below.
- Use	`[caption](/image.jpg)` if image is located in `/static/` folder.


## Use via GraphQL
Sometimes images are added to the GraphQL data layer. For example if you add a local image to a **Markdown** with frontmatter:

```js
// markdown.md
---
title: New Blog post title!
author: Tommy Vedvik
date: 2018-12-20
image: ./poster.png
---
```

This will add the **poster.png** image to the GraphQL data layer. To add this to a template you need pass the **image** field as an **object** into the **src** attribute. Example:

```html
<!-- component.vue -->
<template>
  <g-image v-if="$page.post.image" :src="$page.post.image" />
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    image (width: 720, height: 200, quality: 90)
  }
}
</page-query>
```

The **image field** is coming from a GraphQL query. Attributes like **width**, **height** and **quality** needs to be added to the query.


## Image cropping
Images will crop if both `height` and `width` is set. The `fit` attribute will tell how cropping should behave. For example:

```html
<g-image src="./image.png" width="500" height="500" fit="contain" />
```

#### Fit properties:

##### cover
Crop to cover both provided dimensions.

#### contain
Embed within both provided dimensions.

#### fill
Ignore the aspect ratio of the input and stretch to both provided dimensions.

#### inside
Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.


#### outside
Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.



## Properties

|Property  |Default| |
|----------|-------|-|
|src       |*required*|Relative path to image file
|width     |          |Resize image to specified width in pixels
|height    |          |Crop & resize image to specified height in pixels
|alt       |          |Alternate text for the image
|fit 			 |cover     |How to crop images. See properties below.
|background|          |Background color for 'contain'
|immediate |false     |Set to `true` to disable lazy-loading
|blur      |10      	|How much in px to blur the image placeholder
|quality   |75        |The quality of the image. (0-100).


> The `src` and `width` properties must be static values.



