# Troubleshooting

### Debugging hydration errors

Vue fails silently in production mode and doesn't give a warning about where hydration failed. Set `mode` to `development` in `chainWebpack` to activate warnings:

```js
chainWebpack (config) {
  config.mode('development')
}
```

### Problems after an upgrade
If you have problems after upgrading try remove `.cache` and `node_modules` folder and run `yarn` again. 
