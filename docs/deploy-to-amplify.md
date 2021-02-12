# Deploy to AWS Amplify Console

> Build, deploy, and host cloud-powered modern web apps.

Go to https://aws.amazon.com/amplify/console/ to get started.

Change the base directory field:

- **baseDirectory:** `dist`

Your settings should look like the following:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    # IMPORTANT - Please verify your build output directory
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
