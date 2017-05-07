const Account = require('./model')
const ActionResult = require('../ActionResult')

const findByUUID = uuid => (account) => account.uuid === uuid
const noAccountFoundWithUUID = uuid => `No account found with UUID '${uuid}'.`

module.exports.createAccount = (state, { UUIDGenerator, clientUUID }) => {
  const uuid = UUIDGenerator()
  const balance = 0
  const account = new Account({ uuid, balance, clientUUID })
  return state
    .set('accounts', state.accounts.push(account))
    .set('lastActionResult', new ActionResult({ result: { account } }))
}

module.exports.deleteAccount = (state, { uuid }) => {
  const key = state.accounts.findKey(findByUUID(uuid))
  if (key === undefined) {
    const error = noAccountFoundWithUUID(uuid)
    return state.set('lastActionResult', new ActionResult({ error }))
  }
  return state
    .set('accounts', state.accounts.delete(key))
    .set('lastActionResult', new ActionResult({ result: { key, uuid } }))
}

module.exports.creditAccount = (state, { uuid, credit }) => {
  const key = state.accounts.findKey(findByUUID(uuid))
  if (key === undefined) {
    const error = noAccountFoundWithUUID(uuid)
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
