
const accounts = require('./accounts')
const clients = require('./clients')
const createAppState = require('./createAppState')

const initialState = createAppState()

console.log(JSON.stringify(initialState, null, 2))
console.log(accounts, clients)

//TODO
