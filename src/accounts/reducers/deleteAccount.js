const noAccountFound = require('../errors/noAccountFound')

module.exports = ({ uuid }, state) => {
  const key = state.findKey((account) => account.uuid === uuid)
  if (key === undefined) {
    throw noAccountFound(uuid)
  }
  return state.delete(key)
}
