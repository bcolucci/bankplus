const { Record } = require('typed-immutable')

exports = Record({
  uuid: String,
  balance: Number,
  clientUUID: String
})
