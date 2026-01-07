export default {
    name: 'aboutUs',
    title: 'About Us',
    type: 'document',
    options: {
        singleton: true,
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'FROM INDONESIAN CACAO TO...'
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            description: 'Deskripsi panjang di bawah title'
        },
        {
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
            initialValue: 'See more'
        },
        {
            name: 'ctaLink',
            title: 'CTA Link',
            type: 'url'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }
    ]
}