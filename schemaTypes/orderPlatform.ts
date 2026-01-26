import { Rule } from 'sanity';

export default {
    name: 'fastOrder',
    title: 'Navbar Fast Order',
    type: 'document',
    options: {
        singleton: true,
    },
    fields: [
        {
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
        },
        {
            name: 'orderPlatform',
            title: 'Order Platform',
            type: 'array',
            validation: (Rule: Rule) => Rule.min(1),
            of: [{
                name: 'platform',
                title: 'Platform',
                type: 'object',
                fields: [
                    {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                    },
                    {
                        name: 'name',
                        title: 'Platform Name (For SEO)',
                        type: 'string',
                    },
                    {
                        name: 'platformLink',
                        title: 'Platform Link',
                        type: 'string',
                    },
                ],
            },
            ]
        },
    ]
}