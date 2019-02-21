# Deployment

Gridsome is a modern website generator that generates secure & static files. To deploy a Gridsome site you need a **static site host**.

## Git-based deploying

The best practice when working with Gridsome sites is to have your project hosted on a Git-service like GitHub and connect a deploy service that builds your site from a selected repository. [Netlify](//www.netlify.com/) is a great solution for this right now. They also have free plan for static website hosting. It's also possible to set up auto re-deploys if the repository or content changes.


These services are great for Git-based deploying:

- [Netlify](/docs/deploy-to-netlify)

- [AWS Amplify](/docs/deploy-to-amplify)

- [Zeit Now](/docs/deploy-to-zeit-now)

- [GitLab Pages](/docs/deploy-to-gitlab)

## Deploy from terminal
Many services let you deploy your static Gridsome site from the terminal. Here are some:

- [Amazon S3](/docs/deploy-to-amazon-s3)

- [Zeit Now](/docs/deploy-to-zeit-now)


## FTP deploying

To host your site on traditional hosting via FTP you need to manually build your project from the terminal.

- Run `gridsome build` in your project folder.
- This will generate a `dist` folder where your generated site is located.
- Upload the content of this folder to any FTP to get started.

## Drag & drop deploying

**Netlify Drop** lets you deploy a website with simply drag & drop.

- Run `gridsome build` in your project folder.
- This will generate a `dist` folder where your generated site is located.
- Visit [Netlify Drop](https://app.netlify.com/drop) and drop the `dist` folder there.
