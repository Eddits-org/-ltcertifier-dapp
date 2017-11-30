/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

import jazzicon from 'jazzicon';

const jsNumberForAddress = (address) => {
  const addr = address.slice(2, 10);
  const seed = parseInt(addr, 16);
  return seed;
};

const svg = (address) => {
  const num = jsNumberForAddress(address);
  return jazzicon(100, num).innerHTML;
};

const addressWith0x = address => (address.startsWith('0x') ? address : `0x${address}`);

const AddressComponent = ({ address }) => (
  <div className='addrIcon' style={{ borderRadius: '50px' }} dangerouslySetInnerHTML={{ __html: svg(addressWith0x(address)) }} />
);

AddressComponent.propTypes = {
  address: PropTypes.string.isRequired
};

export default AddressComponent;
