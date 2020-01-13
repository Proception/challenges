import {
  SET_CONSENT_SUCCESS,
  PREPARE_CONSENT_REQUEST,
  SET_CONSENT_ERROR,
  UPDATE_CONSENT_SUCCESS,
  GET_ALL_CONSENTS_SUCCESS
} from '../actions/types';

const initialState = {
  isLoading: false,
  consents: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case PREPARE_CONSENT_REQUEST:
    return { ...state,
      isLoading: true
    };
  case SET_CONSENT_SUCCESS:
    return {
      ...state,
      isLoading: false,
      consents: [...state.consents, action.payload]
    };
  case SET_CONSENT_ERROR:
    return {
      ...state,
      isLoading: false
    };
  case UPDATE_CONSENT_SUCCESS:
    return {
      ...state,
      isLoading: false,
      consents: [...state.consents.filter(consent => consent.email !== action.payload.email), action.payload]
    };
  case GET_ALL_CONSENTS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      consents: [...state.consents, ...action.payload]
    };
  default:
    return state;
  }
};
