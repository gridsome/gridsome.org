# Deploy to Amazon s3
The easiest way to host a static site on the blazing-fast S3 is to use the wonderful tool Up. Up deploys static websites in seconds, so you can get back to working on what makes your product unique. Learn more about Up here: https://up.docs.apex.sh/

**Follow the instructions here to get started:**
https://up.docs.apex.sh/#installation

When have followed the instructions and have a **up.json** file in your Gridsome project add this to the same file:

```js
{
  "type": "static",
  "static": {
    "dir": "dist"
  }
}

```

Now run `up` from your project folder to deploy your site.
