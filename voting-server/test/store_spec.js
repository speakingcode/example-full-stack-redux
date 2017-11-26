import { Map, fromJS } from 'immutable'
import { expect }      from 'chai'

import makeStore from '../src/store'

describe('store', () => {
  it('is a redux store', () => {
    const store = makeStore()

    expect(store.getState()).to.equal(Map())
  })

  it('is configured with the correct reducer', () => {
    const store = makeStore()

    store.dispatch({
      type: 'SET_ENTREES',
      entries: ['Trainspotting', '28 Days Later']
    })

    expect(store.getState()).to.equal(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }))
  })
})
