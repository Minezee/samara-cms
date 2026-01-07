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
            name: 'address',
            title: 'Address',
            type: 'text'
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
            name: 'mapImage',
            title: 'Map Image',
            type: 'image'
        },
        {
            name: 'coordinates',
            title: 'Location Coordinates',
            type: 'url'
        }
    ]
}