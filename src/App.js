import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard';
import Sales from './pages/sales/sales';
import AppDrawer from './component/app_drawer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Dashboard/> */}
        <Router>
          <Switch>
            <Route exact path="/" render = {({match}) => (
              <AppDrawer>
                <Dashboard/>
              </AppDrawer>
              )}>
            </Route>
            <Route exact path="/home" render = {() => (
              <AppDrawer>
                <Dashboard/>
              </AppDrawer>
              )}>
            </Route>
            <Route exact path="/dashboard" render = {() => (
              <AppDrawer>
                <Dashboard/>
              </AppDrawer>
              )}>
            </Route>
            <Route exxact path="/sales" render = {() => (
              <AppDrawer>
                <Sales/>
              </AppDrawer>
              )}>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
