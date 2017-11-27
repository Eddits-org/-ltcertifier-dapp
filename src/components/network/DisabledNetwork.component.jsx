import React from 'react';
import PropTypes from 'prop-types';

const DisabledNetworkComponent = ({ name }) => (
  <div className='notification is-warning'>
    <p>Connected to <strong>{name}</strong> newtork</p>
    <p>
      Ethereum PKI Certifier cannot be used on this network.
      Please change selection in MetaMask.
    </p>
  </div>
);

DisabledNetworkComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default DisabledNetworkComponent;
