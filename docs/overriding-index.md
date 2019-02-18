# Overriding Index.html

Occasionally you will need to override the base HTML template that Gridsome uses to generate your pages from. For example, adding CDN scripts to the footer of your markup can't be accomplished with Vue-Meta, so you would need to put these into the template yourself.

Thankfully, Gridsome makes this really easy. All you have to do is create a new `index.html` file in your `src` directory, and Gridsome will automatically detect it and use that `index.html` file for your site.

The following code is the base HTML template structure that Gridsome uses by default and which you can use as a starting point for your own:

```html
<!DOCTYPE html>
<html ${htmlAttrs}>
  <head>
    ${head}
  </head>
  <body ${bodyAttrs}>
    ${app}
    ${scripts}
  </body>
</html>
```
