import React from 'react';
import PropTypes from 'prop-types';

import Disclaimer from 'components/Disclaimer.component';
import Signature from 'containers/Signature.container';
import Transaction from 'containers/Transaction.container';


const CertifierComponent = ({ acceptDisclaimer, ready, step }) => (
  <div>
    {step === 1 && ready && <Disclaimer {...{ acceptDisclaimer }} /> }
    {step === 2 && ready && <Signature />}
    {step === 3 && ready && <Transaction />}
  </div>
);

CertifierComponent.propTypes = {
  ready: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,

  acceptDisclaimer: PropTypes.func.isRequired
};

export default CertifierComponent;
