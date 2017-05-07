
module.exports.CREATE_CLIENT = 'CREATE_CLIENT'
module.exports.DELETE_CLIENT = 'DELETE_CLIENT'
module.exports.ADD_ACCOUNT = 'ADD_ACCOUNT'
module.exports.REMOVE_ACCOUNT = 'REMOVE_ACCOUNT'

module.exports.createClient = ({ name, accountUUID }) => Object.assign({ type: CREATE_CLIENT, name })
module.exports.deleteClient = ({ uuid }) => Object.assign({ type: DELETE_CLIENT, uuid })
module.exports.addAccount = ({ uuid, accountUUID }) => Object.assign({ type: ADD_ACCOUNT, accountUUID })
module.exports.removeAccount = ({ uuid, accountUUID }) => Object.assign({ type: REMOVE_ACCOUNT, accountUUID })
