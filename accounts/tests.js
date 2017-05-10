const test = require('ava')
const { List } = require('immutable')
const createAccount = require('./reducers/createAccount')
const deleteAccount = require('./reducers/deleteAccount')
const creditAccount = require('./reducers/creditAccount')

const uuid1 = 'uuid1'
const clientUUID = 'c-uuid'

test('create account', t => {
  const state1 = List()
  const state2 = createAccount(state1, { UUIDGenerator: () => uuid1, clientUUID })
  t.deepEqual(state2.first().toJS(), { uuid: uuid1, balance: 0, clientUUID })
})

test('delete account', t => {
  const state1 = List()
  const state2 = createAccount(state1, { UUIDGenerator: () => uuid1, clientUUID })
  const state3 = deleteAccount(state2, { uuid: uuid1 })
  t.deepEqual(state3.toJS(), [])
})

test('credit account', t => {
  const state1 = List()
  const state2 = createAccount(state1, { UUIDGenerator: () => uuid1, clientUUID })
  const state3 = creditAccount(state2, { uuid: uuid1, credit: -10 })
  const state4 = creditAccount(state3, { uuid: uuid1, credit: +55 })
  t.deepEqual(state4.first().toJS(), { uuid: uuid1, balance: 45, clientUUID })
})
