import { connect } from 'react-redux';

import CertifierComponent from 'components/Certifier.component';

const mapStateToProps = store => ({
  // Certifier is ready if connected to a valid network, and
  // account is selected
  ready: !!store.network.connectedNetwork &&
          store.network.connectedNetwork.enabled &&
          !!store.network.selectedAccount,
  step: store.certifier.step
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CertifierComponent);
