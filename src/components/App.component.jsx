import React from 'react';
import PropTypes from 'prop-types';

import Hero from 'components/Hero.component';
import Network from 'containers/Network.container';
import Signature from 'containers/Signature.container';
import Transaction from 'containers/Transaction.container';

const AppComponent = ({ ready, certificationStep }) => (
  <div className='container'>
    <Hero />
    <Network />
    {certificationStep === 1 && ready && <Signature />}
    {certificationStep === 2 && ready && <Transaction />}
  </div>
);

AppComponent.propTypes = {
  ready: PropTypes.bool.isRequired,
  certificationStep: PropTypes.number.isRequired
};

export default AppComponent;
