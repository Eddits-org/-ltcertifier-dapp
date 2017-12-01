import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import AddressIcon from 'components/AddressIcon.component';

const AddressComponent = ({ account, certified }) => (
  <nav className='level'>
    <div className='level-left'>
      <div className='level-item' style={{ minWidth: '100px' }}>
        <AddressIcon address={account} />
      </div>
      <div className='level-item'>
        <span className='tag is-large has-text-grey-dark'>{ account }</span>
      </div>
      <div className='level-item'>
        {certified && (
          <Link to={`/verify/${account}`} href={`/verify/${account}`} className='has-text-success tooltip is-tooltip-multiline' data-tooltip='Association of a new certificate to this address will replace the current certification'>
            <span className='icon'>
              <i className='fa fa-check-square' />
            </span>
            Already certified
          </Link>
        )}
        {!certified && (
          <div className='has-text-info'>
            <span className='icon'>
              <i className='fa fa-info-circle' />
            </span>
            Not yet certified
          </div>
        )}
      </div>
    </div>
  </nav>
);

AddressComponent.propTypes = {
  account: PropTypes.string.isRequired,
  certified: PropTypes.bool.isRequired
};

export default AddressComponent;
