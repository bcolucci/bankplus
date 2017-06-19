const uuid = require('uuid')
const Client = require('../model')

module.exports = ({ name }, state) => {
  return state.push(new Client({ uuid: uuid.v1(), name, accountsUUID: [] }))
}
