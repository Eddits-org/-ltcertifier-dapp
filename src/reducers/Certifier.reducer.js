import { TRANSACTION_CANCEL } from 'actions/Transaction.action';
import { FETCH_CERTIFICATION_COST, CERTIFICATION_COST_FETCHED, DISCLAIMER_ACCEPTED } from 'actions/Certifier.action';

export const initialState = {
  // 1 => Accept the disclaimer
  // 2 => Sign address with LT certificate,
  // 3 => Send tx to Ethereum Smart Contract
  step: 1,
  fetchingCost: false,
  cost: null
};

export const CertifierReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_CANCEL:
      return {
        ...state,
        step: 1
      };
    case DISCLAIMER_ACCEPTED:
      return {
        ...state,
        step: 2
      };
    case FETCH_CERTIFICATION_COST:
      return {
        ...state,
        fetchingCost: true
      };
    case CERTIFICATION_COST_FETCHED:
      return {
        ...state,
        fetchingCost: false,
        cost: action.cost
      };

    default:
      return state;
  }
};

