const actions = require('./actions')
const createClient = require('./reducers/createClient')
const deleteClient = require('./reducers/deleteClient')

module.exports = (action, state) => {
  switch (action.type) {
    case actions.CREATE_CLIENT:
      return createClient(state, action)
    case actions.DELETE_CLIENT:
      return deleteClient(state, action)
  }
  return state
}
