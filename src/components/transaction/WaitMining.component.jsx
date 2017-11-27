import React from 'react';
import PropTypes from 'prop-types';

import EthTx from './EthTx.component';

const WaitMining = ({ txHash, network }) => (
  <section className='section'>
    <div className='container'>
      <h1 className='title has-text-grey-dark'>
        The transaction has been sent.
      </h1>
      {txHash && (
        <p>
          Transaction hash:
          <EthTx {...{ txHash, network }} />
        </p>
      )}
      <p>
        <i className='fa fa-refresh fa-spin' style={{ marginRight: '5px' }} />
        The transaction will be mined, please wait...
      </p>
    </div>
  </section>
);

WaitMining.defaultProps = {
  txHash: null
};

WaitMining.propTypes = {
  txHash: PropTypes.string,
  network: PropTypes.object.isRequired
};

export default WaitMining;
