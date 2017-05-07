const { Record, List } = require('typed-immutable')
const Client = require('./clients/model')
const Account = require('./accounts/model')

module.exports = Record({
  clients: List(Client),
  accounts: List(Account),
  lastActionResult: Object
})
