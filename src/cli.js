import { Client } from '@notionhq/client'
import dotenv from '@dword-design/dotenv-json-extended'

dotenv.config()

const client = new Client({ auth: process.env.NOTION_API_TOKEN })