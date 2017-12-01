import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const className = (location, path) => (
  `navbar-item ${location.pathname.indexOf(path) >= 0 ? 'is-active' : ''}`
);

const NavBarComponent = ({ location }) => (
  <div>
    <nav className='navbar is-info'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/' href='/'>
          <span className='icon is-large' style={{ marginRight: '10px' }}>
            <i className='fa fa-2x fa-id-card-o' />
          </span>
          <span className='title is-size-4 has-text-white'>Ethereum PKI Certifier</span>
        </Link>
        <div className='navbar-burger burger' data-target='navbarExampleTransparentExample' />
      </div>

      <div id='navbarExampleTransparentExample' className='navbar-menu'>
        <div className='navbar-start'>
          <Link className={className(location, '/certify')} to='/certify' href='/certify'>
            Certify
          </Link>
          <Link className={className(location, '/verify')} to='/verify' href='/certify'>
            Verify
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

NavBarComponent.propTypes = {
  location: PropTypes.object.isRequired
};

export default NavBarComponent;
