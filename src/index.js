
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './components/App/App.jsx';

/**
 * Entry point of the application. 
 * Here we configure the redux store 
 * and render the app inside the element with Id app
 */
render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);
