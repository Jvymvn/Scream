import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import Navbar from "./Components/Navbar";

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fdd835',
      },
      secondary: {
        main: '#304ffe',
      },
    }
})


export class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
        <Router>
        <div className="container">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </div>
        </Router>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App
