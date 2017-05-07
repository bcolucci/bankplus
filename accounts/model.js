const { Record } = require('typed-immutable')

module.exports = Record({ uuid: String, balance: Number, clientUUID: String })
