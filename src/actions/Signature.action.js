import Orely from 'services/Orely.service';
import Web3 from 'services/Web3.service';

export const SAML_REQUEST_REQUESTED = 'SAML_REQUEST_REQUESTED';
export const SAML_REQUEST_RECEIVED = 'SAML_REQUEST_RECEIVED';
export const ADDRESS_VERIFICATION_FETCHED = 'ADDRESS_VERIFICATION_FETCHED';

const samlRequestReceived = request => ({
  type: SAML_REQUEST_RECEIVED,
  request
});

export const buildSamlRequest = address => (dispatch) => {
  dispatch({
    type: SAML_REQUEST_REQUESTED
  });
  Orely.generateSAMLRequest(address).then((response) => {
    dispatch(samlRequestReceived(response.saml_request));
  });
};

export const checkAddressCertification = (network, address) => (dispatch) => {
  const addr = (address.startsWith('0x') ? address : `0x${address}`);
  Web3.isAddressCertified(network.contract, addr).then((certified) => {
    dispatch({
      type: ADDRESS_VERIFICATION_FETCHED,
      certified
    });
  });
};
