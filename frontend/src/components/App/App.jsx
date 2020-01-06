import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import ConsentView from '../../views/ConsentView.jsx';


export default class App extends Component {

  render() {
    return (
      <Router>
        <ConsentView />
      </Router>
    );
  }
}
