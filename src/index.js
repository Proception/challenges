
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './components/App/App.jsx';

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);
