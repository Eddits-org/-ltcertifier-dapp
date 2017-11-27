import React from 'react';
import PropTypes from 'prop-types';

import TxDetail from './TxDetail.component';
import WaitMining from './WaitMining.component';
import TxMined from './TxMined.component';

const TransactionComponent = ({
  params,
  account,
  network,
  certify,
  txSent,
  txHash,
  txMined,
  txBlock
}) => (
  <div className='box' style={{ marginTop: '10px' }}>
    <div className='container'>
      <p>
        <strong>Send the transaction</strong>
      </p>
      { !txSent && (
      <div>
        <p>
          The following informations will be send in an Ethereum transaction.
          Please verify carefully and confirm the transaction.
        </p>
        <TxDetail params={params} account={account} />
        <button className='button is-primary' onClick={() => certify(network, account, params)}>
          Send transaction
        </button>
      </div>)}
      { txSent && !txMined && <WaitMining txHash={txHash} />}
      { txMined && <TxMined txHash={txHash} txBlock={txBlock} />}
    </div>
  </div>
);

TransactionComponent.defaultProps = {
  txHash: null,
  txBlock: null
};

TransactionComponent.propTypes = {
  params: PropTypes.object.isRequired,
  network: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired,
  txSent: PropTypes.bool.isRequired,
  txHash: PropTypes.string,
  txMined: PropTypes.bool.isRequired,
  txBlock: PropTypes.number,
  certify: PropTypes.func.isRequired
};

export default TransactionComponent;
