import React from 'react';
import PropTypes from 'prop-types';

const WaitMining = ({ txHash }) => (
  <div>
    <p>
      The transaction has been sent.
    </p>
    {txHash && (
      <p>Transaction hash: <span className='tag is-primary is-medium'>{txHash}</span></p>
    )}
    <p>
      The transaction will be mined, please wait...
    </p>
  </div>
);

WaitMining.defaultProps = {
  txHash: null
};

WaitMining.propTypes = {
  txHash: PropTypes.string
};

export default WaitMining;
