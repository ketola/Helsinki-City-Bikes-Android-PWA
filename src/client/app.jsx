// @flow

import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Routes from './container/routes'
import SimpleMap from './container/simple-map'
import { APP_NAME } from '../shared/config'

const App = () =>
  <Routes />

export default App
