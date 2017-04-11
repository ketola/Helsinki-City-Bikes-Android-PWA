// @flow

import React from 'react'
import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import BikeStation from './container/bike-station'
import SimpleMap from './container/simple-map'
import MessageAsync from './container/message-async'
import { APP_NAME } from '../shared/config'

const App = () =>
  <div>
    <BikeStation />
    <div style={{width: '100%', height: '400px'}}>
      <SimpleMap/>
    </div>
  </div>

export default App
