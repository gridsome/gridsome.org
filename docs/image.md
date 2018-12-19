# Image component

Use the `g-image` component to get automatic lazy-loading and optimizations for your images. Images will be resized down to 480, 1024, 1920 and 2560 pixels by default. The component is available globally in all your templates.

```html
<g-image src="./image.png" width="500" />
```

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


### Image cropping
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