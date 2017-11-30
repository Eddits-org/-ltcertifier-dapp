import { combineReducers } from 'redux';

import { CertifierReducer } from 'reducers/Certifier.reducer';
import { NetworkReducer } from 'reducers/Network.reducer';
import { SignatureReducer } from 'reducers/Signature.reducer';
import { TransactionReducer } from 'reducers/Transaction.reducer';
import { VerifierReducer } from 'reducers/Verifier.reducer';

const certifierApp = combineReducers({
  certifier: CertifierReducer,
  verifier: VerifierReducer,
  sign: SignatureReducer,
  tx: TransactionReducer,
  network: NetworkReducer
});

export default certifierApp;
