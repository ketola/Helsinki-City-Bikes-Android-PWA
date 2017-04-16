// @flow

import { connect } from 'react-redux'

import { loadStations } from '../action/load-stations'
import { getLocation } from '../action/get-location'
import BikeStation from '../component/bike-station'

const mapStateToProps = state => ({
  stations: state.stations.get('stations'),
  geoposition: state.geoposition.get('geoposition'),
})

const componentDidMount = () => (dispatch) => new Promise((resolve, reject) => dispatch(loadStations())
  .then(() => dispatch(getLocation()))
  .then(resolve, reject)
)

export default connect(mapStateToProps, componentDidMount)(BikeStation)
