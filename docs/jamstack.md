# What is the JAMstack?

> JAMstack is a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience. It's a modern web development architecture based on client-side **J**avaScript, reusable **A**PIs, and prebuilt **M**arkup.


## Benefits

### ⚡️ Better Performance

Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.


### ⚡️ Higher Security

With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.


### ⚡️ Cheaper, Easier Scaling

When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.


### ⚡️ Better Developer Experience

Loose coupling and separation of controls allow for more targeted development and debugging, and the expanding selection of CMS options for site generators remove the need to maintain a separate stack for content and marketing.


## Best practices
When building JAMstack projects, you can really get the most out of the stack if you stick to a few best practices.


### Entire Project on a CDN

Because JAMstack projects don’t rely on server-side code, they can be distributed instead of living on a single server. Serving directly from a CDN unlocks speeds and performance that can’t be beat. The more of your app you can push to the edge, the better the user experience.


### Everything Lives in Git

With a JAMstack project, anyone should be able to do a git clone, install any needed dependencies with a standard procedure (like npm install), and be ready to run the full project locally. **No databases to clone, no complex installs.** This reduces contributor friction, and also simplifies staging and testing workflows.

### Modern Build Tools

Take advantage of the world of modern build tools. It can be a jungle to get oriented in and it’s a fast-moving space, but you’ll want to be able to use tomorrow’s web standards today without waiting for tomorrow’s browsers. And that currently means Babel, PostCSS, Webpack, and friends.

### Automated Builds

Because JAMstack markup is prebuilt, content changes won’t go live until you run another build. Automating this process will save you lots of frustration. You can do this yourself with webhooks, or use a publishing platform that includes the service automatically.



## Learn more

- Read more: [https://jamstack.org/](https://jamstack.org/)
- Videos: [https://jamstack.org/resources](https://jamstack.org/resources/)
