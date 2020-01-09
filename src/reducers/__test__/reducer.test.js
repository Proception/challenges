import consentReducer from '../consentReducer';
import * as types from '../../actions/types';


describe('Consent Reducer', () => {
  const consent = {email: 'omasan.esimaje@gmail.com', name: 'ddsdd', selectedConsents: ['Contribute to anonymous visit statistics']}
  it('should return initial state', () => {
    expect(consentReducer(undefined, {})).toEqual(
      {
        isLoading: false,
        consents: []
      }
    );
  });

  it('should handle PREPARE_CONSENT_REQUEST', () => {
    expect(consentReducer(undefined, {
      type: types.PREPARE_CONSENT_REQUEST
    })).toEqual(
      {
        isLoading: true,
        consents: []
      }
    );
  });

  it('should handle SET_CONSENT_SUCCESS', () => {
    expect(consentReducer(undefined, {
      type: types.SET_CONSENT_SUCCESS,
      payload: consent
    })).toEqual(
      {
        isLoading: false,
        consents: [consent]
      }
    );
  });
  it('should handle UPDATE_CONSENT_SUCCESS', () => {
    expect(consentReducer({isLoading: false,
      consents: [consent]}, {
      type: types.UPDATE_CONSENT_SUCCESS,
      payload: consent
    })).toEqual(
      {
        isLoading: false,
        consents: [consent]
      }
    );
  });
  it('should handle SET_CONSENT_ERROR', () => {
    expect(consentReducer(undefined, {
      type: types.SET_CONSENT_ERROR,
      err: 'There was an issue'
    })).toEqual(
      {
        isLoading: false,
        consents: []
      }
    );
  });
});
