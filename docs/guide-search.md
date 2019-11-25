# Add a search to Gridsome

Adding dynamic search functionality to your static site is a breeze. We can use Vue's reactive system in such scenarios.

Take the following query as an example:

```graphql
{
  allPost {
    edges {
      node {
        title
        excerpt
        date
        path
      }
    }
  }
}
```

We would like to retrieve only posts that match what the user enters in the input field. So let's start by creating a `search` variable that will hold this value:

```js
data() {
  return {
    search: ''
  }
}
```

We can benefit from a computed property to filter the query results before passing the data further:

```js
computed: {
  searchResults() {
    return this.$static.allPost.edges.filter(post => {
        return post.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
    })
  }
}
```

Notice in the code above that all the posts will be shown if the input field is blank.

That's it! Now we can use a `v-model` in our html template to bind the search along with the code that shows the results:

```html
<input type="text" name="search" id="search" placeholder="Type something..." v-model="search">

<article v-for="post in searchResults" :key="post.node.id">
    <h1><g-link :to="post.node.path">{{ post.node.title }}</g-link></h1>    
    <p>{{ post.node.excerpt }}</p>
    <p>{{ post.node.date }}</p>
</article>
```

You can enhance the user experience by adding a simple *empty state* text in case nothing matches:

```html
<div v-if="searchResults.length > 0">
    <article v-for="post in searchResults" :key="post.node.id">
        <h1><g-link :to="post.node.path">{{ post.node.title }}</g-link></h1>    
        <p>{{ post.node.excerpt }}</p>
        <p>{{ post.node.date }}</p>
    </article>
</div>

<div v-else>
    <p>Your search didn't return any results. Please try again.</p>
</div>
```