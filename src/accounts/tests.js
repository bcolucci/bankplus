const test = require('ava')
const { List } = require('immutable')
const createAccount = require('./reducers/createAccount')
const deleteAccount = require('./reducers/deleteAccount')
const creditAccount = require('./reducers/creditAccount')

const uuid1 = 'uuid1'
const clientUUID = 'c-uuid'
const UUIDGenerator = () => uuid1

test('create account', t => {
  const state = createAccount(List(), { UUIDGenerator, clientUUID })
  t.deepEqual(state.first().toJS(), { uuid: uuid1, balance: 0, clientUUID })
})

test('delete account', t => {
  const state = createAccount(List(), { UUIDGenerator, clientUUID })
  const state2 = deleteAccount(state, { uuid: uuid1 })
  t.deepEqual(state2.toJS(), [])
})

test('credit account', t => {
  const state = createAccount(List(), { UUIDGenerator, clientUUID })
  const state2 = creditAccount(state, { uuid: uuid1, credit: -10 })
  const state3 = creditAccount(state2, { uuid: uuid1, credit: +55 })
  t.deepEqual(state3.first().toJS(), { uuid: uuid1, balance: 45, clientUUID })
})
