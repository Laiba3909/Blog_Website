import { Rule } from '@sanity/types';
export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: (Rule:Rule) => Rule.max(20).warning('Title should not exceed 100 characters.')
      },
      {
        name: 'content',
        type: 'text',
        title: 'Detailed Content',
       
      },
     
      {
        name: 'summary',
        type: 'text',
        title: 'Summary',
        validation: (Rule:Rule) => Rule.max(100).warning('Summary should not exceed 100 characters.')
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, 
        },
      },

      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title', 
          maxLength: 200,
        },
      },
    ],
  };
  