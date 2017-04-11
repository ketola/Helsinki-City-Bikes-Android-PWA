// @flow

import { connect } from 'react-redux'

import SimpleMap from '../component/simple-map'

const mapStateToProps = state => ({
  stations: state.stations.get('stations'),
})

export default connect(mapStateToProps)(SimpleMap)
