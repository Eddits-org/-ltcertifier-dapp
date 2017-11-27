import Orely from 'services/Orely.service';

export const SAML_REQUEST_REQUESTED = 'SAML_REQUEST_REQUESTED';
export const SAML_REQUEST_RECEIVED = 'SAML_REQUEST_RECEIVED';

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
