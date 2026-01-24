export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Hero Image',
            type: 'image'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        },
        {
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
        },
        {
            name: 'ctaLink',
            title: 'CTA Link',
            type: 'url',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'For banner display order'
        }
    ]
}