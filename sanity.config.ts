import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { singletonTools } from 'sanity-plugin-singleton-management'

export default defineConfig({
  name: 'default',
  title: 'samara-project',

  projectId: 'c8gqkqb1',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), singletonTools()],

  schema: {
    types: schemaTypes,
  },
})
