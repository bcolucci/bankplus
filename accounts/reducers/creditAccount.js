const Account = require('../model')
const ActionResult = require('../../ActionResult')

module.exports = (state, { uuid, credit }) => {
  const key = state.accounts.findKey((account) => account.uuid === uuid)
  if (key === undefined) {
    const error = `No account found with UUID '${uuid}'.`
    return state.set('lastActionResult', new ActionResult({ error }))
  }
  let newCredit = null
  return state
    .set('accounts', state.accounts.update(key, (account) => {
      newCredit = account.balance + credit
      return account.set('balance', newCredit)
    }))
    .set('lastActionResult', new ActionResult({ result: { uuid, credit, newCredit } }))
}
