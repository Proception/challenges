import React, { Component, Fragment } from 'react';
import {
  withRouter
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import DisplayCard from '../components/DisplayCard/DisplayCard.jsx';
import SideMenu from '../components/SideMenu/SideMenu.jsx';
import './consentview.scss';


class ConsentView extends Component {

  state = {
    activeMenu: 'consentForm',
  }

  componentDidMount() {
  }

  setActiveTab = (activeMenu) => {
    this.setState(prevState => {
      return {
        ...prevState, activeMenu
      };
    }, () => { }
    );
  }

  viewConsentForm = () => {
    this.props.history.push('/give-consent')
    document.title = 'Give consent';
    this.setState({activeMenu: 'consentForm'});
  }

  viewConsentList = () => {
    this.props.history.push('/consents');
    document.title = 'Consents';
    this.setState({activeMenu: 'consentList'});
  }

  renderConsentForm = () => {
    return 'get consent from user';
  }

  renderConsentList = () => {
    return 'view consent list';
  }

  renderMenuContent = () => {
    switch (this.state.activeMenu) {
    case 'consentList':
      return this.renderConsentList();
    case 'consentForm':
      return this.renderConsentForm();
    default:
      return '';
    }
  }

  renderSideMenu = () => {
    const  menuItems = [
      {
        menuValue: 'Give consent',
        menuId: 'consentForm',
        action: this.viewConsentForm,
      },
      {
        menuValue: 'Collected consents',
        menuId: 'consentList',
        action: this.viewConsentList
      }
    ];

    return <SideMenu
      activeMenu={this.state.activeMenu}
      menuItems = {menuItems}
    />;
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col sm="12" md="3" lg="3" xl="3">
              {
                this.renderSideMenu()
              }
            </Col>
            <Col sm="12" md="9" lg="9" xl="9">
              <DisplayCard className={'side-menu-card'}>
                {
                  this.renderMenuContent()
                }
              </DisplayCard>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(ConsentView);
