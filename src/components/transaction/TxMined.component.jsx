import React from 'react';
import PropTypes from 'prop-types';

const TxMined = ({ txBlock }) => (
  <div>
    <p>
      <h4 className='title is-4'>
        <span className='icon has-text-success' style={{ marginRight: '12px' }}>
          <i className='fa fa-check' />
        </span>
        The transaction has been mined in block <strong>{txBlock}</strong>.
      </h4>
    </p>
  </div>
);

TxMined.propTypes = {
  txBlock: PropTypes.number.isRequired
};

export default TxMined;
