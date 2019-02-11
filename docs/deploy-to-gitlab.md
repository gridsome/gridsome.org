# Deploy to GitLab pages

GitLab pages allows you to deploy static websites using their CI tools.

First, you need to make a few preparations:

1. Set correct base in `gridsome.config.js`:

If you are deploying to `https://<USERNAME or GROUP>.gitlab.io/`, you can omit `pathPrefix` as it defaults to `"/"`.

If you are deploying to `https://<USERNAME or GROUP>.gitlab.io/<REPO>/`, (i.e. your repository is at `https://gitlab.com/<USERNAME>/<REPO>`), set `pathPrefix` to `"/<REPO>/"`

2. Set `outDir` in `gridsome.config.js` to 'public'.

3. Create a `.gitlab-ci.yml` file in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content.

```yaml
image: node:10.15.0

pages:
  cache:
    paths:
      - node_modules/
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - public
  only:
    - master
```