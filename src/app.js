const accounts = require('./accounts')
const clients = require('./clients')
const createAppState = require('./createAppState')

const reducer = (action, state = createAppState()) => {
  console.log('app reducer', action)
  if (action === undefined || action.type.substr(0, 2) === '@@') {
    return state
  }
  if (accounts.actions.ACTIONS.includes(action.type)) {
    return state.set('accounts', accounts.reducer(action, state.accounts))
  }
  if (clients.actions.ACTIONS.includes(action.type)) {
    return state.set('clients', clients.reducer(action, state.clients))
  }
  return state
}

module.exports = { accounts, clients, reducer }
