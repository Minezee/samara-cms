export default {
    name: 'productSection',
    title: 'Product Section',
    type: 'document',
    options: {
        singleton: true,
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ]
}