import { connect } from 'react-redux';

import VerifierComponent from 'components/Verifier.component';
import { changeVerifyAccount } from 'actions/Verifier.action';

const mapStateToProps = (store, ownProps) => ({
  account: store.verifier.account,
  valid: store.verifier.accountValid,
  fetching: store.verifier.isFetching,
  network: store.network.connectedNetwork,
  certification: store.verifier.certification,
  match: ownProps.match
});

const mapDispatchToProps = dispatch => ({
  changeAddress: (network, address) => dispatch(changeVerifyAccount(network, address))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifierComponent);
