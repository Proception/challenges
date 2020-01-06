import React from 'react';
import renderer from 'react-test-renderer';
import SideMenu from '../SideMenu.jsx';
import mockData from '../../../../__mocks__/sideMenuMocks';


test('DisplayCard component', () => {
  const component = renderer.create(
    <SideMenu
      menuItems={mockData.menuItems}
      activeMenu={'consentForm'}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
