import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from "@sanity/code-input" 
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'mww',
  projectId: 'z8x15pky',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    codeInput()
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
