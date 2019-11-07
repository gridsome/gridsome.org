# Deploy to ZEIT Now

[ZEIT Now](https://zeit.co) is a cloud platform for websites and serverless APIs, that you can use to deploy your Gridsome projects to your personal domain (or a free `.now.sh` suffixed URL).

This guide will show you how to get started in a few quick steps:

### Step 1: Installing Now CLI

To install their command-line interface with [npm](https://www.npmjs.com/package/now), run the following command:

```shell
npm i -g now
```

### Step 2: Deploying

You can deploy your application by running the following command in the root of the project directory:

```shell
now
```

**Alternatively**, you can also use their integration for [GitHub](https://zeit.co/github) or [GitLab](https://zeit.co/gitlab).

That’s all!

Your site will now deploy, and you will receive a link similar to the following: https://gridsome.now-examples.now.sh

Out of the box, you are preconfigured for client-side routing compatibility and appropriate default caching headers. This behaviour can be overwritten [like this](https://zeit.co/docs/v2/advanced/routes/).
