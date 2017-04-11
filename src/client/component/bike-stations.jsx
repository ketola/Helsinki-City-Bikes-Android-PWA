// @flow

import React from 'react'
import BikeStation from './bike-station'

type Props = {
  stations: array
}

function BikeStation2(props: Props){
  return <div>{props.title}</div>;
}

const BikeStations = ({ stations }: Props) =>
    <div>{stations.map( (st) => <BikeStation2 title={st} /> ) }</div>




export default BikeStations
