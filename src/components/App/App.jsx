import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import ConsentView from '../../views/ConsentView.jsx';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

  render() {
    return (
      <Router>
        <ConsentView defaultMenu={'consentForm'} />
      </Router>
    );
  }
}
