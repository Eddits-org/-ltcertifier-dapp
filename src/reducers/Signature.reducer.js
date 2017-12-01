import { SAML_REQUEST_REQUESTED, SAML_REQUEST_RECEIVED, ADDRESS_VERIFICATION_FETCHED } from 'actions/Signature.action';

export const initialState = {
  samlRequest: null,
  samlRequestProcessing: false,
  alreadyCertified: false
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
    case ADDRESS_VERIFICATION_FETCHED:
      return {
        ...state,
        alreadyCertified: action.certified
      };

    default:
      return state;
  }
};

