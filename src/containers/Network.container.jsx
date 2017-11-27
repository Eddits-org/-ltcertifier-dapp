import { connect } from 'react-redux';

import NetworkComponent from 'components/network/Network.component';

const mapStateToProps = store => ({
  web3Available: store.network.web3Available,
  connectedNetwork: store.network.connectedNetwork,
  selectedAccount: store.network.selectedAccount
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkComponent);
