import React from 'react';

const TitleComponent = () => (
  <div className='titlebar'>
    <nav className='navbar is-info'>
      <div className='navbar-brand'>
        <span className='navbar-item'>
          <span className='icon is-large' style={{ marginRight: '10px' }}>
            <i className='fa fa-2x fa-id-badge' />
          </span>
          <span className='title is-size-4 has-text-white'>Ethereum address certifier</span>
        </span>
        <div className='navbar-burger burger' data-target='navbarExampleTransparentExample' />
      </div>
    </nav>
  </div>
);

TitleComponent.propTypes = {};

export default TitleComponent;
