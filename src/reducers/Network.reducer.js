import { WEB3_FETCHED, METAMASK_INFOS_FETCHED } from 'actions/Network.action';

export const initialState = {
  web3Available: false,
  connectedNetwork: null,
  selectedAccount: null
};

export const NetworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEB3_FETCHED:
      return {
        ...state,
        web3Available: action.available
      };

    case METAMASK_INFOS_FETCHED:
      return {
        ...state,
        connectedNetwork: action.network,
        selectedAccount: action.account
      };

    default:
      return state;
  }
};

