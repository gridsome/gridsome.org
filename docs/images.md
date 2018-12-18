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

