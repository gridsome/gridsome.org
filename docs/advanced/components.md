# Components

## Custom components

`*.vue` files in the `components` directory will automatically be available in the builder

## Configuration

- type
- name
- supports
- styles
- mixins

## Generate CSS

- `watch`
- `selector`
- `property`
- `value`
- `suffix`

```js
{
  styles: [
    {
      watch: 'font_color',
      selector: '.my-font',
      property: 'color',
    }
  ]
}
```

Will generate:

```css
.element-id .my-font {
  color: red;
}
```

Modify the output by defining a `value` function:

```js
{
  styles: [
    {
      watch: 'size',
      selector: '.my-font',
      property: 'font-size',
      value: size => `${size}px`
    }
  ]
}
```

Add a suffix to the output:

```js
{
  styles: [
    {
      watch: 'size',
      selector: '.my-font',
      property: 'font-size',
      suffix: 'px'
    }
  ]
}
```

Generate CSS from multiple props:

```js
{
  styles: [
    {
      watch: ['rotate', 'from_color', 'to_color'],
      selector: '.my-font',
      property: 'font-size',
      value ({ rotate, from_color, to_color }) {
        return `linear-gradient(${rotate}deg, ${from_color} 0%, ${to_color} 100%)`
      }
    }
  ]
}
```

Generate responsive CSS:

```js
{
  styles: [
    {
      responsive: true,
      watch: 'space',
      selector: '.my-font',
      property: 'padding'
    }
  ]
}
```
