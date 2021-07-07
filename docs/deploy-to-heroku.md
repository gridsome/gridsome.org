# Deploying to Heroku

In this guide, you will learn how to deploy your Gridsome site to Heroku.

[Heroku](https://www.heroku.com/) is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to go from idea to URL, bypassing all those infrastructure headaches.

This guide will show you how to get started in a few quick steps:


## Step 1: Getting Heroku

1. First install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

1. Create a Heroku account [here](https://signup.heroku.com/).

1. Run heroku login and fill in your Heroku credentials:

```shell
heroku login
```
## Step 2: Preparing to deploy

Build a site by running this command in your project's root directory:

```shell
gridsome build
```

This generates a publishable version of your site in the `./dist` folder.

Create a file called static.json in the root of your project with the content below:

``static.json:``

```shell script
{
  "root": "./dist"
}
```
This is the configuration of your site. See more at [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static).


Set up your Heroku git remote:

```shell script
# version change
git init
git add .
git commit -m "My site ready for deployment."

# creates a new app with a specified name
heroku apps:create example

# set buildpack for static sites
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
```

## Step 3: Deploying


Deploying Your Site
```shell script
# publish site
git push heroku master

# opens a browser to view the Dashboard version of Heroku CI
heroku open
```

Your site will now deploy, and you will receive a link similar to the following: https://gridsome-heruko-examples.herokuapp.com/

>
> __Note__: <br/>
> If this is your first time using Heroku, you'll be prompted to create a (free) account from the command line. This will only happen once.
>

