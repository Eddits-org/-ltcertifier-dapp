import React from 'react';
import PropTypes from 'prop-types';

import Signature from 'containers/Signature.container';
import Transaction from 'containers/Transaction.container';


const CertifierComponent = ({ ready, step }) => (
  <div>
    {step === 1 && ready && <Signature />}
    {step === 2 && ready && <Transaction />}
  </div>
);

CertifierComponent.propTypes = {
  ready: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired
};

export default CertifierComponent;
