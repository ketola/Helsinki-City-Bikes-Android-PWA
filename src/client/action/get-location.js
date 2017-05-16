// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { geolocator } from 'geolocator'

export const GET_LOCATION = 'GET_LOCATION'
export const GET_LOCATION_REQUEST = 'GET_LOCATION_REQUEST'
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS'
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE'

export const getLocationRequest = createAction(GET_LOCATION_REQUEST)
export const getLocationSuccess = createAction(GET_LOCATION_SUCCESS)
export const getLocationFailure = createAction(GET_LOCATION_FAILURE)

const options = {
                  enableHighAccuracy: true,
                  timeout: 5000,
                  maximumWait: 10000,     // max wait time for desired accuracy
                  maximumAge: 0,          // disable cache
                  desiredAccuracy: 30,    // meters
                  fallbackToIP: true,     // fallback to IP if Geolocation fails or rejected
                  addressLookup: false,    // requires Google API key if true
                  timezone: false,         // requires Google API key if true
                  map: "map-canvas",      // interactive map element id (or options object)
                  staticMap: true         // map image URL (boolean or options object)
              }

export const getLocation = () => (dispatch: Function) => {
  console.log('Get Location')
  dispatch(getLocationRequest())
  navigator.geolocation.watchPosition(function(position) {
    console.log('Position ', position)
    dispatch(getLocationSuccess(position))
  })
}
