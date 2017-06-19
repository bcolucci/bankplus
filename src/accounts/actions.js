
const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
const DELETE_ACCOUNT = 'DELETE_ACCOUNT'
const CREDIT_ACCOUNT = 'CREDIT_ACCOUNT'

module.exports.CREATE_ACCOUNT = CREATE_ACCOUNT
module.exports.DELETE_ACCOUNT = DELETE_ACCOUNT
module.exports.CREDIT_ACCOUNT = CREDIT_ACCOUNT

module.exports.ACTIONS = [
  CREATE_ACCOUNT,
  DELETE_ACCOUNT,
  CREDIT_ACCOUNT
]

module.exports.createAccount = ({ clientUUID }) => Object.assign({ type: CREATE_ACCOUNT, clientUUID })
module.exports.deleteAccount = ({ uuid }) => Object.assign({ type: DELETE_ACCOUNT, uuid })
module.exports.creditAccount = ({ uuid, credit }) => Object.assign({ type: CREATE_ACCOUNT, uuid, credit })
