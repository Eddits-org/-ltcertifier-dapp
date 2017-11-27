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
  cancel,
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
        <section className='section'>
          <div className='container'>
            <h1 className='title has-text-grey-dark'>
              Please review transaction details
            </h1>
            <p style={{ marginBottom: '5px' }}>
              The following informations will be send in an Ethereum transaction.
              Please verify carefully and confirm the transaction.
            </p>
            <TxDetail params={params} account={account} />
            <nav className='level'>
              <div className='level-left'>
                <div className='level-item'>
                  <button
                    className='button is-primary'
                    onClick={() => certify(network, account, params)}
                  >
                    Send transaction
                  </button>
                </div>
                <div className='level-item'>
                  <button
                    className='button is-light'
                    onClick={cancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </section>)}
      { txSent && !txMined && <WaitMining {...{ txHash, network }} />}
      { txMined && <TxMined {...{ txHash, txBlock, network }} />}
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
  certify: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
};

export default TransactionComponent;
