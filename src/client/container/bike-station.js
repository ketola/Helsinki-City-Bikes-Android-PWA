// @flow

import { connect } from 'react-redux'

import BikeStation from '../component/bike-station'

const mapStateToProps = state => ({
  title: state.station.get('title'),
})

export default connect(mapStateToProps)(BikeStation)
