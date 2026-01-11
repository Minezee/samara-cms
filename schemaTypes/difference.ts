import { Rule } from 'sanity';

export default {
    name: 'difference',
    title: 'Difference Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'The Samara Difference',
        },
        {
            name: 'items',
            title: 'Main Values',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'differenceItem',
                    fields: [
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            description: `Format: png orwebp preferred.`,
                            options: { hotspot: true },
                        },
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 4,
                        },
                    ],
                    preview: {
                        select: {
                            title: 'description',
                            media: 'icon',
                        },
                    },
                },
            ],
            validation: (Rule: Rule) => Rule.min(2).max(3),
        },
        {
            name: 'benefits',
            title: 'Bottom Benefits Bar',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'benefitItem',
                    fields: [
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            options: { hotspot: true },
                        },
                        {
                            name: 'text',
                            title: 'Text',
                            type: 'string',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'text',
                            media: 'icon',
                        },
                    },
                },
            ],
            validation: (Rule: Rule) => Rule.min(2).max(3),
        },
    ],
};
