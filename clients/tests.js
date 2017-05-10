const test = require('ava')
const { List } = require('immutable')
const createClient = require('./reducers/createClient')
const deleteClient = require('./reducers/deleteClient')

const uuid1 = 'uuid1'
const name = 'Brice Colucci'

test('create client', t => {
  const state1 = List()
  const state2 = createClient(state1, { UUIDGenerator: () => uuid1, name })
  t.deepEqual(state2.first().toJS(), { uuid: uuid1, name, accountsUUID: [] })
})

test('delete client', t => {
  const state1 = List()
  const state2 = createClient(state1, { UUIDGenerator: () => uuid1, name })
  const state3 = deleteClient(state2, { uuid: uuid1 })
  t.deepEqual(state3.toJS(), [])
})

test('add account', t => {
  //TODO
  t.pass()
})

test('remove account', t => {
  //TODO
  t.pass()
})
