// @flow

import React from 'react'

type Props = {
  stations: array,
  title: string
}

function Station(props) {
  return  <div className='bike-station'>
            <div className='title'>{props.station.get('title')}</div>
            <div className='bikes'>Bikes: {props.station.get('bikesAvailable')} / {props.station.get('bikesTotal')}</div>
            <div className='distance'>Distance: {props.station.get('distance')} m</div>
          </div>
}

const BikeStation = ({ stations }: Props) =>
  <div>{stations.map((st) => <Station station={st} />)}</div>

export default BikeStation
