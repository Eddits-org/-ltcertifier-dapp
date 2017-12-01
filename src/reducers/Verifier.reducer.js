import { VERIFY_ACCOUNT_CHANGED, FETCH_ACCOUNT_CERTIFICATION, ACCOUNT_CERTIFICATION_FETCHED, CLEAR_ACCOUNT_CERTIFICATION } from 'actions/Verifier.action';

export const initialState = {
  account: null,
  accountValid: false,
  isFetching: false,
  certification: null
};

export const VerifierReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_ACCOUNT_CHANGED:
      return {
        ...state,
        account: action.account,
        accountValid: action.valid
      };

    case FETCH_ACCOUNT_CERTIFICATION:
      return {
        ...state,
        isFetching: true
      };

    case ACCOUNT_CERTIFICATION_FETCHED:
      return {
        ...state,
        isFetching: false,
        certification: action.certification
      };

    case CLEAR_ACCOUNT_CERTIFICATION:
      return {
        ...state,
        isFetching: false,
        certification: null
      };

    default:
      return state;
  }
};

