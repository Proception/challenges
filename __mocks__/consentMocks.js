import {
  saveConsent,
  updateConsent
} from '../src/actions/consentActions';

const preventDefault = {
  preventDefault: () => { },
};

const props = {
  saveConsent : () => {},
  updateConsent : () => {},
  consents: [
    'Contribute to anonymous visit statistics', 'Receive Newsletter', 'Be shown targeted ads'
  ],
  totalConsents: {
    consents:[
      { email: 'omasan.esimaje@gmail.com', name: 'ddsdd', selectedConsents: ['Contribute to anonymous visit statistics'] },
      { email: 'benedict.esimaje@gmail.com', name: 'ddsdd', selectedConsents: ['Contribute to anonymous visit statistics'] }
    ]
  }
};

const totalConsents = [
  { email: 'omasan.esimaje@gmail.com', name: 'ddsdd', selectedConsents: ['Contribute to anonymous visit statistics'] },
  { email: 'benedict.esimaje@gmail.com', name: 'ddsdd', selectedConsents: ['Contribute to anonymous visit statistics'] }
];

const state = {
  email: 'benedict.esimaje@gmail.com',
  name: 'ddsdd',
  selectedConsents: ['Contribute to anonymous visit statistics']
};

const consents = ['Contribute to anonymous visit statistics', 'Be shown targeted ads'];

const correctEventEmail = {
  ...preventDefault,
  target: {
    name: 'email',
    value: 'omasan.esimaje@gmail.com'
  }
};

const wrongEventEmail = {
  ...preventDefault,
  target: {
    name: 'email',
    value: 'omasan.esimajegmail.com'
  }
};

const correctEventName = {
  ...preventDefault,
  target: {
    name: 'name',
    value: 'Benedict'
  }
};

const wrongEventName = {
  ...preventDefault,
  target: {
    name: 'name',
    value: ''
  }
};

const correctEventSelectedConsents = {
  ...preventDefault,
  target: {
    name: 'selectedConsents',
    value: 'Be shown targeted ads'
  }
};

export {
  preventDefault,
  props,
  state,
  consents,
  totalConsents,
  correctEventSelectedConsents,
  correctEventName,
  correctEventEmail,
  wrongEventEmail,
  wrongEventName
};
