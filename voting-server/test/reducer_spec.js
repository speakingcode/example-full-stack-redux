import { Map, fromJS } from 'immutable'
import { expect }      from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {
  it('has an initial state', () => {
    let action = { type: 'SET_ENTREES', entries: ['Trainspotting'] }
    let nextState = reducer(undefined, action)

    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting']
    }))
  })

  it('handles SET_ENTRIES', () => {
    let initialState = Map(),
        action       = { type: 'SET_ENTREES', entries: ['Trainspotting'] },
        nextState    = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting']
    }))
  })

  it('handles NEXT', () => {
    let initialState = fromJS({
      entries: ['Trainspotting', '28 Days Later']
    })
    let action = { type: 'NEXT' },
        nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later']
      },
      entries: []
    }))
  })

  it('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later']
      },
      entries: []
    });
    const action = {type: 'VOTE', entry: 'Trainspotting'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      },
      entries: []
    }))
  })
})
