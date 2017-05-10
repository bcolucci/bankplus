const ApplicationState = require('./ApplicationState')

module.exports = () => new ApplicationState({
  clients: [],
  accounts: [],
  lastActionResult: null
})
