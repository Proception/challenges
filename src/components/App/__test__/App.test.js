import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureStore from '../../../store';
import App from '../App.jsx';


test('App component', () => {
  const component = renderer.create(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
