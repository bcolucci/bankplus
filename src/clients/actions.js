
const CREATE_CLIENT = 'CREATE_CLIENT'
const DELETE_CLIENT = 'DELETE_CLIENT'
const ATTACH_ACCOUNT = 'ATTACH_ACCOUNT'
const DETTACH_ACCOUNT = 'DETTACH_ACCOUNT'

module.exports.CREATE_CLIENT = CREATE_CLIENT
module.exports.DELETE_CLIENT = DELETE_CLIENT
module.exports.ATTACH_ACCOUNT = ATTACH_ACCOUNT
module.exports.DETTACH_ACCOUNT = DETTACH_ACCOUNT

module.exports.ACTIONS = [
  CREATE_CLIENT,
  DELETE_CLIENT,
  ATTACH_ACCOUNT,
  DETTACH_ACCOUNT
]

module.exports.createClient = ({ name }) => Object.assign({ type: CREATE_CLIENT, name })
module.exports.deleteClient = ({ uuid }) => Object.assign({ type: DELETE_CLIENT, uuid })
module.exports.attachAccount = ({ uuid, accountUUID }) => Object.assign({ type: ATTACH_ACCOUNT, accountUUID })
module.exports.dettachAccount = ({ uuid, accountUUID }) => Object.assign({ type: DETTACH_ACCOUNT, accountUUID })
