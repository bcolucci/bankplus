const Client = require('../model')

module.exports = ({ UUIDGenerator, name }, state) => {
  return state.push(new Client({ uuid: UUIDGenerator(), name, accountsUUID: [] }))
}
