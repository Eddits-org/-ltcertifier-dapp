/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

import jazzicon from 'jazzicon';

const jsNumberForAddress = (account) => {
  const addr = account.slice(2, 10);
  const seed = parseInt(addr, 16);
  return seed;
};

const svg = (account) => {
  const num = jsNumberForAddress(account);
  return jazzicon(100, num).innerHTML;
};


const AddressComponent = ({ account }) => (
  <nav className='level'>
    <div className='level-left'>
      <div className='level-item'>
        <div className='addrIcon' style={{ borderRadius: '50px' }} dangerouslySetInnerHTML={{ __html: svg(account) }} />
      </div>
      <div className='level-item'>
        <span className='tag is-large has-text-grey-dark'>{ account }</span>
      </div>
    </div>
  </nav>
);

AddressComponent.propTypes = {
  account: PropTypes.string.isRequired
};

export default AddressComponent;
