# Deploy to Zeit Now

Now by Zeit is an excellent deploy & hosting service for static sites. You get global CDN, HTTP/2, custom domains etc.  They also have continuous deployment from a GitHub-repo. They have a free plan with unlimited deployments.


### Deploying from GitHub
https://zeit.co/docs/v2/integrations/now-for-github

Add these settings where its needed:

- **Build Command:** `npm run build`
- **Publish directory:** `dist`



### Deploying with Terminal

#### Step 1

Install Now globally by typing `npm install -g now` in Terminal.

#### Step 2

Create a `now.json` file in the root folder of your project to configure your deployment process.

```JSON
{
  "name": "your-gridsome-project",
  "alias": "your-gridsome-project.com", // or ["aliasOne", "aliasTwo"]
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build",
      "config": { "distDir": "dist" }
    }
  ]
}
```

#### Step 3

Update `package.json` by adding a new script within the `scripts` object:

```JSON
{
  "scripts": {
    ...
    "now-build": "npm run build"
  }
}
```

#### Step 4

In Terminal, go to the root folder of your project and just type `now`. Within some time (about a few minutes) your project will be uploaded to Now, built right in there and deployed.

#### Step 5 (optional)

If an alias was not assigned automatically, assign it manually by typing `now alias your-project-deployment-address.now.sh your-domain.com`. 

That's it!  🎉

### Other Zeit Now guides:

- [Add a domain](https://zeit.co/docs/v2/domains-and-aliases)
- [Deployment Basics](https://zeit.co/docs/v2/deployments/basics/)
- [Example](https://github.com/zeit/now-examples/tree/master/gridsome)
