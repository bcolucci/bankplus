const noClientFound = require('../errors/noClientFound')

module.exports = (state, { uuid, accountUUID }) => {
  const key = state.findKey((client) => client.uuid === uuid)
  if (key === undefined) {
    throw noClientFound(uuid)
  }
  const updater = client => {
    if (client.accountsUUID.includes(accountUUID)) {
      return client
    }
    return client.set('accountsUUID', client.accountsUUID.push(accountUUID))
  }
  return state.update(key, updater)
}
