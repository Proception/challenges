import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import regeneratorRuntime from 'regenerator-runtime';
import mockResponse from '../../../__mocks__/responseMocks';
import {
  saveConsent, updateConsent
} from '../consentActions';

import {
  PREPARE_CONSENT_REQUEST,
  SET_CONSENT_SUCCESS,
  UPDATE_CONSENT_SUCCESS,
  SET_CONSENT_ERROR
} from '../types';



const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let initialState = {};
let store = mockStore(initialState);

describe('Consents Actions Tests', () => {
  beforeEach(() => {
    moxios.install();
    jest.setTimeout(5000);
    initialState = {};
    store = mockStore(initialState);
  });
  afterEach(() => moxios.uninstall());
  it('should dispatch post consent actions', async (done) => {
    const consentData = { email: 'omasan', name: 'ddsdd', selectedConsents: [] };
    moxios.stubRequest('http://localhost:4200/api/v1/consent', mockResponse[201](consentData));
    // Dispatch the action
    await store.dispatch(saveConsent(consentData));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();

    const expectedPayload = [{ type: PREPARE_CONSENT_REQUEST }, {
      type: SET_CONSENT_SUCCESS, payload: consentData}];
    expect(actions).toEqual(expectedPayload);
    done();
  });
  it('should dispatch update consent actions', async (done) => {
    initialState = {
      isloading:false,
      consents: [{ email: 'omasan', name: 'ddsdd', selectedConsents: ['Be shown targeted ads'] }]
    };
    const consentData = { email: 'omasan', name: 'ddsdd', selectedConsents: ['Contribute to anonymous visit statistics'] };
    moxios.stubRequest('http://localhost:4200/api/v1/consent', mockResponse[201](consentData));
    // Dispatch the action
    await store.dispatch(updateConsent(consentData));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();

    const expectedPayload = [{ type: PREPARE_CONSENT_REQUEST }, {
      type: UPDATE_CONSENT_SUCCESS, payload: consentData}];
    expect(actions).toEqual(expectedPayload);
    done();
  });
  it('should dispatch error consent action for invalid credentials', async (done) => {
    initialState = {
      isloading:false,
      consents: [{ email: 'omasan', name: 'ddsdd', selectedConsents: ['Be shown targeted ads'] }]
    };
    const consentData = { email: 'omasan', name: 'ddsdd', selectedConsents: ['Contribute to anonymous visit statistics'] };
    moxios.stubRequest('http://localhost:4200/api/v1/consent', mockResponse[400](consentData));
    // Dispatch the action
    await store.dispatch(updateConsent(consentData, 400));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();

    const expectedPayload = [{ type: PREPARE_CONSENT_REQUEST }, {
      type: SET_CONSENT_ERROR, payload: 'Bad Response Exception: Invalid credentials'}];
    expect(actions).toEqual(expectedPayload);
    done();
  });
  it('should dispatch error consent action for unauthorized access', async (done) => {
    const consentData = { email: 'omasan', name: 'ddsdd', selectedConsents: ['Contribute to anonymous visit statistics'] };
    moxios.stubRequest('http://localhost:4200/api/v1/consent', mockResponse[401](consentData));
    // Dispatch the action
    await store.dispatch(saveConsent(consentData, 401));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();

    const expectedPayload = [{ type: PREPARE_CONSENT_REQUEST }, {
      type: SET_CONSENT_ERROR, payload: 'Unauthorized Response Exception: You do not have access to consents'}];
    expect(actions).toEqual(expectedPayload);
    done();
  });
});
