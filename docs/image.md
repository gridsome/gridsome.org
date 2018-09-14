# Image

Use the `g-image` component to get automatic lazy-loading and optimizations for your images. Images will be resized down to 480, 1024, 1920 and 2560 pixels by default. The component is available globally in all your templates.

```html
<g-image src="./image.png" width="500"/>
```

|Property  |Default| |
|----------|-------|-|
|src       |*required*|Relative path to image file
|width     |          |Resize image to specified width in pixels
|alt       |          |Alternate text for the image
|immediate |false     |Set to `true` to disable lazy-loading

> The `src` and `width` properties must be static values.
