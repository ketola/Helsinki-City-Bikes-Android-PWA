// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  LOAD_STATIONS,
  LOAD_STATIONS_REQUEST,
  LOAD_STATIONS_SUCCESS,
  LOAD_STATIONS_FAILURE
} from '../action/load-stations'

const initialState = Immutable.fromJS({
  stations : [{id: '111'}],
})

const stationReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case LOAD_STATIONS:
      return state
    case LOAD_STATIONS_REQUEST:
        return state
    case LOAD_STATIONS_SUCCESS:
      return state.set('stations', action.payload)
    case LOAD_STATIONS_FAILURE:
      return state
    default:
      return state
  }
}

export default stationReducer
