import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import BikeStation from './bike-station'
import SimpleMap from './simple-map'

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
          <Route path='/' component={BikeStation}>
          </Route>
          <Route path='/map' component={SimpleMap} />
      </Router>
    )
  }
}

export default Routes
