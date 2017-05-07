const { Record } = require('typed-immutable')

module.exports = Record({
  uuid: Object,
  name: String,
  accountUUID: Object
})
