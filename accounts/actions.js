
module.exports.CREATE_ACCOUNT = 'CREATE_ACCOUNT'
module.exports.createAccount = ({ clientUUID }) => {
  return { type: CREATE_ACCOUNT, clientUUID }
}

module.exports.DELETE_ACCOUNT = 'DELETE_ACCOUNT'
module.exports.deleteAccount = ({ uuid }) => {
  return { type: DELETE_ACCOUNT, uuid }
}

module.exports.CREDIT_ACCOUNT = 'CREDIT_ACCOUNT'
module.exports.creditAccount = ({ uuid, credit }) => {
  return { type: CREATE_ACCOUNT, uuid, credit }
}
