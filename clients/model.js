const { Record } = require('typed-immutable')

exports = Record({
  uuid: String,
  name: String,
  accountUUID: String
})
