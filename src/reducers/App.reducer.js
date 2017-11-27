import { TRANSACTION_CANCEL } from 'actions/Transaction.action';

export const initialState = {
  // 1 => Sign address with LT certificate, 2 => Send tx to Ethereum Smart Contract
  certificationStep: 1
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_CANCEL:
      return {
        ...state,
        certificationStep: 1
      };

    default:
      return state;
  }
};

