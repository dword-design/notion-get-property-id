export default async (client, databaseId, propertyLabel) => {
  const response = await client.databases.retrieve({ database_id: databaseId })
  return response.properties[propertyLabel].id
}
