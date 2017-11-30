import React from 'react';
import PropTypes from 'prop-types';

import Certification from 'components/certification/Certification.component';
import Address from 'components/certification/Address.component';

const VerifierComponent = ({
  network,
  account,
  valid,
  fetching,
  certification,
  changeAddress
}) => (
  <section className='section'>
    {!!network && (
      <div>
        <h1 className='title has-text-grey-dark'>
          Verify an address
        </h1>
        <div>
          <Address
            value={account}
            onChange={value => changeAddress(network, value)}
            valid={valid}
          />
        </div>
      </div>
    )}
    {fetching && (
      <p>
        <i className='fa fa-refresh fa-spin' style={{ marginRight: '5px' }} />
        Retrieving the certification for address {account}...
      </p>
    )}
    {!fetching && !!certification && <Certification {...{ certification }} />}
  </section>
);

VerifierComponent.defaultProps = {
  certification: null,
  network: null
};

VerifierComponent.propTypes = {
  network: PropTypes.object,
  account: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  certification: PropTypes.object,
  changeAddress: PropTypes.func.isRequired
};

export default VerifierComponent;
