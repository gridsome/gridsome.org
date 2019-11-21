# Deploy to AWS Amplify Console

> Build, deploy, and host cloud-powered modern web apps.


Go to https://aws.amazon.com/amplify/console/ to get started.

Add these build settings:

- **Pre Build Command:** `npm install --global @gridsome/cli`
- **Build Command:** `gridsome build`
- **Publish directory:** `dist`

**Example of build file**

```
version: 0.1
frontend:
  phases:
    preBuild:
      commands:
        - npm install --global @gridsome/cli
        - npm ci
    build:
      commands:
        - gridsome build
  artifacts:
    # IMPORTANT - Please verify your build output directory
    baseDirectory: /dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
