const actions = require('./actions')
const createAccount = require('./reducers/createAccount')
const deleteAccount = require('./reducers/deleteAccount')
const creditAccount = require('./reducers/creditAccount')

module.exports = (action, state) => {
  switch (action.type) {
    case actions.CREATE_ACCOUNT:
      return createAccount(state, action)
    case actions.DELETE_ACCOUNT:
      return deleteAccount(state, action)
    case actions.CREDIT_ACCOUNT:
      return creditAccount(state, action)
  }
  return state
}
