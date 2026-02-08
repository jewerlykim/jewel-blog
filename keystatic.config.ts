import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'slug',
      path: 'content/posts/*',
      format: { data: 'json' },
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        slug: fields.slug({
          name: {
            label: 'Slug',
          },
        }),
        date: fields.date({
          label: 'Date',
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'AI Insight', value: 'ai-insight' },
            { label: 'Business', value: 'business' },
            { label: 'Projects', value: 'projects' },
            { label: 'Movies', value: 'movies' },
            { label: 'General', value: 'general' },
          ],
          defaultValue: 'general',
        }),
        tags: fields.text({
          label: 'Tags',
          description: 'Comma-separated tags',
        }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'slug',
      path: 'content/projects/*',
      format: { data: 'json' },
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        slug: fields.slug({
          name: {
            label: 'Slug',
          },
        }),
        subtitle: fields.text({
          label: 'Subtitle',
        }),
        videoUrl: fields.url({
          label: 'Video URL',
        }),
        techStack: fields.text({
          label: 'Tech Stack',
          description: 'Comma-separated technologies',
        }),
        liveUrl: fields.url({
          label: 'Live URL',
        }),
        githubUrl: fields.url({
          label: 'GitHub URL',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          description: 'Show on homepage',
        }),
        order: fields.integer({
          label: 'Display Order',
          validation: { min: 0 },
        }),
        description: fields.markdoc({
          label: 'Description',
        }),
      },
    }),
  },
});
