export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Card Image',
            type: 'image'
        },
        {
            name: 'ctaText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'See More'
        },
        {
            name: 'ctaLink',
            title: 'Button Link',
            type: 'url',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: '1-6 For display order'
        }
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ]
}