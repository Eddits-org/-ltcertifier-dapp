import { SAML_REQUEST_REQUESTED, SAML_REQUEST_RECEIVED } from 'actions/Signature.action';

export const initialState = {
  samlRequest: null,
  samlRequestProcessing: false
};

export const SignatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAML_REQUEST_REQUESTED:
      return {
        ...state,
        samlRequestProcessing: true
      };
    case SAML_REQUEST_RECEIVED:
      return {
        ...state,
        samlRequest: action.request
      };

    default:
      return state;
  }
};

