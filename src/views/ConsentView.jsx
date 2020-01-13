import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  withRouter
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import DisplayCard from '../components/DisplayCard/DisplayCard.jsx';
import SideMenu from '../components/SideMenu/SideMenu.jsx';
import ConsentForm from '../components/Consent/ConsentForm/ConsentForm.jsx';
import ViewConsents from '../components/Consent/ViewConsents/ViewConsents.jsx';
import {
  getAllConsents,
  saveConsent,
  updateConsent
} from '../actions/consentActions';
import './consentview.scss';


export class ConsentView extends Component {
  constructor() {
    super();
  }

  state = {
    activeMenu: '',
  }

  componentDidMount() {
    this.props.getAllConsents();
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
    this.props.history.push('/give-consent');
    document.title = 'Give consent';
    this.setState({activeMenu: 'consentForm'});
  }

  viewConsentList = () => {
    this.props.history.push('/consents');
    document.title = 'Consents';
    this.setState({activeMenu: 'consentList'});
  }

  renderConsentForm = () => {
    const consents = [
      {name: '',value: 'Receive Newsletter'},
      {name: '', value: 'Be shown targeted ads'},
      {name: '', value: 'Contribute to anonymous visit statistics'}
    ];
    return <ConsentForm viewConsentList={this.viewConsentList} totalConsents={this.props.totalConsents} updateConsent={this.props.updateConsent} saveConsent={this.props.saveConsent} consents={consents} />;
  }

  renderConsentList = () => {
    const {consents} = this.props.totalConsents;
    return <ViewConsents  consents={consents}/>;
  }

  renderMenuContent = () => {
    const currentMenu = this.state.activeMenu ? this.state.activeMenu : this.props.defaultMenu;
    switch (currentMenu) {
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
      activeMenu={this.state.activeMenu ?  this.state.activeMenu : this.props.defaultMenu}
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

ConsentView.propTypes = {
  saveConsent: PropTypes.func,
  updateConsent: PropTypes.func,
  getAllConsents: PropTypes.func,
  totalConsents: PropTypes.object,
  consents: PropTypes.array,
  defaultMenu: PropTypes.string,
  activeMenu: PropTypes.string,
  history: PropTypes.object,
  push: PropTypes.func
};


export  const mapStateToProps = state => ({
  totalConsents: state.consentReducer
});

export default withRouter(connect(mapStateToProps, {saveConsent, updateConsent, getAllConsents})(ConsentView));
