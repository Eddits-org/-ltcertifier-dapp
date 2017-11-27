import React from 'react';
import PropTypes from 'prop-types';

const EthTx = ({ color, txHash, network }) => (
  <a href={`${network.etherscan}/${txHash}`} target='_blank' className={`tag ${color} is-medium`} style={{ marginLeft: '5px' }} >
    {txHash}
    <i className='fa fa-external-link' style={{ marginLeft: '5px' }} />
  </a>
);

EthTx.defaultProps = {
  color: 'is-primary'
};

EthTx.propTypes = {
  color: PropTypes.string,
  txHash: PropTypes.string.isRequired,
  network: PropTypes.object.isRequired
};

export default EthTx;
