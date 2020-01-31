import React, {Component} from 'react'
import './App.css';
// import { render } from 'react-dom';
// import { func } from 'prop-types';
import WelcomeMessage from '../WelcomeMessage'

import AppLayout from './AppLayout'
import AppBar from '../AppBar'
import {AppProvider} from '../AppProvider' // without default export

class App extends Component {
  render() {

    return(
      <AppLayout>
        <AppProvider>
          <AppBar />
          <WelcomeMessage />
        </AppProvider>
      </AppLayout>
    )
  }

}

export default App;
