# Deploy to Azure Static Web Apps

## Prerequisites

1. GitHub account
2. Azure account

Azure Static Web Apps publishes a website to a prodution environment by building apps from a GitHub repository.

## Deploy from Azure portal

### Create a static web app

After you created your GitHub repository and commited your code, you can create a static web app from the Azure portal.

1. Navigate to the [Azure Portal](https://portal.azure.com)
2. Select **Create a Resource**
3. Search for **Static Web Apps**
4. Select **Static Web Apps**
5. Select **Create**

In the *Basics* section, begin by configuring your new app and linking it to a GitHub repository.

![Basics Settings](https://docs.microsoft.com/en-us/azure/static-web-apps/media/getting-started-portal/basics-tab.png "Basics Settings")

1. Select your *Azure Subscription*
2. Select or create a new *Resource Group*
3. Name the app as you wish (e.g. *my-first-static-web-app*)
   - Valid characters are ```a-z``` (case insensitive), ```0-9```, and ```-```.
4. Select a *Region* closest to you
5. Select the **Free** SKU
6. Select the **Sign-in with GitHub** button and authenticate with GitHub

After you sign in with GitHub, enter the repository information.

![Source Control Details](https://docs.microsoft.com/en-us/azure/static-web-apps/media/getting-started-portal/repository-details.png "Source Control Details")

1. Select your *Organization*
2. Select your repository from the *Repository* drop-down
3. Select your production branch from the *Branch* drop-down
4. In the *Build Details* section, add configuration details to build your Gridsome website
   - In our case, we can use **Vue.js**, as Gridsome uses the same structure to build
     - Keep the default value in the *App location* box
     - Clear the default value from the *Api location* box
     - Keep the default value in the *App artifact location* box
5. Select **Review + Create**.

![Button Review + Create](https://docs.microsoft.com/en-us/azure/static-web-apps/media/getting-started-portal/review-create.png "Button Review + Create")

6. Select **Create**

![Button Create](https://docs.microsoft.com/en-us/azure/static-web-apps/media/getting-started-portal/create-button.png "Button Create")

7. After creation select **Go to resource**

![Go to Resource](https://docs.microsoft.com/en-us/azure/static-web-apps/media/getting-started-portal/resource-button.png "Go to resource")

## View the website

When you create an Azure Static Web App, Azure resources are provisined to make up your app. Also a GitHub Action workflow is created and commited to your repository. This workflow builds and publishes your application.

Before you can navigate to your new static site, the deployment build must first finish running.

The Static Web Apps overview window displays a series of links that help you interact with your web app.

![Overview](https://docs.microsoft.com/en-us/azure/static-web-apps/media/getting-started/overview-window.png "Overview")

1. The banner at the top of Overview takes you  to the GitHub Actions running against your repository. Once you verify the deployment is complete, you can navigate using the generated URL.
2. You can click on the *URL* link to open your website.

You can check other docs and tutorials regarding Azure Static Web Apps directly from Azure Documentation:

[Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
