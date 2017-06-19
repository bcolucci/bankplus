const test = require('ava')
const sinon = require('sinon')
const uuid = require('uuid')
const { List } = require('immutable')
const createClient = require('./reducers/createClient')
const deleteClient = require('./reducers/deleteClient')
const attachAccount = require('./reducers/attachAccount')
const dettachAccount = require('./reducers/dettachAccount')

const uuid1 = 'uuid1'
const name = 'Brice Colucci'
const accountUUID = 'a-uuid'

test.beforeEach(() => {
  const stub = sinon.stub(uuid, 'v1')
  stub.onCall(0).returns(uuid1)
})

test.afterEach(() => {
  uuid.v1.restore()
})

test('create client', t => {
  const state = createClient({ name }, List())
  t.deepEqual(state.first().toJS(), { uuid: uuid1, name, accountsUUID: [] })
})

test('delete client', t => {
  const state = createClient({ name }, List())
  const state2 = deleteClient({ uuid: uuid1 }, state)
  t.deepEqual(state2.toJS(), [])
})

test('attach account', t => {
  const state = createClient({ name }, List())
  const state2 = attachAccount({ uuid: uuid1, accountUUID }, state)
  t.deepEqual(state2.first().toJS(), { uuid: uuid1, name, accountsUUID: [ accountUUID ] })
})

test('dettach account', t => {
  const state = createClient({ name }, List())
  const state2 = attachAccount({ uuid: uuid1, accountUUID }, state)
  const state3 = dettachAccount({ uuid: uuid1, accountUUID }, state2)
  t.deepEqual(state3.first().toJS(), { uuid: uuid1, name, accountsUUID: [] })
})
