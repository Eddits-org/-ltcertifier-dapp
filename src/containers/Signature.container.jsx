import { connect } from 'react-redux';

import SignatureComponent from 'components/signature/Signature.component';
import { buildSamlRequest } from 'actions/Signature.action';

const mapStateToProps = store => ({
  account: store.network.selectedAccount,
  processing: store.sign.samlRequestProcessing,
  samlRequest: store.sign.samlRequest
});

const mapDispatchToProps = dispatch => ({
  signAddress: address => dispatch(buildSamlRequest(address))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignatureComponent);
