
exports.CREATE_CLIENT = 'CREATE_CLIENT'
exports.createClient = ({ name, accountUUID }) => {
  return { type: CREATE_CLIENT, name, accountUUID }
}

exports.UPDATE_CLIENT = 'UPDATE_CLIENT'
exports.createClient = ({ name }) => {
  return { type: UPDATE_CLIENT, name }
}

exports.DELETE_CLIENT = 'DELETE_CLIENT'
exports.deleteClient = ({ uuid }) => {
  return { type: DELETE_CLIENT, uuid }
}
