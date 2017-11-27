import Web3 from 'services/Web3.service';

export const TRANSACTION_SENT = 'TRANSACTION_SENT';
export const TRANSACTION_HASH_RECEIVED = 'TRANSACTION_HASH_RECEIVED';
export const TRANSACTION_MINED = 'TRANSACTION_MINED';
export const TRANSACTION_CANCEL = 'TRANSACTION_CANCEL';

const transactionSent = () => ({
  type: TRANSACTION_SENT
});

const transactionHashReceived = hash => ({
  type: TRANSACTION_HASH_RECEIVED,
  hash
});

const transactionMined = block => ({
  type: TRANSACTION_MINED,
  block
});

export const certify = (network, account, params) => (dispatch) => {
  dispatch(transactionSent());
  Web3.certify(
    network.contract,
    account,
    params.signed_info,
    params.signed_info_signature,
    params.manifest,
    params.signer_certificate
  ).then((txHash) => {
    dispatch(transactionHashReceived(txHash));
    Web3.waitForMining(txHash).then((block) => {
      dispatch(transactionMined(block));
    });
  });
};

export const cancel = () => ({
  type: TRANSACTION_CANCEL
});
