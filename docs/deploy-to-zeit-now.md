# Deploy to Zeit Now

Now by Zeit is an excellent deploy & hosting service for static sites. You get global CDN, HTTP/2, custom domains etc.  They also have continuous deployment from a GitHub-repo. They have a free plan with unlimited deployments.

### Deploying with Terminal

1. Follow [this guide](https://zeit.co/docs/getting-started/introduction-to-now) to install Now 
2. Go to your Gridsome project in terminal
3. Run `gridsome build`to built the site.
4. Go to the generated dist folder `cd dist`
5. Type `now` to deploy your site 🎉



### Deploying from GitHub
https://zeit.co/docs/integrations/now-for-github

Add these settings where its needed:

- **Build Command:** `npm run build`
- **Publish directory:** `dist`


### Other Zeit Now guides:

- [Add a custom domain](https://zeit.co/docs/getting-started/assign-a-domain-name)
- [Advanced static hosting](https://zeit.co/docs/static-deployments/introduction-and-deployinge)