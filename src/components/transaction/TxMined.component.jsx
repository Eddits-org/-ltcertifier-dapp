import React from 'react';
import PropTypes from 'prop-types';

import EthTx from './EthTx.component';

const TxMined = ({ txBlock, txHash, network }) => (
  <section className='section'>
    <div>
      <h1 className='title has-text-grey-dark'>
        The transaction has been mined in block {txBlock}.
      </h1>
      <p>
        Transaction hash :
        <EthTx {...{ txHash, network }} color='is-success' />
      </p>
    </div>
  </section>
);

TxMined.propTypes = {
  txBlock: PropTypes.number.isRequired,
  txHash: PropTypes.string.isRequired,
  network: PropTypes.object.isRequired
};

export default TxMined;
