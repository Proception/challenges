import React from 'react';
import renderer from 'react-test-renderer';
import ViewConsents from '../ViewConsents.jsx';


describe('ViewConsents component', () => {
  it('should render ViewConsents correctly', () => {
    const consents = [
      {name: 'Benedict', email: 'omasan.esimaje@gmail.com', consents: ['Receive Newsletter','Be shown targeted ads']},
      {name: 'Omasan',email: 'benedict.esimaje@gmail.com',consents: ['Be shown targeted ads']},
      {name: 'Micheal',email: 'omasan@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']}
    ];
    const component = renderer.create(
      <ViewConsents consents={consents} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
