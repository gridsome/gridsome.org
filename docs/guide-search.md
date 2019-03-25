# Add search to Gridsome

One way to add a form to a Gridsome project is via a [Google Custom Search Engine](https://developers.google.com/custom-search/). Google lets you define a custom search engine based on URL indexing of a particular site. You could use this system to create a new custom search engine pointing specifically to where you host the static version of your Gridsome code. 

The search engine is entirely client-side based so you'll simply paste in some HTML and JavaScript into a page or your layout. For example:

```
<script>
  (function() {
    var cx = '0132moreRandomNumbers:evenMore';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search linktarget="_parent"></gcse:search>
```

This will create a simple text box users can use to search against the content on your site. You can customize various UI options as well.
