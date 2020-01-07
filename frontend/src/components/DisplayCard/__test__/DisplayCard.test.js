import React from 'react';
import renderer from 'react-test-renderer';
import DisplayCard from '../DisplayCard.jsx';


test('DisplayCard component', () => {
  const component = renderer.create(
    <DisplayCard />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
