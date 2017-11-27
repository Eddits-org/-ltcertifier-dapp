import { combineReducers } from 'redux';

import { AppReducer } from 'reducers/App.reducer';
import { NetworkReducer } from 'reducers/Network.reducer';
import { SignatureReducer } from 'reducers/Signature.reducer';
import { TransactionReducer } from 'reducers/Transaction.reducer';

const certifierApp = combineReducers({
  app: AppReducer,
  sign: SignatureReducer,
  tx: TransactionReducer,
  network: NetworkReducer
});

export default certifierApp;
