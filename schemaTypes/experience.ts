export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Misal: COLLECTIONS, BOUTIQUES & EXPERIENCES'
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
            description: 'Link ke section lain atau external'
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: '1-6 untuk urutan tampilan'
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