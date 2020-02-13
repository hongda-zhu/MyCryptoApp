import React, {Component} from 'react'
import './App.css';
import AppLayout from './AppLayout'
import AppBar from '../AppBar'
import {AppProvider} from '../AppProvider' // without default export
import Settings from '../Settings'
import Content from '../Content'
import Dashboard from '../Dashboard'

class App extends Component {
  render() {

    return(
      <AppLayout>
        <AppProvider>
          <AppBar /> 
          <Content> 
          {/* loading content */}
          <Dashboard />
          <Settings />
          </Content>
        </AppProvider>
      </AppLayout>
    )
  }

}

export default App;
