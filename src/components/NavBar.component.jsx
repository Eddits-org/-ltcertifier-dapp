import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const className = (location, path) => (
  `navbar-item ${location.pathname.indexOf(path) >= 0 ? 'is-active' : ''}`
);

const NavBarComponent = ({ location }) => (
  <div>
    <nav>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item' href='https://edits.intech.lu'>
            EDITS
          </a>
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
