import React from 'react';
import PropTypes from 'prop-types';

import AddressIcon from 'components/AddressIcon.component';

const AddressComponent = ({ account }) => (
  <nav className='level'>
    <div className='level-left'>
      <div className='level-item'>
        <AddressIcon address={account} />
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
