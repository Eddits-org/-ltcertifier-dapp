import React from 'react';
import ReactDOM from 'react-dom';

import 'particles.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from 'components/App.component';

import { fetchWeb3, fetchMetamaskInfos } from 'actions/Network.action';
import { checkAddressCertification } from 'actions/Signature.action';
import { fetchCertificationCost } from 'actions/Certifier.action';
import certifierApp from './reducers';
import preload from './reducers/Preload';

require('assets/styles/custom-bulma.scss');
require('assets/styles/global.scss');

const logger = createLogger();

const store = createStore(
  certifierApp,
  preload(),
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);

// TODO : disable particles on mobile
particlesJS.load('particles', 'assets/particles.json');

// On load, check web3 availability
window.addEventListener('load', () => {
  fetchWeb3(store.dispatch);
});

// When web3 available, periodic fetch network
const unsubscribe = store.subscribe(() => {
  if (store.getState().network.web3Available) {
    setInterval(() => {
      fetchMetamaskInfos(store.dispatch);
    }, 1000);
    unsubscribe();
  }
});

let prevAddress = null;
let prevContract = null;
store.subscribe(() => {
  if (store.getState().network.web3Available && !!store.getState().network.selectedAccount) {
    const selectedAddress = store.getState().network.selectedAccount;
    if (selectedAddress !== prevAddress) {
      prevAddress = selectedAddress;
      store.dispatch(checkAddressCertification(
        store.getState().network.connectedNetwork,
        selectedAddress
      ));
    }
  }
  if (store.getState().network.web3Available &&
      !!store.getState().network.connectedNetwork &&
      store.getState().network.connectedNetwork.enabled) {
    const contractAddress = store.getState().network.connectedNetwork.contract;
    if (contractAddress !== prevContract) {
      prevContract = contractAddress;
      store.dispatch(fetchCertificationCost(store.getState().network.connectedNetwork));
    }
  }
});
