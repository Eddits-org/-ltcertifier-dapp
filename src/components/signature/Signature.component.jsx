import React from 'react';
import PropTypes from 'prop-types';

import Redirect from './Redirect.component';
import Address from './Address.component';

const SignatureComponent = ({
  processing,
  account,
  signAddress,
  samlRequest,
  alreadyCertified
}) => (
  <section className='section'>
    <div>
      <h1 className='title has-text-grey-dark'>
        Sign your address
      </h1>
      { !processing && (
        <div>
          <div>
            <p>
              Carefully check the address below.
              If you want to certify a different address,
              please change your current account in MetaMask.
            </p>
            <div style={{ marginTop: '5px', marginBottom: '5px' }}>
              <Address {...{ certified: alreadyCertified, account }} />
            </div>
          </div>
          <button
            className='button is-primary'
            onClick={() => signAddress(account)}
          >
            Sign with my LuxTrust device
          </button>
        </div>
      )}
      { processing && <p>You will be redirected to LuxTrust, please wait...</p> }
      { samlRequest !== null && <Redirect samlRequest={samlRequest} /> }
    </div>
  </section>
);

SignatureComponent.defaultProps = {
  samlRequest: null
};

SignatureComponent.propTypes = {
  account: PropTypes.string.isRequired,
  samlRequest: PropTypes.string,
  processing: PropTypes.bool.isRequired,
  alreadyCertified: PropTypes.bool.isRequired,
  signAddress: PropTypes.func.isRequired
};

export default SignatureComponent;
