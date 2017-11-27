import React from 'react';
import PropTypes from 'prop-types';

const ConnectedComponent = ({ name, enabled }) => {
  const notifState = enabled ? 'is-primary' : 'is-warning';
  return (
    <div className={`notification ${notifState}`}>
      <p>Connected to <strong>{name}</strong> newtork</p>
      { !enabled &&
        <p>
          Ethereum PKI Certifier cannot be used on this network.
          Please change selection in MetaMask.
        </p>
      }
    </div>
  );
};

ConnectedComponent.propTypes = {
  name: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired
};

export default ConnectedComponent;
