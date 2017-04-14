// @flow

import { connect } from 'react-redux'

import BikeStations from '../component/bike-stations'

const mapStateToProps = state => ({
  stations: state.stations,
})

export default connect(mapStateToProps)(BikeStations)
