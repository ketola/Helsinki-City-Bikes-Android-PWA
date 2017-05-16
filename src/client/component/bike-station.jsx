// @flow

import React from 'react'
import geolib from 'geolib'
import { IndexLink } from 'react-router'

type Props = {
  stations: array,
  geoposition: any
}

const Station = (props) => (

  <IndexLink
  to={{
    pathname: '/map',
    query: { latitude: props.station.y, longitude: props.station.x }
  }}>
    <div className='bike-station'>
      <div className='title'>{props.station.name} ({props.station.bikesAvailable} / {props.station.bikesAvailable + props.station.spacesAvailable})</div>
      <div className='distance'>Distance: {props.station.distance} m</div>
    </div>
  </IndexLink>
)

const BikeStation = ({ stations, geoposition }: Props) =>
  <div>
    <div>{stations && stations
      .map(st => {
        st.distance = (geoposition.coords ? geolib.getDistance({latitude: geoposition.coords.latitude, longitude: geoposition.coords.longitude}, {latitude: st.y, longitude: st.x}) : 0)
        return st
        })
      .sort((a,b) => a.distance - b.distance)
      .map((st) => <Station station={st} key={st.id}/>)}</div>
  </div>

export default BikeStation
