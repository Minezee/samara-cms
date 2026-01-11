import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'c8gqkqb1',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
})

async function migrate() {
    const docs = await client.fetch(`*[_type == "samaraDifferenceSection"]`)

    for (const doc of docs) {
        const { _id, _createdAt, _updatedAt, _rev, _type, ...rest } = doc

        await client.create({
            _type: 'difference',
            ...rest,
        })

        console.log(`Migrated: ${_id}`)
    }
}

migrate().catch(console.error)
