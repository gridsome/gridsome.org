# Environment variables

Sometimes you want configuration values that are different from what you have in the production build. Gridsome utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to make this easy. Create a file called `.env` at the root of your project.

If you want different variables for your local development, then create a file named `.env.development`. Similarly, you can create a file with the name `.env.production` to have variables only for the production build. Although production variables are usually added by the hosting providers. The default `.env` file will only be loaded if no `dotenv` file exists for the current environment.

```ini
GRIDSOME_API_URL=https://api.example.com
DB_USER=root
DB_PASS=s1mpl3
```

## Usage on the server 

All variables will be available as `process.env.{name}` on the server.

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-plugin',
      options: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS
      }
    }
  ]
}
```

## Usage in the browser 

While all the variables are available on the server, only variables prefixed with `GRIDSOME_` are available in the browser for security reasons. As you see in the example above, only `GRIDSOME_API_URL` is prefixed. That is because we don't want to have `DB_USER` and `DB_PASS` compiled into our JavaScript.

```js
export default {
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    const res = await axios.get(process.env.GRIDSOME_API_URL)
    this.items = res.data
  }
}
```
