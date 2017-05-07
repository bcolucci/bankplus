const { Record } = require('typed-immutable')

module.exports = Record({
  uuid: Object,
  balance: Number,
  clientUUID: Object
})
