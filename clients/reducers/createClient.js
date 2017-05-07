const Client = require('../model')
const ActionResult = require('../../ActionResult')

module.exports = (state, { UUIDGenerator, name }) => {
  const client = new Client({ uuid: UUIDGenerator(), name, accountsUUID: [] })
  return state
    .set('clients', state.clients.push(client))
    .set('lastActionResult', new ActionResult({ result: { client } }))
}
