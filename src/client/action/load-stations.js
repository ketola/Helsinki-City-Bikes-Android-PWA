// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const LOAD_STATIONS = 'LOAD_STATIONS'
export const LOAD_STATIONS_REQUEST = 'LOAD_STATIONS_REQUEST'
export const LOAD_STATIONS_SUCCESS = 'LOAD_STATIONS_SUCCESS'
export const LOAD_STATIONS_FAILURE = 'LOAD_STATIONS_FAILURE'

export const loadStationsRequest = createAction(LOAD_STATIONS_REQUEST)
export const loadStationsSuccess = createAction(LOAD_STATIONS_SUCCESS)
export const loadStationsFailure = createAction(LOAD_STATIONS_FAILURE)

export const loadStations = () => (dispatch: Function) => {
  dispatch(loadStationsRequest())
  return fetch('https://api.digitransit.fi/routing/v1/routers/hsl/bike_rental', { method: 'GET' })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      dispatch(loadStationsSuccess(data.stations))
    })
    .catch((data) => {
      dispatch(loadStationsFailure(data.stations))
    })
}
