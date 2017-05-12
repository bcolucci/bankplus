const actions = require('./actions')
const createAccount = require('./reducers/createAccount')
const deleteAccount = require('./reducers/deleteAccount')
const creditAccount = require('./reducers/creditAccount')

module.exports = (action, state) => {
  switch (action.type) {
    case actions.CREATE_ACCOUNT:
      return createAccount(action, state)
    case actions.DELETE_ACCOUNT:
      return deleteAccount(action, state)
    case actions.CREDIT_ACCOUNT:
      return creditAccount(action, state)
  }
  return state
}
