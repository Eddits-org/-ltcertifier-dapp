import React from 'react';
import PropTypes from 'prop-types';

import Redirect from './Redirect.component';

const AccountContent = account => (
  <div>
    <p>
      Carefully check the address bellow.
      If you want to certify a different address,
      please change your current account in MetaMask.
    </p>
    <p>
      <span className='tag is-info is-large'>{ account }</span>
    </p>
  </div>
);

const CertifyButton = (address, action) => (
  <button className='button is-primary' onClick={() => action(address)}>
    Certify my address with LuxTrust signature
  </button>
);

const WaitMessage = (
  <p>
    You will be redirected to LuxTrust, please wait...
  </p>
);

const SignatureComponent = ({
  processing,
  account,
  signAddress,
  samlRequest
}) => (
  <div className='box' style={{ marginTop: '10px' }}>
    <div className='container'>
      <p>
        <strong>Certify your Ethereum address</strong>
      </p>
      { !processing && AccountContent(account) }
      { !processing && CertifyButton(account, signAddress) }
      { processing && WaitMessage }
      { samlRequest !== null && <Redirect samlRequest={samlRequest} /> }
    </div>
  </div>
);

SignatureComponent.defaultProps = {
  samlRequest: null
};

SignatureComponent.propTypes = {
  account: PropTypes.string.isRequired,
  samlRequest: PropTypes.string,
  processing: PropTypes.bool.isRequired,
  signAddress: PropTypes.func.isRequired
};

export default SignatureComponent;
