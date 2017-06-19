const uuid = require('uuid')
const Account = require('../model')

module.exports = ({ clientUUID }, state) => {
  return state.push(new Account({ uuid: uuid.v1(), balance: 0, clientUUID }))
}
