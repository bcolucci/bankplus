
exports.CREATE_ACCOUNT = 'CREATE_ACCOUNT'
exports.createAccount = ({ clientUUID }) => {
  return { type: CREATE_ACCOUNT, clientUUID }
}

exports.DELETE_ACCOUNT = 'DELETE_ACCOUNT'
exports.deleteAccount = ({ uuid }) => {
  return { type: DELETE_ACCOUNT, uuid }
}

exports.CREDIT_ACCOUNT = 'CREDIT_ACCOUNT'
exports.creditAccount = ({ uuid, credit }) => {
  return { type: CREATE_ACCOUNT, uuid, credit }
}
