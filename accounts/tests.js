const test = require('ava')
const createInitialState = require('../createInitialState')
const reducers = require('./reducers')

const clientUUID = 'c-uuid'

test('create account', t => {
  const state1 = createInitialState()
  const state2 = reducers.createAccount(state1, { UUIDGenerator: () => 'uuid1', clientUUID })
  t.deepEqual(state2.accounts.first().toJS(), { uuid: 'uuid1', balance: 0, clientUUID })
})

test('delete account', t => {
  const state1 = createInitialState()
  const state2 = reducers.createAccount(state1, { UUIDGenerator: () => 'uuid1', clientUUID })
  const state3 = reducers.deleteAccount(state2, { uuid: 'uuid1' })
  t.deepEqual(state3.accounts.toJS(), [])
})

test('credit account', t => {
  const state1 = createInitialState()
  const state2 = reducers.createAccount(state1, { UUIDGenerator: () => 'uuid1', clientUUID })
  const state3 = reducers.creditAccount(state2, { uuid: 'uuid1', credit: -10 })
  const state4 = reducers.creditAccount(state3, { uuid: 'uuid1', credit: +55 })
  t.deepEqual(state4.accounts.first().toJS(), { uuid: 'uuid1', balance: 45, clientUUID })
})
