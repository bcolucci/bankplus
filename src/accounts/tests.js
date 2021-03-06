const test = require('ava')
const sinon = require('sinon')
const uuid = require('uuid')
const { List } = require('immutable')
const createAccount = require('./reducers/createAccount')
const deleteAccount = require('./reducers/deleteAccount')
const creditAccount = require('./reducers/creditAccount')

const uuid1 = 'uuid1'
const clientUUID = 'c-uuid'

test.beforeEach(() => {
  const stub = sinon.stub(uuid, 'v1')
  stub.onCall(0).returns(uuid1)
})

test.afterEach(() => {
  uuid.v1.restore()
})

test('create account', t => {
  const state = createAccount({ clientUUID }, List())
  t.deepEqual(state.first().toJS(), { uuid: uuid1, balance: 0, clientUUID })
})

test('delete account', t => {
  const state = createAccount({ clientUUID }, List())
  const state2 = deleteAccount({ uuid: uuid1 }, state)
  t.deepEqual(state2.toJS(), [])
})

test('credit account', t => {
  const state = createAccount({ clientUUID }, List())
  const state2 = creditAccount({ uuid: uuid1, credit: -10 }, state)
  const state3 = creditAccount({ uuid: uuid1, credit: +55 }, state2)
  t.deepEqual(state3.first().toJS(), { uuid: uuid1, balance: 45, clientUUID })
})
