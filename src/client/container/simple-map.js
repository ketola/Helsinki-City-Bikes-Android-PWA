// @flow

import { connect } from 'react-redux'

import { loadStations } from '../action/load-stations'
import { getLocation } from '../action/get-location'

import SimpleMap from '../component/simple-map'

const mapStateToProps = state => ({
  stations: state.stations.get('stations'),
})

const componentDidMount = () => (dispatch) => new Promise((resolve, reject) => dispatch(loadStations())
  .then(() => dispatch(getLocation()))
  .then(resolve, reject)
)

export default connect(mapStateToProps, componentDidMount)(SimpleMap)
