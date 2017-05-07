
module.exports.CREATE_CLIENT = 'CREATE_CLIENT'
module.exports.createClient = ({ name, accountUUID }) => {
  return { type: CREATE_CLIENT, name, accountUUID }
}

module.exports.UPDATE_CLIENT = 'UPDATE_CLIENT'
module.exports.createClient = ({ name }) => {
  return { type: UPDATE_CLIENT, name }
}

module.exports.DELETE_CLIENT = 'DELETE_CLIENT'
module.exports.deleteClient = ({ uuid }) => {
  return { type: DELETE_CLIENT, uuid }
}
