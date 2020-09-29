const { query } = require('./utilities/hasura')
exports.handler = async () => {
  const appreciations = await query({
    query: `
    {
      appreciations {
        what
        why
        express
        action
      }
    }
    `
  })
  return {
    statusCode: 200,
    body: JSON.stringify(appreciations)
  }
}