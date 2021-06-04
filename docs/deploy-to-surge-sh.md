# Deploying to Surge.sh

In this guide, you will learn how to deploy your Gridsome site to Surge.

[Surge](https://surge.sh/) is a cloud platform for hosting static websites, which is extremely simple to use but offers customization options for those who need them.

Their generous free tier permits unlimited publishing, using custom domains, and basic SSL, with more features available through the professional plan.

This guide will show you how to get started in a few quick steps:

## Step 1: Getting Surge

To install the surge CLI with `npm`, paste the following into your terminal:

```shell
npm install -g surge
```

To install the surge CLI with `yarn`, paste the following into your terminal:

```shell
yarn global add surge
```

## Step 2: Preparing to deploy

Build a site by running this command in your project's root directory:

```shell
gridsome build
```

This generates a publishable version of your site in the `./dist` folder.

## Step 3: Deploying

You can deploy your site by running the following in the root of the project directory.

```shell
surge dist/
```

Done 🙂

> **Note**: If this is your first time using Surge, you'll be prompted to create a (free) account from the command line. This will only happen once.

---

⚠️ Consult the [Surge Docs](https://surge.sh/help/) for information about how to customize your deployment further. Remember that each time you redeploy your site, you will need to rerun `gridsome build` first.
