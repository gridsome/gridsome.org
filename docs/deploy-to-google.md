# Deploy to Google Cloud Platform
## Prerequisites:
      1. Create a project op Google Cloud Platform
      2. Have acces to DNS record of your domain
      
You can host a static website on a Google Cloud Storage bucket for a domain you own.

The downside to this is that you can only use HTTP.
Please Follow this [tutorial](https://cloud.google.com/storage/docs/hosting-static-website) for a HTTP only website

The HTTPS configuration is a bit more complex.

# Steps to complete
## Use a Cloud Storage bucket as a load balancer backend
 Steps:
 
      1. Configure a Cloud Storage bucket
      2. Configure a load balancing service
      3. Create an external adress

Please follow the steps in the well documented Google [tutorial](https://cloud.google.com/load-balancing/docs/https/adding-a-backend-bucket-to-content-based-load-balancing)

## Set main and error page for bucket
gsutil web set -m index.html -e 404.html gs://your-bucket-name
[Documentation](https://cloud.google.com/storage/docs/gsutil/commands/web)



# Google cloud build
## Setup Google Source Repositories 
[Documentation](https://cloud.google.com/source-repositories/docs/)

## Add Build trigger
Create a new [trigger](https://console.cloud.google.com/cloud-build/triggers)


Add a cloudbuild.yaml to the root of the project containing

```
steps:
- name: 'gcr.io/cloud-builders/npm'
args: ['install']
- name: 'gcr.io/cloud-builders/npm'
args: ['run' , 'build']
- name: 'gcr.io/cloud-builders/gsutil'
args: ["-m", "rsync", "-r", "-c", "-d", "./dist", "gs://bucket-name"]
```

Last build step is to push static files to your bucket

## Link DNS record to reserved external Google IP
You must link these to resolve your domain to our external Google IP adress.
This can be done in your DNS service
