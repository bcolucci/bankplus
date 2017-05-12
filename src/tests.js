const test = require('ava')
const { createStore } = require('redux')
const { List } = require('immutable')
const app = require('./app')

test('create account', t => {
  const store = createStore(app.reducer)
  const unsubscribe = store.subscribe(state => console.log(JSON.stringify(state, null, 2)))
  //TODO
  unsubscribe()
  t.pass()
})
