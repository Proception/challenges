import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import Input from '../../InputField/Input.jsx';
import Button from '../../Button/Button.jsx';
import Notify from '../../../utils/Notify';
import './consentform.scss';

export default class ConsentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      selectedConsents:[]
    };
  }

  generateInputFields = () => {
    const { email, name } = this.state;
    const inputData = [
      {
        name: 'name',
        value: name,
        title: 'Name',
      },
      {
        name: 'email',
        value: email,
        title: 'Email address'
      }
    ];
    return inputData.map(({ name, value, title, type }, index) => {
      return (
        <Fragment key={index}>
          <Input className={'input-field'} name={name} value={value} handleChange={this.handleInput} type={type} placeholder={title} />
        </Fragment>
      );
    });
  }

  generateCheckBoxes = () => {
    const {consents} = this.props;
    
    return consents.map(({ name, value }, index) => {
      return (
        <Fragment key={index}>
          <Input className={'input-field'} name={name} value={value} handleChange={this.handleSelectedConsents} type={'checkbox'}  /> {value} <br/>
        </Fragment>
      );
    });
  } 

  doesEmailExist = (email) => {
    const {consents} = this.props.totalConsents;
    return consents.filter(consent => consent.email === email).length > 0;
  }

  updateConsent = ({name, email, selectedConsents}) => {
    const {viewConsentList} = this.props;
    Notify.update(
      'Would you like to update consent',
      async () => {
        await this.props.updateConsent({name, email, selectedConsents});
        viewConsentList();
      }, 
      ['Cancel', 'Update']
    );
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(prevState => {
      return {
        ...prevState, [name]: value
      };
    }, () => { }
    );
  }

  handleSelectedConsents = (e) => {
    const selectedValue = e.target.value;
    const {selectedConsents} = this.state;
    const previouslySelected = selectedConsents.find( consent => selectedValue === consent) !== undefined;

    if (!previouslySelected) {
      this.setState(prevState => {
        return {
          ...prevState, 
          selectedConsents: [...prevState.selectedConsents, selectedValue]
        };
      }, () => {}
      );
    }

    if (previouslySelected) {
      this.setState(prevState => {
        return {
          ...prevState, 
          selectedConsents: [...selectedConsents.filter( consent => selectedValue !== consent)]
        };
      }, () => {}
      );
    }
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const {name, email, selectedConsents} = this.state;
    const {viewConsentList} = this.props;
    const isFormValid = !validator.isEmpty(name) && !validator.isEmpty(email) && validator.isEmail(email) && selectedConsents.length > 0;

    if (!isFormValid) {
      Notify.notifyError('Form is Invalid, please enter a valid email or name');
    }

    if (isFormValid && this.doesEmailExist(email)) {
      this.updateConsent({name, email, selectedConsents});
    }

    if (isFormValid && !this.doesEmailExist(email)) {
      await this.props.saveConsent({name, email, selectedConsents});
      viewConsentList();
    }
  }

  render() {
    return (
      <div className={'form-container'}>
        <form className={'consent-form'} id="consentForm" noValidate onSubmit={this.handleFormSubmit}>
          <div className={'input-container'}>{this.generateInputFields()}</div>
          <div className={'consent-title'}><span>I agree to : </span></div>
          <div className={'consent-container'}>
            <div className={'consent-list'}>{this.generateCheckBoxes()}</div>
          </div>
          <div className={'button-container'}>
            <Button id="consentbutton" title={'Give consent'} classButton={'give-consent-button'} 
              disabled={this.state.selectedConsents.length === 0}
            />
          </div>
        </form>
      </div>
    );
  }
}

ConsentForm.propTypes = {
  rows: PropTypes.array,
  saveConsent: PropTypes.func,
  updateConsent: PropTypes.func,
  viewConsentList: PropTypes.func,
  totalConsents: PropTypes.object,
  consents: PropTypes.array
};
