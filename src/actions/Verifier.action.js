import Web3 from 'services/Web3.service';

export const VERIFY_ACCOUNT_CHANGED = 'VERIFY_ACCOUNT_CHANGED';
export const FETCH_ACCOUNT_CERTIFICATION = 'FETCH_ACCOUNT_CERTIFICATION';
export const ACCOUNT_CERTIFICATION_FETCHED = 'ACCOUNT_CERTIFICATION_FETCHED';
export const CLEAR_ACCOUNT_CERTIFICATION = 'CLEAR_ACCOUNT_CERTIFICATION';

const fetchAccountCertification = (network, account) => (dispatch) => {
  dispatch({
    type: FETCH_ACCOUNT_CERTIFICATION
  });
  Web3.getAddressCertification(network.contract, account).then((certification) => {
    dispatch({
      type: ACCOUNT_CERTIFICATION_FETCHED,
      account,
      certification
    });
  });
};

const clearAccountCertification = () => ({
  type: CLEAR_ACCOUNT_CERTIFICATION
});

export const changeVerifyAccount = (network, account) => (dispatch) => {
  const valid = Web3.isAddress(account);
  if (valid) dispatch(fetchAccountCertification(network, account));
  else dispatch(clearAccountCertification());
  dispatch({
    type: VERIFY_ACCOUNT_CHANGED,
    account,
    valid: Web3.isAddress(account)
  });
};
