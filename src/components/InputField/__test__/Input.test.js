import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input.jsx';


test('Input component', () => {
  const component = renderer.create(
    <Input />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
