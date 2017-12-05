import React from 'react';
import PropTypes from 'prop-types';

import Amount from 'components/Amount.component';
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
  txBlock,
  fetchingCost,
  cost
}) => (
  <div className='container'>
    { !txSent && (
      <section className='section'>
        <div>
          <h1 className='title has-text-grey-dark'>
            Please review transaction details
          </h1>
          <p>
            The following informations will be send in an Ethereum transaction.
            Please verify carefully and confirm the transaction.
          </p>
          <TxDetail params={params} account={account} />
          {!fetchingCost && !!cost && (
            <div>
              Current certification cost (without transaction fees): <Amount value={cost} />
            </div>
          )}
          <nav className='level' style={{ marginTop: '5px' }}>
            <div className='level-left'>
              <div className='level-item'>
                <button
                  className='button is-primary'
                  disabled={fetchingCost || !cost}
                  onClick={() => certify(network, account, params, cost)}
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
);

TransactionComponent.defaultProps = {
  txHash: null,
  txBlock: null,
  cost: null
};

TransactionComponent.propTypes = {
  params: PropTypes.object.isRequired,
  network: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired,
  txSent: PropTypes.bool.isRequired,
  txHash: PropTypes.string,
  txMined: PropTypes.bool.isRequired,
  txBlock: PropTypes.number,
  cost: PropTypes.object,
  fetchingCost: PropTypes.bool.isRequired,
  certify: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
};

export default TransactionComponent;
