# Deploy to Vercel

## Overview

[Vercel](https://vercel.com) is a cloud platform that enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and require no supervision, all with zero configuration. They provide a global edge network, SSL encryption, asset compression, cache invalidation, and more.

## Deploying your Gridsome Website to Vercel

To deploy your Gridsome app with a [Vercel for Git Integration](https://vercel.com/docs/git-integrations), push your code to a repository on Github, Gitlab, or Bitbucket.

Import the project into Vercel using the [Import Flow](https://vercel.com/import/git). During the import, you will find all relevant [options](https://vercel.com/docs/build-step#build-&-development-settings) preconfigured for you.

After your project has been imported, all subsequent user pushes to branches will generate [Preview Deployments](https://vercel.com/docs/platform/deployments#preview), and all users changes made to the [Production Branch](https://vercel.com/docs/git-integrations#production-branch) (commonly "main") will result in a [Production Deployment](https://vercel.com/docs/platform/deployments#production).

Once deployed, you will get a URL to see your app live, such as the following: <https://gridsome.now-examples.now.sh>.
