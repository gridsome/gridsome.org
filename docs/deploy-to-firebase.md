# Google Firebase

Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the essentials so you can monetize your business and focus on your users.

First, you need to make a few preparations:

## Step 1: Getting Firebase

1. Make sure you have [firebase-tools](https://www.npmjs.com/package/firebase-tools) installed.

1. Create a Firebase account [here](https://firebase.google.com/).

1. Run firebase login and fill in your Firebase credentials:
```shell script
firebase login
```

## Step2: Preparing to deploy

Build a site by running this command in your project's root directory:

```shell
gridsome build
```

Create firebase.json and .firebaserc at the root of your project with the following content:

``firebase.json:``

```shell script
{
 "hosting": {
   "public": "./dist",
   "ignore": []
 }
}
```
``.firebaserc:``

```shell script
{
 "projects": {
   "default": "<YOUR_FIREBASE_ID>"
 }
}
```

## Step 3: Deploying

Deploying Your Site

```shell script
firebase deploy
```
