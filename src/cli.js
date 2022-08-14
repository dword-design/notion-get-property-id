import { Client } from '@notionhq/client'
import dotenv from '@dword-design/dotenv-json-extended'
import makeCli from 'make-cli'
import api from '.'

dotenv.config()

const client = new Client({ auth: process.env.NOTION_API_TOKEN })

makeCli({
  arguments: '<databaseId> <propertyLabel>',
  action: async (databaseId, propertyLabel) => {
    const id = await api(client, databaseId, propertyLabel)
    console.log(id)
  },
})
