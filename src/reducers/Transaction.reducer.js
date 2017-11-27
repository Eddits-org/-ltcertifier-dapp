import { TRANSACTION_SENT, TRANSACTION_HASH_RECEIVED, TRANSACTION_MINED } from 'actions/Transaction.action';

export const initialState = {
  params: null,
  sent: false,
  hash: null,
  mined: false,
  block: null
};

export const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_SENT:
      return {
        ...state,
        sent: true
      };
    case TRANSACTION_HASH_RECEIVED:
      return {
        ...state,
        hash: action.hash
      };
    case TRANSACTION_MINED:
      return {
        ...state,
        mined: true,
        block: action.block
      };

    default:
      return state;
  }
};

