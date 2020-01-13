import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayCard from '../DisplayCard/DisplayCard.jsx';
import './SideMenu.scss';


/**
 * @desc This is a reusable side menu component
 * @param {String} activeMenu : This determines which menu item is currently active
 * @param {object} menuItems : This contains the menu ID, action, and value
 * @returns {JSX}
 */
export default class SideMenu extends Component {

  generateSideMenuItems = () => {
    const {
      activeMenu,
      menuItems
    } = this.props;

    return menuItems.map(menuItem => <a key={menuItem.menuId} className="side-menu-item-link" onClick={() => menuItem.action()} >
      <div className={`${activeMenu === menuItem.menuId ? 'side-menu-item-active' : 'side-menu-item'}`}>
        <div className="text-space">{menuItem.menuValue}</div>
      </div>
    </a>
    );
  }

  render() {
    return (
      <div className={'side-menu-card-container'}>
        <DisplayCard className={'side-menu-card'}>
          <div className="side-menu-content">
            <div className="side-menu-list">
              {
                this.generateSideMenuItems()
              }
            </div>
          </div>
        </DisplayCard>
      </div>
    );
  }
}


SideMenu.propTypes = {
  activeMenu: PropTypes.string,
  menuItems: PropTypes.array,
};


