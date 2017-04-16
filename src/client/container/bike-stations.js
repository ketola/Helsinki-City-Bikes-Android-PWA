// @flow

import { connect } from 'react-redux'

import BikeStations from '../component/bike-stations'

const mapStateToProps = state => ({
  stations: state.stations,
  geoposition: state.geoposition
})

export default connect(mapStateToProps)(BikeStations)
