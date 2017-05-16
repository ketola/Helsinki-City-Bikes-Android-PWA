// @flow

import React from 'react'
import GoogleMapReact from 'google-map-react'


type Props = {
  latitude: number,
  longitude: number,
  stations: array
}

const defaultCenter = (props) => {
  return {lat: Number.parseFloat(props.location.query.latitude), lng: Number.parseFloat(props.location.query.longitude)}
}

const defaultZoom = () => 18

const Marker = (props) =>
  <div>
    <div className='map-marker'>
      <div className="marker-graphic">

      </div>
    </div>
    <div className="marker-text-available">
      {props.station.bikesAvailable} / {props.station.bikesAvailable + props.station.spacesAvailable}
    </div>
    <div className="marker-station-name">
      {props.station.name}
    </div>
  </div>

const SimpleMap = (props) =>
  <div className='google-map'>
    <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyB4SWt00LABjHhWjk-Ib6KsXdWFnIQcuOY'}}
        defaultCenter={defaultCenter(props)}
        defaultZoom={defaultZoom()}>
        {props.stations.map((st) => <Marker key={st.id} station={st} lat={st.y} lng={st.x} />)}
    </GoogleMapReact>
  </div>

export default SimpleMap
