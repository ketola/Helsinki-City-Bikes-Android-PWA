// @flow

import React from 'react'
import GoogleMapReact from 'google-map-react'


type Props = {
  latitude: number,
  longitude: number
}

function defaultCenter(props){
  return {lat: Number.parseFloat(props.location.query.latitude), lng: Number.parseFloat(props.location.query.longitude)}
}

function defaultZoom(){
  return 18;
}

const SimpleMap = (props) =>
  <div className='google-map'>
    <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyB4SWt00LABjHhWjk-Ib6KsXdWFnIQcuOY'}}
        defaultCenter={defaultCenter(props)}
        defaultZoom={defaultZoom()}/>
  </div>

export default SimpleMap
