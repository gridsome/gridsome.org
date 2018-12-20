# Images

Use the `<g-image>` component to get automatic lazy-loading and optimizations for your images. Images will be resized down to 480, 1024, 1920 and 2560 pixels by default. The component is available globally in all your templates.

```html
<g-image src="./image.png" width="500"/>
```

> The `src` and `width` properties must be static values because they are generated in the build process.

Learn about the [Image API here](/docs/image).

### Automatic resizing
`<g-image>` automatically resizes image with the `width` attribute. The width you set will be the original width of the image. What you set is what you get. There is no fake resizing.

### Image cropping
Image will crop if both `height` and `width` is set. The `fit` attribute will tell how cropping should behave. For example:

```html
<g-image src="./image.png" width="500" height="500" fit="contain" />
```
Learn more about [cropping here](/docs/image).


### Progressive Image loading
`<g-image>` automatically compresses the image and creates a small blurred inline version of it with the same aspect ratio. The original image gets lazy-loaded when in view.
 

### Use in Vue components
The `<g-image>` can be used in any Vue components. It's globally available and don't need to be imported.

### Use in Markdown
The [gridsome-transformer-remark](/plugins/transformer-remark) transformer plugin automatically converts normal Markdown images to `<g-image>`.

### Insert images via GraphQL query
Sometimes images are added to the GraphQL data layer. For example if you add a local image to a Markdown with frontmatter:

```js
// NewBlogPost.md
---
title: New Blog post title!
author: Tommy Vedvik
date: 2018-12-20
image: ./poster.png
---
```

This will add the **poster.png** image to the GraphQL data layer. To add this to a template you need pass the **image** field as an object into the **src** attribute. Example:
```html
<g-image v-if="$page.post.image" :src="$page.post.image" />
```

The image field is coming from a GraphQL query. Attributes like **width**, **height** and **quality** needs to be added to the query. Here is an example:

```html
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
