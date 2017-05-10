const Account = require('../model')

module.exports = (state, { UUIDGenerator, clientUUID }) => {
  return state.push(new Account({ uuid: UUIDGenerator(), balance: 0, clientUUID }))
}
