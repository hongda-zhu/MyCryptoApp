import React, {Component} from 'react'
import './App.css';
// import { render } from 'react-dom';
// import { func } from 'prop-types';
import WelcomeMessage from '../WelcomeMessage'
import AppLayout from './AppLayout'
import AppBar from '../AppBar'

class App extends Component {
  render() {
    return(
      <AppLayout>

        <AppBar />
        <WelcomeMessage />

      </AppLayout>

    )
  }

}

export default App;
