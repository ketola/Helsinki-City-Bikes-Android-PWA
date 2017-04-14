// @flow

import React from 'react'

type Props = {
  stations: array
}

const Station = (props) => (
  <div className='bike-station'>
    <div className='title'>{props.station.name}</div>
    <div className='bikes'>Bikes: {props.station.bikesAvailable} / {props.station.bikesAvailable + props.station.spacesAvailable}</div>
    <div className='distance'>Distance: 1 m</div>
  </div>
)

const BikeStation = ({ stations }: Props) =>
  <div>
    <div>{stations && stations.map((st) => <Station station={st} />)}</div>
  </div>

export default BikeStation
