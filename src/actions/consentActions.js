import fetchMock from 'fetch-mock';
import { 
  setConsentRequest,
  setConsentSuccess,
  setConsentError,
  updateConsentSuccess
} from '../actionCreators/consentActionCreators';
import mockResponse from '../../__mocks__/responseMocks';
import responseHandler from '../utils/responseHandler';
import {
  postConsentApi,
  getAllConsentsApi,
  updateConsentApi
} from '../api/consentApi/consentApi';


const saveConsent = (consentData, mockType = 201) => async (dispatch, getState) => {
  dispatch(setConsentRequest());

  try {
    const responseObj = mockResponse[mockType](consentData);
    const url = 'http://localhost:4200/api/v1/consent';
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
    const url = 'http://localhost:4200/api/v1/consent';
    fetchMock.put(url, responseObj);
    const {response} = await updateConsentApi(url, consentData);
    responseHandler(dispatch, response, updateConsentSuccess);
  } catch (error) {
    dispatch(setConsentError(error));
  } finally {
    fetchMock.reset();
  }
};

const getAllConsents = () => {

};


export {
  saveConsent,
  getAllConsents,
  updateConsent
};
