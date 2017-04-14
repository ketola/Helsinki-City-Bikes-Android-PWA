// @flow

import { connect } from 'react-redux'

import { loadStations } from '../action/load-stations'
import BikeStation from '../component/bike-station'

const mapStateToProps = state => ({
  stations: state.stations.get('stations'),
})

const componentDidMount = (dispatch) => (
  dispatch(loadStations())
)

export default connect(mapStateToProps, componentDidMount)(BikeStation)
