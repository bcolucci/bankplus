const Client = require('../model')
const ActionResult = require('../../ActionResult')

module.exports = (state, { uuid }) => {
  const key = state.clients.findKey((client) => client.uuid === uuid)
  if (key === undefined) {
    const error = `No client found with UUID '${uuid}'.`
    return state.set('lastActionResult', new ActionResult({ error }))
  }
  return state
    .set('clients', state.clients.delete(key))
    .set('lastActionResult', new ActionResult({ result: { key, uuid } }))
}
