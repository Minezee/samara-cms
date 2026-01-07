export default {
    name: 'visitUs',
    title: 'Visit Us',
    type: 'document',
    options: {
        singleton: true,
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'VISIT US'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text'
        },
        {
            name: 'whatsapp',
            title: 'WhatsApp Number',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'coordinates',
            title: 'Location Coordinates',
            type: 'url'
        }
    ]
}