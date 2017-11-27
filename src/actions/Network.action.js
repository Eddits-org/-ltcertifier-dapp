import Web3 from 'services/Web3.service';

export const WEB3_FETCHED = 'WEB3_FETCHED';
export const METAMASK_INFOS_FETCHED = 'METAMASK_INFOS_FETCHED';

const web3Fetched = available => ({
  type: WEB3_FETCHED,
  available
});

const metamaskInfosFetched = (network, account) => ({
  type: METAMASK_INFOS_FETCHED,
  network,
  account
});


export const fetchMetamaskInfos = (dispatch) => {
  Web3.getNetwork().then((network) => {
    Web3.getAccount().then((account) => {
      dispatch(metamaskInfosFetched(network, account));
    });
  });
};

export const fetchWeb3 = (dispatch) => {
  if (window.web3) dispatch(web3Fetched(true));
};
