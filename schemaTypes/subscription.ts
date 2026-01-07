import { Rule } from 'sanity'

export default {
    name: 'subscription',
    title: 'Newsletter Subscriptions',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email Address',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().email()
        },
        {
            name: 'subscribedAt',
            title: 'Subscribed At',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Active', value: 'active' },
                    { title: 'Unsubscribed', value: 'unsubscribed' }
                ],
                layout: 'radio'
            },
            initialValue: 'active'
        },
        {
            name: 'source',
            title: 'Source',
            type: 'string',
            description: 'From which page user subscribed',
            initialValue: 'homepage'
        }
    ],
    preview: {
        select: {
            title: 'email',
            subtitle: 'subscribedAt',
            status: 'status'
        },
        prepare({ title, subtitle, status }: { title: string, subtitle: string, status: string }) {
            return {
                title: title,
                subtitle: `${new Date(subtitle).toLocaleDateString()} - ${status}`
            }
        }
    }
}