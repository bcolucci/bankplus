const Account = require('../model')
const ActionResult = require('../../ActionResult')

module.exports = (state, { uuid }) => {
  const key = state.accounts.findKey((account) => account.uuid === uuid)
  if (key === undefined) {
    const error = `No account found with UUID '${uuid}'.`
    return state.set('lastActionResult', new ActionResult({ error }))
  }
  return state
    .set('accounts', state.accounts.delete(key))
    .set('lastActionResult', new ActionResult({ result: { key, uuid } }))
}
