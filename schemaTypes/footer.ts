import { title } from 'node:process';

export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'brand',
            title: 'Brand',
            type: 'object',
            fields: [
                {
                    name: 'logo',
                    title: 'Logo',
                    type: 'image',
                    options: { hotspot: true },
                },
                {
                    name: 'name',
                    title: 'Brand Name (For SEO)',
                    type: 'string',
                    initialValue: 'Samara',
                },
                {
                    name: 'description',
                    title: 'Brand Description',
                    type: 'string',
                },
                {
                    name: 'ctaText',
                    title: 'CTA Text',
                    type: 'string',
                    initialValue: 'Order Now',
                },
                {
                    name: 'ctaLink',
                    title: 'CTA Link',
                    type: 'string',
                },
            ],
        },

        {
            name: 'columns',
            title: 'Footer Columns',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Column Title',
                            type: 'string',
                        },
                        {
                            name: 'links',
                            title: 'Links',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'label',
                                            title: 'Label',
                                            type: 'string',
                                        },
                                        {
                                            name: 'url',
                                            title: 'URL',
                                            type: 'string',
                                        },
                                        {
                                            name: 'icon',
                                            title: 'Icon (optional)',
                                            type: 'image',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'brand.name',
            media: 'brand.logo',
            subtitle: 'brand.description',
        },
    }
};
