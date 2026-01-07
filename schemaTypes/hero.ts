export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    options: {
        singleton: true,
    },
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
    ]
}