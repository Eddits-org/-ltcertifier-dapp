import React from 'react';
import PropTypes from 'prop-types';

import Install from './Install.component';
import Connected from './Connected.component';
import DisabledNetwork from './DisabledNetwork.component';
import WaitingNetwork from './WaitingNetwork.component';
import NoAccount from './NoAccount.component';

const NetworkComponent = ({ web3Available, connectedNetwork, selectedAccount }) => (
  <div className='network'>
    { !web3Available && <Install /> }
    { web3Available && !connectedNetwork && <WaitingNetwork /> }
    { !!connectedNetwork && !connectedNetwork.enabled &&
      <DisabledNetwork {...connectedNetwork} />
    }
    { !!connectedNetwork && connectedNetwork.enabled && !selectedAccount && <NoAccount /> }
    { !!connectedNetwork && !!selectedAccount && connectedNetwork.enabled &&
      <Connected {...connectedNetwork} />
    }
  </div>
);

NetworkComponent.defaultProps = {
  connectedNetwork: null,
  selectedAccount: null
};

NetworkComponent.propTypes = {
  web3Available: PropTypes.bool.isRequired,
  connectedNetwork: PropTypes.object,
  selectedAccount: PropTypes.string
};

export default NetworkComponent;
