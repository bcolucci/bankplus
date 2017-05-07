const test = require('ava')
const R = require('ramda')
const { fromJS } = require('immutable')
const createInitialState = require('../createInitialState')
const reducers = require('./reducers')

test('create account', t => {
  const state1 = createInitialState()
  const state2 = reducers.createAccount(state1, { UUIDGenerator: R.always(1), clientUUID: 1 })
  const state3 = reducers.createAccount(state2, { UUIDGenerator: R.always(2), clientUUID: 1 })
  t.deepEqual(state3.accounts.toJS(), [
    {
      uuid: 1,
      balance: 0,
      clientUUID: 1
    },
    {
      uuid: 2,
      balance: 0,
      clientUUID: 1
    }
  ])
})
