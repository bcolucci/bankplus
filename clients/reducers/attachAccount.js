const ActionResult = require('../../ActionResult')

module.exports = (state, { uuid, accountUUID }) => {
  const key = state.clients.findKey((client) => client.uuid === uuid)
  if (key === undefined) {
    const error = `No client found with UUID '${uuid}'.`
    return state.set('lastActionResult', new ActionResult({ error }))
  }
  const updater = client => {
    if (client.accountsUUID.includes(accountUUID)) {
      return client
    }
    return client.set('accountsUUID', client.accountsUUID.push(accountUUID))
  }
  return state
    .set('accounts', state.clients.update(key, updater))
    .set('lastActionResult', new ActionResult({ result: { key, uuid } }))
}
