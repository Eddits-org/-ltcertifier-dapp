import React from 'react';
import PropTypes from 'prop-types';

const ConnectedComponent = ({
  name,
  enabled,
  etherscan,
  contract
}) => {
  const notifState = enabled ? 'is-primary' : 'is-warning';
  return (
    <div className={`notification ${notifState}`}>
      <nav className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <p>Connected to <strong>{name}</strong> newtork</p>
          </div>
        </div>
        <div className='level-right'>
          {contract && (
            <div className='level-item'>
              <p>
                Contract:
                <a href={`${etherscan}/address/${contract}`} target='_blank'>
                  {contract}
                  <i className='fa fa-external-link' style={{ marginLeft: '5px' }} />
                </a>
              </p>
            </div>
          )}
        </div>
      </nav>
      { !enabled &&
        <p>
          Ethereum PKI Certifier cannot be used on this network.
          Please change selection in MetaMask.
        </p>
      }
    </div>
  );
};

ConnectedComponent.defaultProps = {
  contract: null,
  etherscan: null
};

ConnectedComponent.propTypes = {
  name: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  contract: PropTypes.string,
  etherscan: PropTypes.string
};

export default ConnectedComponent;
