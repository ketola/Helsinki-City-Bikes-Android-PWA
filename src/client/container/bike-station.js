// @flow

import { connect } from 'react-redux'

import BikeStation from '../component/bike-station'

const mapStateToProps = state => ({
  stations: state.stations.get('stations'),
})

export default connect(mapStateToProps)(BikeStation)
