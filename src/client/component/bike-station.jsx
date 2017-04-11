// @flow

import React from 'react'

type Props = {
  stations: array,
  title: string
}

function Station(props) {
  return <div>aaa{props.title}</div>
}

const BikeStation = ({ stations }: Props) =>
  <div>{stations.map((st) => <Station title={st} />)}</div>

export default BikeStation
