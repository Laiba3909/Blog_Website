import { Rule } from '@sanity/types';
export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, 
        },
        description: 'Upload your logo image here',
      },
      {
        name: 'colorpick',
        title: 'Text Color',
        type: 'string',  
        description: 'Enter a hex color code for the text (e.g., #ffffff for white)',
        validation: (Rule: Rule) =>
          Rule.regex(/^#[0-9A-F]{6}$/i).warning('Enter a valid hex color code'),
        options: {
          disableAlpha: true,  
        }
      },
      {
        name: 'navigationLinks',
        title: 'Navigation Links',
        type: 'array',
        of: [
          {
            title: 'Link',
            type: 'object',
            fields: [
              {
                name: 'label',
                title: 'Link Label',
                type: 'string',
                description: 'Text that will appear for the link (e.g., "Home")',
              }
              ,
              {
                name: 'linkname',
                title: 'Link Name',
                type: 'string',
                description: 'Link that will appear navigation links (e.g., "home","about",e.t.c)',
              }
            ],
          },
        ],
        description: 'Add navigation links for the header, e.g., Home, About, Posts, etc.',
      },
    ],
  };
  