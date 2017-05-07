const test = require('ava')
const createInitialState = require('../createInitialState')
const reducers = require('./reducers')

test('create client', t => {
  const state1 = createInitialState()
  const state2 = reducers.createClient(state1, { UUIDGenerator: () => 'uuid1', name: 'Brice Colucci' })
  t.deepEqual(state2.clients.first().toJS(), { uuid: 'uuid1', name: 'Brice Colucci', accountsUUID: [] })
})

test('delete client', t => {
  //TODO
  t.pass()
})

test('add account', t => {
  //TODO
  t.pass()
})

test('remove account', t => {
  //TODO
  t.pass()
})
