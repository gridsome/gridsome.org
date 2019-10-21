# Images

Gridsome has a built-in `<g-image>` component that outputs an optimized **progressive image**. It also resizes and crops in real-time when developing.

A typical image component will look like this:

```html
<g-image src="~/image.png" width="500"/>
```
💡 `~` is an alias to **/src/** folder.

📣 **Only local, relative image paths will be compressed by Gridsome.**

 

## How it works

- **A IMG element with a source srcset is used.** This means that using several media queries, you load the smallest image that matches your device (e.g. mobile devices get smaller images, desktop devices get larger images, etc.). The images will be resized down to 480, 1024, 1920 and 2560 pixels by default.

- **A base64 blurred image loaded by default.** This makes: 1) Larger images outside the viewport are not requested until they’re needed, and 2) The blurred image is in a container with the same dimensions as the real image—therefore, no jumping when the image loads.

- **An Intersection Observer** that swaps the base image for the larger image, when the image is in the viewport. (Lazy loading).


## Usage in Vue templates

A `<g-image>` component is available in all your Vue templates and can be used to compress local images. The `src` attribute and options like `width`, `height` and `quality` must be static values because they are compiled into an object which contains URLs and other information that will be rendered into an `img` tag.

```html
<g-image src="~/assets/image.png" width="500"/>
```

## Usage via GraphQL
Local image paths from sources can also be compressed. Options like `width`, `height` and `quality` must be set in the query. The field can be passed to `g-image` as the `src` attribute.

```html
<template>
  <Layout>
    <g-image :src="$page.post.image" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: blogPost (id: $id) {
    image (width: 720, height: 200, quality: 90)
  }
}
</page-query>
```

## Usage in Markdown
The [gridsome-transformer-remark](/plugins/transformer-remark) transformer plugin automatically converts normal Markdown images to `g-image` compatible markup.

```md
![Alternative text](./image.jpg)
```

## Image cropping
Crop the image by settings both `width` and `height` attributes. The image will be cropped to cover both dimensions by default. Change how to crop with the [`fit`](/docs/images#fit-options) attribute.

```html
<g-image src="./image.png" width="500" height="500" fit="contain"/>
```

## Options

|Property  |Default| |
|----------|-------|-|
|src       |*required*|Relative path to image file
|width     |          |Resize image to specified width in pixels
|height    |          |Crop & resize image to specified height in pixels
|alt       |          |Alternate text for the image
|fit 			 |`"cover"` |How to crop images. See properties below.
|background|          |Background color for 'contain'
|immediate |`false`   |Set to `true` to disable lazy-loading
|blur      |`40`      	|How much in pixels to blur the image placeholder
|quality   |`75`      |The quality of the image. (`0` - `100`).

## Fit options

|||
|-|-|
|cover    |Crop to cover both provided dimensions (default).
|contain  |Embed within both provided dimensions.
|fill     |Ignore the aspect ratio of the input and stretch to both provided dimensions.
|inside   |Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
|outside  |Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
