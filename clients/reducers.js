const Client = require('./model')
const ActionResult = require('../ActionResult')

const findByUUID = uuid => (client) => client.uuid === uuid
const noClientFoundWithUUID = uuid => `No client found with UUID '${uuid}'.`

module.exports.createClient = (state, { UUIDGenerator, name }) => {
  const client = new Client({ uuid: UUIDGenerator(), name, accountsUUID: [] })
  return state
    .set('clients', state.clients.push(client))
    .set('lastActionResult', new ActionResult({ result: { client } }))
}

module.exports.deleteClient = (state, { uuid }) => {
  const key = state.clients.findKey(findByUUID(uuid))
  if (key === undefined) {
    const error = noClientFoundWithUUID(uuid)
    return state.set('lastActionResult', new ActionResult({ error }))
  }
  return state
    .set('clients', state.clients.delete(key))
    .set('lastActionResult', new ActionResult({ result: { key, uuid } }))
}

module.exports.addAccount = (state, { uuid, accountUUID }) => {
  //TODO
}

module.exports.removeAccount = (state, { uuid, accountUUID }) => {
  //TODO
}
