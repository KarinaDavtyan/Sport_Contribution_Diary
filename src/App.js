import React, { Component} from 'react';
import { hot } from 'react-hot-loader';
import Router from './router';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Router />
      </div>
    );
  }
}

export default hot(module)(App);
