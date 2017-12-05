import React from 'react';
import PropTypes from 'prop-types';

import Web3 from 'services/Web3.service';

const AmountComponent = ({ value }) => (
  <span className='tag is-light is-medium'>
    <strong>{Web3.toValue(value, 'ether').toString()} ETH</strong>
  </span>
);

AmountComponent.propTypes = {
  value: PropTypes.object.isRequired
};

export default AmountComponent;
