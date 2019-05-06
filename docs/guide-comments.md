# Add comments to Gridsome

Adding comments to a static site can be easy, you have the option to use either external services that loads an iframe into your site or applications that connects to your Github repository that commits the changes made on your site. We have listed some great services that integrates well with Gridsome.

## Disqus
Disqus is an external service that injects an iframe on your site, one easy way to use Disqus with Gridsome is to use the package [vue-disqus](https://github.com/ktquez/vue-disqus) that provides you with a custom component that you can use across your project.

#### Sign up on Disqus
First step is to sign up for an account on [Disqus](https://disqus.com/). When presented with the option you want to choose 'I want to install Disqus on my site'. Continue by filling in all necessary information about your site and when you are asked 'What platform is your site on?', pick 'Universal Code' at the bottom of the page. 

Complete the setup of your site and take note of your `Shortname` because this will be used later.

![shortname](https://i.imgur.com/Ui1aoYi.png) 

#### Install vue-disqus
You can use vue-disqus for easier implementation or use disqus directly, but this guide is using vue-disqus.

`yarn add vue-disqus`
or with npm
`npm install vue-disqus`

After it has been added to your package.json and installed you need to import vue-disqus in your `main.js` which is located directly in the `src` directory, and added to the vue instance. 

```js
import VueDisqus from 'vue-disqus'

export default function (Vue, { head })  {
  Vue.use(VueDisqus)
}
```

Now you are free to use the disqus component anywhere you want, simply use it like this:

```js
<vue-disqus shortname="mygridsomesite" :identifier="$page.post.title"></vue-disqus>
```

You need to provide a shortname which you can find on [Disqus](https://disqus.com/) under your site you configured after you signed up. You also need to provide an identifier, in this example we used the blogpost title from the GraphQL query.

Read more: [Disqus](https://disqus.com/)

## Staticman
Staticman is an application that you connect to your Github repository which commits comments or any other type of user input to your site that you have configured.
Read more: [Staticman](https://staticman.net/)
