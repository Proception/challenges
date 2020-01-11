import fetchMock from 'fetch-mock';
import { 
  setConsentRequest,
  setConsentSuccess,
  setConsentError,
  updateConsentSuccess,
  getAllConsentSuccess
} from '../actionCreators/consentActionCreators';
import mockResponse from '../../__mocks__/responseMocks';
import responseHandler from '../utils/responseHandler';
import {
  postConsentApi,
  getAllConsentsApi,
  updateConsentApi
} from '../api/consentApi/consentApi';

const basePath = 'https://localhost:4200/api/v1'


const saveConsent = (consentData, mockType = 201) => async (dispatch, getState) => {
  dispatch(setConsentRequest());

  try {
    const responseObj = mockResponse[mockType](consentData);
    const url = `${basePath}/consent`;
    fetchMock.post(url, responseObj);
    const {response} = await postConsentApi(url, consentData);
    responseHandler(dispatch, response, setConsentSuccess);
  } catch (error) {
    dispatch(setConsentError(error));
  } finally {
    fetchMock.reset();
  }
};

const updateConsent = (consentData, mockType = 200) => async (dispatch) => {
  dispatch(setConsentRequest());

  try {
    const responseObj = mockResponse[mockType](consentData);
    const url = `${basePath}/consent`;
    fetchMock.put(url, responseObj);
    const {response} = await updateConsentApi(url, consentData);
    responseHandler(dispatch, response, updateConsentSuccess);
  } catch (error) {
    dispatch(setConsentError(error));
  } finally {
    fetchMock.reset();
  }
};

const getAllConsents = (mockType = 200) => async (dispatch) => {
  dispatch(setConsentRequest());
  const consents = [
    {name: 'Benedict', email: 'omasan.esimaje@gmail.com', consents: ['Receive Newsletter','Be shown targeted ads']},
    {name: 'Omasan',email: 'benedict.esimaje@gmail.com',consents: ['Be shown targeted ads']},
    {name: 'Micheal',email: 'omasan@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads']},
    {name: 'Timothy', email: 'esimaje@gmail.com', consents: ['Receive Newsletter', 'Contribute to anonymous visit statistics']},
    {name: 'John', email: 'john@gmail.com', consents: ['Receive Newsletter', 'Be shown targeted ads', 'Contribute to anonymous visit statistics']}
  ];
  try {
    const responseObj = mockResponse[mockType](consents);
    const url = `${basePath}/consents`;
    fetchMock.get(url, responseObj);
    const {response} = await getAllConsentsApi(url);
    responseHandler(dispatch, response, getAllConsentSuccess);

  } catch (error) {
    dispatch(setConsentError(error));
  } finally {
    fetchMock.reset();
  }
};


export {
  saveConsent,
  getAllConsents,
  updateConsent
};
