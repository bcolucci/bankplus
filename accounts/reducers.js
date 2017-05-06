const uuid = require('uuid/v1')
const Account = require('./model')
const ActionResult = require('../ActionResult')

const findByUUID = uuid => (account) => account.uuid === uuid
const noAccountFoundWithUUID = uuid => `No Account found with UUID '${uuid}'.`

exports.createAccount = (state, { clientUUID }) => {
  // for now, one account per client
  if (state.accounts.find((account) => account.clientUUID === clientUUID)) {
    const error = `Account with client UUID '${clientUUID}' already exists.`
    return state.set('lastActionResult', new ActionResult({ error }))
  }
  const account = new Account({
    uuid: uuid(),
    balance: 0,
    clientUUID
  })
  return state
    .set('accounts', state.accounts.push(account))
    .set('lastActionResult', new ActionResult({ result: { account } }))
}

exports.deleteAccount = (state, { uuid }) => {
  const key = state.accounts.findKey(findByUUID(uuid))
  if (! key) {
    return state.set('lastActionResult', new ActionResult({ error: noAccountFoundWithUUID(uuid) }))
  }
  return state
    .set('accounts', state.accounts.delete(key))
    .set('lastActionResult', new ActionResult({ result: { key, uuid } }))
}

exports.creditAccount = (state, { uuid, credit }) => {
  const key = state.accounts.findKey(findByUUID(uuid))
  if (! key) {
    return state.set('lastActionResult', new ActionResult({ error: noAccountFoundWithUUID(uuid) }))
  }
  let newCredit = null
  return state
    .set('accounts', state.accounts.update(key, (account) => {
      newCredit = account.balance + credit
      return account.set('balance', newCredit)
    }))
    .set('lastActionResult', new ActionResult({ result: { uuid, credit, newCredit } }))
}
