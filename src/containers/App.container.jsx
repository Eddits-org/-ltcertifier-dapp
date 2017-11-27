import { connect } from 'react-redux';

import AppComponent from 'components/App.component';

const mapStateToProps = store => ({
  // Certifier is ready if connected to a valid network, and
  // account is selected
  ready: !!store.network.connectedNetwork &&
          store.network.connectedNetwork.enabled &&
          !!store.network.selectedAccount,
  certificationStep: store.app.certificationStep
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
