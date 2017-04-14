// @flow

import React from 'react'
import GoogleMapReact from 'google-map-react'


function defaultCenter(){
  return {lat: 59.95, lng: 30.33}
}

function defaultZoom(){
  return 11;
}

const SimpleMap = () =>
  <div className='google-map'>
    <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyB4SWt00LABjHhWjk-Ib6KsXdWFnIQcuOY'}}
        defaultCenter={defaultCenter()}
        defaultZoom={defaultZoom()}/>
  </div>

export default SimpleMap
