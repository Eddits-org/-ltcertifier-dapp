import React from 'react';
import PropTypes from 'prop-types';

import AddressIcon from 'components/AddressIcon.component';

const className = (account, valid) => {
  if (account === '') {
    return 'input is-medium';
  }
  return `input is-medium ${!valid ? 'is-danger' : 'is-success'}`;
};


const AddressComponent = ({ value, valid, onChange }) => (
  <nav className='level'>
    <div className='level-left'>
      <div className='level-item' style={{ width: '100px', height: '100px' }}>
        {valid && <AddressIcon address={value} /> }
        {!valid && (
          <span className='icon is-large'>
            <i className='fa fa-3x fa-question' />
          </span>
        )}
      </div>
      <div className='level-item' style={{ width: '500px' }}>
        <input
          className={className(value, valid)}
          type='text'
          placeholder='Ethereum Address'
          value={value}
          onChange={evt => onChange(evt.target.value)}
        />
      </div>
    </div>
  </nav>
);

AddressComponent.propTypes = {
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddressComponent;
