# Add a form to Gridsome

Adding forms to a static site is easy, but you need to use an external service. We have listed some great services that integrates well with Gridsome.


## Formspree
Formspree is a contact form service that lets you handle form submission and it integrates seamlessly with your static sites 
Read more: [Formspree](https://formspree.io/)

## Getform.io
Getform is a form backend platform that lets you handle your forms on your websites and apps. You can set up a form and start collecting submissions to your form within minutes.
Read More: [Getform](https://getform.io/)

## Netlify Forms
Netlify offers some sophisticated features to make static site form submissions a breeze.

First we will start by adding the form to our template tag:

```html
<form 
  name="contact"
  method="post"
  v-on:submit.prevent="handleSubmit"
  action="/success/"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <p hidden>
    <label>
      Don’t fill this out: <input name="bot-field" />
    </label>
  </p>
  <div class="sender-info">
    <div>
      <label for="name" class="label" >Your name</label>
      <input type="text" name="name" v-model="formData.name" />
    </div>
    <div>
      <label for="email">Your email</label>
      <input type="email" name="email" v-model="formData.email" />
    </div>
  </div>

  <div class="message-wrapper">
    <label for="message">Message</label>
    <textarea name="message" v-model="formData.message"></textarea>
  </div>

  <button type="submit">Submit form</button>
</form>
```

We have include a honeypot input that will lure bots trying to send spam and Netlify will automatically reject them.

Next step is to add our `formData` variable that will hold our data that will be sent to Netlify, this is binded to our inputs to automatically update `formData` when the input is changed.

```js
data() {
  return {
    formData: {},
  }
}
```

Last step is to add our submit handler to send the data to Netlify. This is done by listening to the form submit action and using fetch to post the data in `formData`. We also have a encode method that will make sure our data is properly formatted when we post it. 

In this example shown below we are redirecting the user to the route `/success` if the post was successful, this can be changed into any action you want. But in this case you need to make sure you have a page set up on that route to present a sucess message for the user.

```js
methods: {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  },
  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => this.$router.push('/success'))
    .catch(error => alert(error))
  }
}
```

Read more: [Netlify Forms](https://www.netlify.com/docs/form-handling/)

## Basin
Basin helps you manage form submission and track conversions with no backend coding required. It offers great features that integrate excellently with your static sites.
Read More: [Basin](https://usebasin.com/)
