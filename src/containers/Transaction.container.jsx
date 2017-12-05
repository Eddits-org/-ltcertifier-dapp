import { connect } from 'react-redux';

import TransactionComponent from 'components/transaction/Transaction.component';
import { certify, cancel } from 'actions/Transaction.action';

const mapStateToProps = store => ({
  params: store.tx.params,
  account: store.network.selectedAccount,
  network: store.network.connectedNetwork,
  txSent: store.tx.sent,
  txHash: store.tx.hash,
  txMined: store.tx.mined,
  txBlock: store.tx.block,
  fetchingCost: store.certifier.fetchingCost,
  cost: store.certifier.cost
});

const mapDispatchToProps = dispatch => ({
  certify: (network, account, params, cost) => dispatch(certify(network, account, params, cost)),
  cancel: () => dispatch(cancel())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionComponent);
