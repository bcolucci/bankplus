const { Record, List } = require('typed-immutable')
const Client = require('./clients/model')
const Account = require('./accounts/model')
const ActionResult = require('./ActionResult')

exports = Record({
  clients: List(Client),
  accounts: List(Account),
  lastActionResult: ActionResult
})
