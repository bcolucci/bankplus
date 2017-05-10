const { Record, List } = require('typed-immutable')

module.exports = Record({ uuid: String, name: String, accountsUUID: List(String) })
