import { TRANSACTION_CANCEL } from 'actions/Transaction.action';

export const initialState = {
  // 1 => Sign address with LT certificate,
  // 2 => Send tx to Ethereum Smart Contract
  step: 1
};

export const CertifierReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_CANCEL:
      return {
        ...state,
        step: 1
      };

    default:
      return state;
  }
};

