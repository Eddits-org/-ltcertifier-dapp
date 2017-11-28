import React from 'react';

const infrachain = require('assets/images/infrachain.png');
const intech = require('assets/images/intech.png');
const luxtrust = require('assets/images/luxtrust.png');

const FooterComponent = () => (
  <footer className='footer'>
    <div className='columns'>
      <div className='column is-one-third has-text-centered' style={{ margin: 'auto' }}>
        <img src={infrachain} alt='Infrachain' />
      </div>
      <div className='column is-one-third has-text-centered' style={{ margin: 'auto' }}>
        <img src={luxtrust} alt='LuxTrust' />
      </div>
      <div className='column is-one-third has-text-centered' style={{ margin: 'auto' }}>
        <img src={intech} alt='InTech S.A.' />
      </div>
    </div>
  </footer>
);

export default FooterComponent;
