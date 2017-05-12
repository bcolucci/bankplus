const noAccountFound = require('../errors/noAccountFound')

module.exports = ({ uuid, credit }, state) => {
  const key = state.findKey((account) => account.uuid === uuid)
  if (key === undefined) {
    throw noAccountFound(uuid)
  }
  let newCredit = null
  const updater = account => {
    newCredit = account.balance + credit
    return account.set('balance', newCredit)
  }
  return state.update(key, updater)
}
