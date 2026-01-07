import { Rule } from 'sanity';

export default {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Harga dalam Rupiah'
        },
        {
            name: 'shopeeLink',
            title: 'Shopee Link',
            type: 'url',
            validation: (Rule: Rule) => Rule.required(),
            description: 'Link produk di Shopee'
        },
        {
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number'
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'price'
        },
        prepare(selection: { title: string; media: any; subtitle: number }) {
            const { title, media, subtitle } = selection
            return {
                title,
                media,
                subtitle: subtitle ? `Rp ${subtitle.toLocaleString('id-ID')}` : 'No price'
            }
        }
    }
}