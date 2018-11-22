// src/plugins/source-storyblok/index.js
const StoryblokClient = require('storyblok-js-client');

class StoryblokSource {
  static defaultOptions() {
    return {
      typeName: 'StoryblokSource',
      accessToken: undefined,
    };
  }

  constructor(api, options) {
    this.options = options;
    api.loadSource(args => this.fetchContent(args));
  }

  async fetchContent(store) {
    const { addContentType } = store;
    const { accessToken } = this.options;

    const client = new StoryblokClient({ accessToken });
    const response = await client.get('cdn/stories', {
      // Only load stories of type `landing_page`.
      filter_query: {
        component: {
          in: 'landing_page',
        },
      },
    });

    // Create a new Gridsome content type
    // for `landing_page` stories.
    const landingPages = addContentType({
      typeName: 'LandingPage',
    });

    // Create new entries for every story.
    response.data.stories.forEach((story) => {
      landingPages.addNode({
        fields: {
          intro: story.content.intro,
          mediaBlocks: story.content.media_blocks,
          teasers: story.content.teasers,
        },
        path: story.slug,
        title: story.content.title,
      });
    });
  }
}

module.exports = StoryblokSource;
