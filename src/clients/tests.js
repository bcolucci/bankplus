const test = require('ava')
const { List } = require('immutable')
const createClient = require('./reducers/createClient')
const deleteClient = require('./reducers/deleteClient')
const attachAccount = require('./reducers/attachAccount')
const dettachAccount = require('./reducers/dettachAccount')

const uuid1 = 'uuid1'
const name = 'Brice Colucci'
const accountUUID = 'a-uuid'
const UUIDGenerator = () => uuid1

test('create client', t => {
  const state = createClient(List(), { UUIDGenerator, name })
  t.deepEqual(state.first().toJS(), { uuid: uuid1, name, accountsUUID: [] })
})

test('delete client', t => {
  const state = createClient(List(), { UUIDGenerator, name })
  const state2 = deleteClient(state, { uuid: uuid1 })
  t.deepEqual(state2.toJS(), [])
})

test('attach account', t => {
  const state = createClient(List(), { UUIDGenerator, name })
  const state2 = attachAccount(state, { uuid: uuid1, accountUUID })
  t.deepEqual(state2.first().toJS(), { uuid: uuid1, name, accountsUUID: [ accountUUID ] })
})

test('dettach account', t => {
  const state = createClient(List(), { UUIDGenerator, name })
  const state2 = attachAccount(state, { uuid: uuid1, accountUUID })
  const state3 = dettachAccount(state2, { uuid: uuid1, accountUUID })
  t.deepEqual(state3.first().toJS(), { uuid: uuid1, name, accountsUUID: [] })
})
