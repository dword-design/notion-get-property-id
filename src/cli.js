import dotenv from '@dword-design/dotenv-json-extended'
import { Client } from '@notionhq/client'
import makeCli from 'make-cli'

import api from '.'

dotenv.config()

const client = new Client({ auth: process.env.NOTION_API_TOKEN })
makeCli({
  action: async (databaseId, propertyLabel) => {
    const id = await api(client, databaseId, propertyLabel)
    console.log(id)
  },
  arguments: '<databaseId> <propertyLabel>',
})
