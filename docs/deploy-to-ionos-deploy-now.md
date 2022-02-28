# Deploy to IONOS Deploy Now

## Overview

Deploy Now is a hosting platform that allows you to deploy static sites and PHP apps directly via GitHub. As a tool built from developers for developers, Deploy Now automates build and deployment so you can focus entirely on your code. Your code is deployed to [IONOS](https://www.ionos.com/) reliable shared hosting infrastructure in Europe and North America. The workflow automation is based on [GitHub Actions](https://github.com/features/actions) and can be customized directly in your repository.

## Deploy Now in a nutshell

| FUNCTION SET                   | APPLICATION STACK            | BY DEFAULT              |
| ------------------------------ | ---------------------------- | ----------------------- |
| Auto-build setup support       | HTTP/2                       | DDos Protection         |
| Deployments via GitHub Actions | Apache                       | Geo redundancy          |
| Staging deployments            | SSL by default               | Climate-neutral hosting |
| Custom domains                 | Wide variety of PHP versions | IPv6                    |

[Read more in the Deploy Now docs](https://docs.ionos.space/)

## Deploying your Gridsome Website to Deploy Now

Push your code to GitHub, sign in into your [Deploy Now](https://ionos.space/) account, click on `Add new project` and select your repo. Deploy Now automatically detects all build settings for Gridsome. Once deployed, you will get a preview URL to see your Gridsome site live. You can connect external domains as well as domains purchased at IONOS with one click.

All subsequent Git pushes trigger re-deployments via [GitHub Actions](https://github.com/features/actions). Workflows can be further customized directly in your repository. Deploy Now automatically creates staging deployments from additional branches you can use to preview changes before merging them to main.

Missing a feature? Open a [feature request](https://github.com/ionos-deploy-now/ionos-deploy-now/issues/new/choose) for Deploy Now.
