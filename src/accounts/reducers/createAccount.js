const Account = require('../model')

module.exports = ({ UUIDGenerator, clientUUID }, state) => {
  return state.push(new Account({ uuid: UUIDGenerator(), balance: 0, clientUUID }))
}
