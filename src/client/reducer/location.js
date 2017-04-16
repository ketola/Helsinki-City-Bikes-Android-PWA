// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  GET_LOCATION,
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILURE
} from '../action/get-location'

const initialState = Immutable.fromJS({
  geoposition : { coords: { longitude: 0, latitude: 0 }},
})

const locationReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case GET_LOCATION:
      return state
    case GET_LOCATION_REQUEST:
        return state
    case GET_LOCATION_SUCCESS:
      return state.set('geoposition', action.payload)
    case GET_LOCATION_FAILURE:
      return state
    default:
      return state
  }
}

export default locationReducer
