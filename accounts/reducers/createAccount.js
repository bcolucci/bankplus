const Account = require('../model')
const ActionResult = require('../../ActionResult')

module.exports = (state, { UUIDGenerator, clientUUID }) => {
  const uuid = UUIDGenerator()
  const balance = 0
  const account = new Account({ uuid, balance, clientUUID })
  return state
    .set('accounts', state.accounts.push(account))
    .set('lastActionResult', new ActionResult({ result: { account } }))
}
