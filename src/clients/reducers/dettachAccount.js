const noClientFound = require('../errors/noClientFound')

module.exports = (state, { uuid, accountUUID }) => {
  const key = state.findKey((client) => client.uuid === uuid)
  if (key === undefined) {
    throw noClientFound(uuid)
  }
  const updater = client => {
    const key = client.accountsUUID.indexOf(accountUUID)
    if (key === undefined) {
      return client
    }
    return client.set('accountsUUID', client.accountsUUID.delete(key))
  }
  return state.update(key, updater)
}
