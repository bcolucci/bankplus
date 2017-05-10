const { Record, List } = require('typed-immutable')
const Client = require('./clients/model')
const Account = require('./accounts/model')

const model = Record({
  clients: List(Client),
  accounts: List(Account),
  lastActionResult: Object
})

const createInitialState = () => {
  return new ApplicationState({
    clients: [],
    accounts: [],
    lastActionResult: null
  })
}

module.exports = { model, createInitialState }
