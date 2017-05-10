const Client = require('../model')

module.exports = (state, { UUIDGenerator, name }) => {
  return state.push(new Client({ uuid: UUIDGenerator(), name, accountsUUID: [] }))
}
