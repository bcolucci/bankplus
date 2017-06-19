const test = require('ava')
const { createStore } = require('redux')
const { List } = require('immutable')
const { accounts, clients, reducer } = require('./app')

const name = 'Brice Colucci'
const clientUUID = 'c-uuid'

let unsubscribe = null

test.after(t => {
  unsubscribe()
})

test('create account', t => {

  const store = createStore(reducer)

  unsubscribe = store.subscribe(() => {
    console.log('state changed', store.getState())
  })

  store.dispatch(clients.actions.createClient({ name }))
  // store.dispatch(accounts.actions.createAccount({ clientUUID }))
  // console.log(JSON.stringify(store.getState(), null, 2))
  t.pass()
})
