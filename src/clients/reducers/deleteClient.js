const noClientFound = require('../errors/noClientFound')

module.exports = ({ uuid }, state) => {
  const key = state.findKey((client) => client.uuid === uuid)
  if (key === undefined) {
    throw noClientFound(uuid)
  }
  return state.delete(key)
}
