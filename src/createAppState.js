const { Record, List } = require('typed-immutable')
const Client = require('./clients/model')
const Account = require('./accounts/model')

const clients = List(Client)
const accounts = List(Account)

const State = Record({ clients, accounts, lastActionResult: Object })

module.exports = () => {
  return new State({
    clients: [],
    accounts: [],
    lastActionResult: null
  })
}
