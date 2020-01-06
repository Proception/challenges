import React, { Component } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard.jsx';
import './SideMenu.scss';



export default class SideMenu extends Component {

  generateSideMenuItems = () => {
    const {
      activeMenu,
      menuItems
    } = this.props;

    return menuItems.map(menuItem => <a className="side-menu-item-link" onClick={() => menuItem.action()} >
      <div className={`${activeMenu === menuItem.menuId ? 'side-menu-item-active' : 'side-menu-item'}` }>
        <div className="side-menu-item-image">
        </div>
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


