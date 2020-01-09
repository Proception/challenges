import {
  SET_CONSENT_SUCCESS,
  PREPARE_CONSENT_REQUEST, 
  SET_CONSENT_ERROR,
  UPDATE_CONSENT_SUCCESS
} from '../actions/types';


export const setConsentRequest = () => ({
  type: PREPARE_CONSENT_REQUEST,
});

export const setConsentSuccess = payload => ({
  type: SET_CONSENT_SUCCESS,
  payload
});

export const setConsentError = error => ({
  type: SET_CONSENT_ERROR,
  payload: error,
});

export const updateConsentSuccess = payload => ({
  type: UPDATE_CONSENT_SUCCESS,
  payload
});
